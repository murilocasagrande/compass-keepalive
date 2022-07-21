import mongoose from "mongoose";
import users from "../models/User.js";
import CryptoES from "crypto-es";
import { Jwt } from "jsonwebtoken";

const SECRET = 'auth-token';

class UserController {

    static createUser = (req, res) => {
        let user = new users(req.body);

        let validation = user.isValid();
        if (validation.ok) {
            // user.password = CryptoES.SHA256(user.user).toString();
            user.save((err) => {
                if (err) {
                    res.status(500).send({ message: `${err.message} - Failed to create user.` })
                } else {
                    res.status(201).send(user.toJSON())
                }
            })
        } else {
            res.status(400).send({
                error: "Validation error",
                message: validation.errors
            })
        }
    }
    static listUsers = (req, res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
    }

    static listUser = (req, res) => {
        let { user } = req.query;

        console.log(req.body);
        users.find({ 'user': user }, {}, (err, users) => {
            res.status(200).send(users);
        })

    }
    static validateLogin = (req, res) => {
        let { user, password } = req.query;

        console.log(user, password);
        console.log(req.body);
        users.find({ 'user': user, 'password': password }, {}, (err, users) => {
            if (users.length > 0) {
                const token = Jwt.sign({ user, password }, SECRET, { expiresIn: 60 })
                res.status(200).json(users, token);
            } else {
                res.status(401).send('User not found')
            }
        })

    }
}


export default UserController;