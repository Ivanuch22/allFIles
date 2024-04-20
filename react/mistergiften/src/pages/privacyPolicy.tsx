import React, { useEffect } from "react";
const PrivacyPolicy = () => {
  useEffect(() => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

    // Викликайте scrollToTop при завантаженні сторінки
    scrollToTop();
  }, []);
  return (
    <strong className="Oferta">
      Політика конфіденційності
      <br />
      Сайт https://mister-gifter.com/ належить Mister Gifter, що є контролером
      для ваших особистих даних.
      <br />
      <br />
      Ми використовуємо цю Політику конфіденційності, яка визначає, як ми
      обробляємо інформацію, зібрану https://mister-gifter.com/, а також
      причини, з яких ми повинні збирати певні особисті дані про вас. Тому ви
      повинні прочитати цю Політику конфіденційності перед використанням сайту
      https://mister-gifter.com/.
      <br />
      <br />
      Ми дбаємо про ваші особисті дані та гарантуємо їхню конфіденційність та
      безпеку.
      <br />
      <br />
      Особиста інформація, яку ми збираємо:
      <br />
      при відвідуванні https://mister-gifter.com/, ми автоматично збираємо певну
      інформацію про ваш пристрій, включаючи інформацію про ваш веб-браузер,
      IP-адресу, часовий пояс і т. д. і деякі зі встановлених файлів cookies на
      вашому пристрої . Крім того, коли ви переглядаєте Сайт, ми збираємо
      інформацію про окремі сторінки або продукти, які ви переглядаєте, про те,
      які сайти або умови пошуку направили вас на Сайт і як ви взаємодієте з
      Сайтом. Ми називаємо цю автоматично зібрану інформацію «Інформація про
      пристрій». Крім того, ми можемо збирати особисті дані, які ви надаєте нам
      (включаючи ім'я, прізвище, адресу, платіжну інформацію тощо) під час
      реєстрації, щоб мати можливість виконати угоду.
      <br />
      <br />
      Чому ми обробляємо ваші дані?
      <br />
      Нашим головним пріоритетом є безпека клієнтів, ось чому ми повинні
      обробляти той мінімальний обсяг даних користувача: рівно стільки, скільки
      необхідно для обслуговування сайту. Інформація, що збирається автоматично,
      використовується лише для виявлення потенційних порушень та отримання
      статистичної інформації про використання Сайту. Ця статистична інформація
      не збирається так, щоб можна було ідентифікувати конкретного користувача
      системи.
      <br />
      <br />
      Ви можете відвідувати Сайт, не повідомляючи нам, хто ви, і не розкриваючи
      жодної інформації, за допомогою якої будь-хто міг би ідентифікувати вас як
      конкретну особу. Однак, якщо ви хочете використовувати деякі функції
      сайту, хочете отримувати нашу розсилку новин або інші відомості,
      заповнивши форму, ви можете надати нам особисті дані, такі як вашу адресу
      електронної пошти, ім'я, прізвище, місце проживання, організації,
      телефону. Ви можете не надавати нам особисті дані, але в цьому випадку ви
      не зможете скористатися певними функціями Сайту. Наприклад, ви не зможете
      отримувати наші розсилки новин або зв'язуватися з нами безпосередньо через
      Сайт. Користувачі, які не впевнені, яка інформація обов'язкова, можуть
      зв'язатися з нами через gifter.in.ua@gmail.com.
      <br />
      <br />
      Ваші права:
      <br />
      Якщо ви є резидентом Європи, у вас є такі права, пов'язані з вашими
      особистими даними:
      <br />
      <br />
      Право отримання інформації.
      <br />
      Право доступу
      <br />
      Право на внесення виправлень.
      <br />
      Право на знищення даних.
      <br />
      Право обмежувати обробку.
      <br />
      Право на перенесення даних.
      <br />
      Право на відновлення.
      <br />
      Права щодо автоматизованого прийняття рішень та профілювання.
      <br />
      Якщо ви бажаєте скористатися цим правом, зв'яжіться з нами, використовуючи
      наведену нижче контактну інформацію.
      <br />
      <br />
      Крім того, якщо ви є резидентом Європи, ми відзначаємо, що ми обробляємо
      вашу інформацію для виконання контрактів, які можуть бути укладені з вами
      (наприклад, якщо ви робите замовлення через Сайт), або іншим чином для
      переслідування наших законних ділових інтересів, перерахованих вище . Крім
      того, зверніть увагу, що ваша інформація може бути передана за межі
      Європи, включаючи Канаду та США.
      <br />
      <br />
      Посилання на інші сайти:
      <br />
      Наш Сайт може містити посилання на інші сайти, які нам не належать та не
      контролюються нами. Майте на увазі, що ми не несемо відповідальності за
      політику конфіденційності таких сайтів або третіх осіб. Ми рекомендуємо
      вам перевіряти, коли ви залишаєте наш Сайт та читаєте заяви про
      конфіденційність кожного сайту, який може збирати особисту інформацію.
      <br />
      <br />
      Інформаційна безпека:
      <br />
      Ми захищаємо інформацію, яку ви надаєте на комп'ютерних серверах, у
      контрольованому безпечному середовищі, захищеному від несанкціонованого
      доступу, використання або розкриття. Ми приймаємо розумні адміністративні,
      технічні та фізичні заходи безпеки для захисту від несанкціонованого
      доступу, використання, зміни та розкриття особистих даних, що знаходяться
      під його контролем та зберіганням. Однак передача даних через Інтернет або
      бездротову мережу не може бути гарантованою.
      <br />
      <br />
      Юридичне розкриття:
      <br />
      Ми будемо розкривати будь-яку інформацію, яку ми збираємо, використовуємо
      або отримуємо, якщо це потрібно або дозволено законом, наприклад,
      відповідно до повістки до суду або аналогічного судового процесу, і коли
      ми сумлінно вважаємо, що розкриття інформації необхідне для захисту наших
      прав , вашої безпеки або безпеки інших осіб, розслідування шахрайства або
      відповіді на запит уряду.
      <br />
      <br />
      Контактна інформація:
      <br />
      Якщо ви хочете зв'язатися з нами, щоб дізнатися більше ше про цю Політику,
      або хочете зв'язатися з нами з будь-якого питання, що стосується
      індивідуальних прав та вашої Особистої інформації, ви можете надіслати
      листа на адресу gifter.in.ua@gmail.com.
      <br />
    </strong>
  );
};

export default PrivacyPolicy;
