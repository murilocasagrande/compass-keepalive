import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String },
    user: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false
})

userSchema.methods.isValid = function () {
    let errorArray = [
        validateUser(this.user),
        validatePassword(this.password),
    ].filter(el => el !== true)
    let validation = { ok: errorArray.length === 0, errors: errorArray }
    return validation
}


function validateUser(user) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user) ? true : "user"
}

function validatePassword(password) {
    return password.length >= 6 ? true : 'password'
}

const users = mongoose.model("users", userSchema)

export default users;