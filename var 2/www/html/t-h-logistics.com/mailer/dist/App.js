"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = require("nodemailer");
const dotenv_1 = __importDefault(require("dotenv"));
const isValidEmail_1 = __importDefault(require("./validations/isValidEmail"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({});
class Mailer {
    constructor() {
        this.APP = (0, express_1.default)();
        this.PORT = 8888;
        this.EMAIL = process.env.MAILER_EMAIL || '';
        this.PASSWORD = process.env.MAILER_PASSWORD || '';
        this.TRANSPORTER = (0, nodemailer_1.createTransport)({
            port: 587,
            host: 'smtp.gmail.com',
            auth: {
                user: this.EMAIL,
                pass: this.PASSWORD, // your email password or app-specific password
            },
            secure: false,
        });
        this.run();
    }
    setupCors() {
        this.APP.use((0, cors_1.default)({}));
    }
    setupBodyParsers() {
        this.APP.use(body_parser_1.default.json());
        this.APP.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    handle() {
        this.APP.post('/mail', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, body, email, locale } = req.body;
                const { error } = (0, isValidEmail_1.default)(req.body);
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
                };
                yield this.TRANSPORTER.sendMail(mailoptions);
                console.log('Письмо успешно отправлено');
                return res.json({
                    data: 'Message sent successfully'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error });
            }
        }));
        this.APP.post('/api/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, locale } = req.body;
                const { error } = (0, isValidEmail_1.default)(req.body);
                if (error) {
                    return res.status(400).json({ error });
                }
                const mailoptions = {
                    from: this.EMAIL,
                    to: email,
                    subject: `
                     Активация аккаунта на сайте t-h-logistics.com
                `,
                    text: `
                    Приветствуем Вас, ${name}



Для активации вашего профиля, пожалуйста перейдите по ссылке:

https://t-h-logistics.com/и какаято сложная уникальная ссылка



Если Вы не регистрировались на сайте t-h-logistics.com, пожалуйста удалите данное письмо.



С уважением,

Транс-Хоуп
                `,
                };
                yield this.TRANSPORTER.sendMail(mailoptions);
                console.log('Письмо успешно отправлено');
                return res.json({
                    data: 'Message sent successfully'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error });
            }
        }));
        this.APP.post('/api/forgot', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, locale } = req.body;

                const mailoptions = {
                    from: this.EMAIL,
                    to: email,
                    subject: `
                     Активация аккаунта на сайте t-h-logistics.com
                `,
                    text: `
                    Приветствуем Вас, ${name}



Для активации вашего профиля, пожалуйста перейдите по ссылке:

https://t-h-logistics.com/и какаято сложная уникальная ссылка



Если Вы не регистрировались на сайте t-h-logistics.com, пожалуйста удалите данное письмо.



С уважением,

Транс-Хоуп
                `,
                };
                yield this.TRANSPORTER.sendMail(mailoptions);
                console.log('Письмо успешно отправлено');
                return res.json({
                    data: 'Message sent successfully'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error });
            }
        }));
        this.APP.get('/api', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.json({
                    data: 'Message sent successfully'
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ error });
            }
        }));
    }
    run() {
        this.setupCors();
        this.setupBodyParsers();
        this.handle();
        try {
            this.APP.listen(this.PORT, '0.0.0.0', () => {
                console.log(`Your mailer is successfully up and running on port ${this.PORT}`);
            });
        }
        catch (error) {
            console.log(`An error occured while setting up your mailer, ${error}`);
        }
    }
}
new Mailer();
