import mongoose from "mongoose";
import users from "../models/User.js";

class UserController {

    static createUser = (req, res) => {
        let user = new users(req.body);
        let validation = user.isValid()
        if (validation.ok) {
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
        let { user } = req.body;
        console.log(req.body);
        users.find({ 'user': user }, {}, (err, users) => {
            res.status(200).send(users);
        })

    }
}


export default UserController;