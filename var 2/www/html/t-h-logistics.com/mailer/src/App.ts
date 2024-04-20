import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { Transporter, createTransport } from 'nodemailer';
import dotenv from 'dotenv';
import isValidEmail from './validations/isValidEmail';
import cors from 'cors';

dotenv.config({})

interface MessageDetails {
    title: string;
    body: string;
}

interface Messages {
    ru: MessageDetails;
    uk: MessageDetails;
    en: MessageDetails;
}

interface MailOptions {
    name?: string;
    email: string;
    body?: string;
    locale: keyof Messages;
}

type Locale = keyof Messages; // 'ru' | 'ua' | 'en'
class Mailer {
    private PORT: number;
    private EMAIL: string;
    private PASSWORD: string;
    private APP: Application;
    private TRANSPORTER: Transporter;

    constructor() {
        this.APP = express();
        this.PORT = 8888;
        this.EMAIL = process.env.MAILER_EMAIL || '';
        this.PASSWORD = process.env.MAILER_PASSWORD || '';
        this.TRANSPORTER = createTransport({
            port: 587,
            host: 'smtp.gmail.com',
            auth: {
                user: this.EMAIL, // your email address
                pass: this.PASSWORD, // your email password or app-specific password
            },
            secure: false,
        });
        this.run();
    }


    private setupCors(): void {
        this.APP.use(cors({}))
    }

    private setupBodyParsers(): void {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({ extended: true }));
    }

    private handle(): void {
        const messages:Messages = {
            ru:{
                title: "Активация аккаунта на сайте t-h-logistics.com",
                body: `
Приветствуем Вас


Для активации вашего профиля, пожалуйста перейдите по ссылке:

https://t-h-logistics.com/


Если Вы не регистрировались на сайте t-h-logistics.com, пожалуйста удалите данное письмо.


С уважением,

Транс-Хоуп`
            },
            uk:{
                title: `Активация аккаунта на сайте t-h-logistics.com`,
                body: `
Вітаємо Вас


Для активації вашого профілю, будь ласка, перейдіть за посиланням:

https://t-h-logistics.com/


Якщо Ви не реєструвалися на сайті t-h-logistics.com, будь ласка видаліть цей лист.


З повагою,

Транс-Хоуп
                `
            },
            en:{
                title: "Account activation on the site t-h-logistics.com",
                body:`
Welcome


To activate your profile, please follow the link:

https://t-h-logistics.com/


If you have not registered at t-h-logistics.com, please delete this email.


Regards,

Trans-Hope
                `
            }
        }

        this.APP.post('/mail', async (req, res) => {
            try {
                const {
                    name,
                    body,
                    email,
                    locale
                } = req.body;

                const { error } = isValidEmail(req.body);

                if (error) {
                    return res.status(400).json({ error });
                }
                const mailoptions = {
                    from: this.EMAIL,
                    to: 'info@t-h-logistics.com',
                    subject: `
                    Запрос с страницы контактов t-h-logistics.com
                `,
                    text: `
                    От: ${name}
                    Email: ${email}
                    Язык: ${locale}

                    Сообщение: ${body}
                `,
                }


                await this.TRANSPORTER.sendMail(mailoptions);
                console.log('Письмо успешно отправлено')
                return res.json({
                    data: 'Message sent successfully'
                })
            } catch (error) {
                console.log(error)
                return res.status(500).json({ error });
            }
        })
        this.APP.post('/api/forgot', async (req, res) => {
            try {
                const {
                    email,
                    locale
                } = req.body;
                let validatedLocale: Locale = "ru"
                if (['ru', 'uk', 'en'].includes(locale)) {
                    validatedLocale = locale;
                }
                console.log("hello")
                const mailoptions = {
                    from: this.EMAIL,
                    to: email,
                    subject: messages[validatedLocale].title,
                    text: messages[validatedLocale].body,
                }


                await this.TRANSPORTER.sendMail(mailoptions);
                console.log('Письмо успешно отправлено')
                return res.json({
                    data: 'Message sent successfully'
                })
            } catch (error) {
                console.log(error)
                return res.status(500).json({ error });
            }
        })
    }

    private run(): void {
        this.setupCors();
        this.setupBodyParsers();
        this.handle();
        try {
            this.APP.listen(this.PORT, '0.0.0.0', () => {
                console.log(`Your mailer is successfully up and running on port ${this.PORT}`)
            })
        } catch (error) {
            console.log(`An error occured while setting up your mailer, ${error}`)
        }
    }
}

new Mailer();
