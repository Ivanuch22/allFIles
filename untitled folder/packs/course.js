import React, { useState } from 'react';
import globalCss from './css/globalCss';
import { View, Text, Button, StyleSheet, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from "./screens/ui/AuthProvider";
import { useAlertConfirm } from "./screens/ui/AlertConfirmPrivider";
import { ImageBackground } from 'react-native';

export default function CourseScreen({ navigation }) {
  const { isAuthenticated, getUser, logout } = useAuth();
  const { setAlertConfirm, showAlertConfirm } = useAlertConfirm()

  const user = getUser()

  const [progress, setProgress] = useState(0);
  const [widthAnim] = useState(new Animated.Value(0));

  const [isCardPressed1, setIsCardPressed1] = useState(false);

  // Define the number of cards you want to generate (40 in this case)
  const numberOfCards = 50;

  const increaseProgress = () => {
    setProgress(prev => (prev < 100 ? prev + 10 : 100));
  };

  const width = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <ScrollView>
      <ImageBackground source={require('./images/background-app/course-start.png')} style={styles.bgImg}>
        {isAuthenticated() ?
          <View>
            <Text>Имя пользователя: {user.username}</Text>
            <Text>Почта: {user.email}</Text>
            <Button
              title="Выйти из аккаунта"
              onPress={() => {
                logout()
                  .then(() => {
                    setAlertConfirm({
                      title: "Вы успешно вышли из аккаунта",
                      message: "Вы будете перенаправлены на начальный экран",
                      confirmBtn: {
                        callback: () => navigation.navigate('StartPageScreen')
                      }
                    })
                    showAlertConfirm()
                  })
                  .catch(() => {
                    setAlertConfirm({
                      title: "Ошибка",
                      message: "Не удалось выйти из аккаунта",
                      errorStyle: true
                    })
                    showAlertConfirm()
                  })
              }}
            />
          </View>
          : ""}

        <View>
          <View style={styles.progressBarContainer}>
            <Animated.View style={[styles.progressBar, { width }]} />
          </View>

          <Button title="Increase Progress" onPress={increaseProgress} />

          {/* Generate 40 cards */}
          {Array.from({ length: numberOfCards }).map((_, index) => (
            <View key={index} style={styles.cardCourse}>
              <Text>Category {index + 1} Title</Text>
              <TouchableOpacity
                style={[styles.card, isCardPressed1 ? [styles.cardPressed, styles.bgGryPressed] : styles.bgGry]}
                onPress={() => navigation.navigate('course_lesson')}
                onPressIn={() => setIsCardPressed1(true)}
                onPressOut={() => setIsCardPressed1(false)}
                activeOpacity={1}
              >
                <Text>lesson {index + 1}</Text>
              </TouchableOpacity>
            </View>
          ))}

        </View>

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 20,
    width: '80%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b5998',
    borderRadius: 10,
  },
  card: {
    width: 110,
    height: 110,
    marginBottom: '5%',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },
  cardPressed:{
    shadowOffset: { width: 0, height: 0 },
    transform: [{ translateY: 4 }],
  },
  bgGry: {
    backgroundColor: '#f9f9f9',
    borderColor: '#d8d8d8',
    shadowColor: '#d8d8d8',
  },
  bgGryPressed: {
    backgroundColor: '#f9f9f9',
    borderColor: '#d8d8d8',
  },
  bgImg:{
    flex: 1, 
    resizeMode: 'cover'
  }

});