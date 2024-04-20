import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import globalCss from './css/globalCss';

export default function BooksScreen({ navigation }) {
  const books = [
    {
      id: 1,
      title: 'The Wolf and the Lamb',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/the-wolf-and-the-lamb-the-classic-fairy-tale.webp',
    },
    {
      id: 2,
      title: 'Brer Rabbit and Tar Baby',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/brer-rabbit-and-tar-baby-the-classic-fairy-tale.webp',
    },
    {
      id: 3,
      title: 'The Goose and the Golden Eggs',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/walkabout-james-vance-marshall.webp',
    },
    {
      id: 4,
      title: 'The Lonely Puppy',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/the-lonely-puppy-the-classic-fairy-tale.webp',
    },
    {
      id: 5,
      title: 'The Lonely Puppy',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/the-lonely-puppy-the-classic-fairy-tale.webp',
    },
    {
      id: 6,
      title: 'The Lonely Puppy',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/the-lonely-puppy-the-classic-fairy-tale.webp',
    },
    {
      id: 7,
      title: 'The Lonely Puppy',
      imageUri: 'https://www.language.onllyons.com/ru/ru-en/packs/assest/books/read-books/img/the-lonely-puppy-the-classic-fairy-tale.webp',
    },
  ];

  return (

    <ScrollView style={globalCss.container}>
      <Text style={globalCss.title}>Коллекция книг</Text>
      <View style={styles.container}>
        {books.map((book) => (
          <TouchableOpacity
            key={book.id}
            style={styles.cardBook}
            onPress={() => navigation.navigate('books_reading')}
            activeOpacity={1}
          >
            <Image source={{ uri: book.imageUri }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardBook: {
    width: '48%',
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 14,
  },
  title: {
    fontSize: 15,
    marginTop: '4%',
    color: 'black',
  },
});
