"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const library_1 = require("@prisma/client/runtime/library");
const resend_1 = require("resend");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.get('/', (req, res) => {
    res.send('Hello good!');
});
app.post('/user/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const post = yield prisma.profile.create({
            data: {
                name: body.name,
                username: body.username,
                email: body.email,
                password: body.password
            }
        });
        return res.status(200).json({ post });
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.meta)
                console.log(error.meta.target);
            return res.status(202).json({ error: error.meta });
        }
    }
}));
app.put('/user/profile/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const ID = Number(req.params.id);
    try {
        const put = yield prisma.profile.update({
            where: { id: ID },
            data: {
                avatar: body.imageURL,
                location: body.location,
                reason1: body.reason1,
                reason2: body.reason2,
                reason3: body.reason3,
            }
        });
        return res.status(200).json({ put });
    }
    catch (error) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            if (error.meta)
                // console.log(error.meta.target);
                return res.status(202).json({ error: error.meta });
        }
    }
}));
// Sending email
const resend = new resend_1.Resend(process.env.RESEND_KEY);
app.post("/user/verify/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    // console.log(email);
    const { data, error } = yield resend.emails.send({
        from: 'Dribble <dribble@yashagrawal.top>',
        to: [`${email}`],
        subject: "Verify account",
        text: `Welcome to dribble, Thankyou `,
    });
    if (error) {
        return res.status(400).json({ error });
    }
    res.status(200).json({ data });
}));
app.listen(port, () => {
    return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});
