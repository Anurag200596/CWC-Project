import mongoose, { Schema } from "mongoose"
import jwt from "jason web token"
import bcrypt from "bcrypt"


const userschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    thumbnail: {
        type: String,  // cloudnary ka url use krenge
        required: true,

    },
    avatar: {
        type: String,  // cloudnary ka url use krenge
    },
    watchhistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "passwword is required"]

    },
    refreshtoken: {
        type: string
    }
}, { timestamps: true })


userschema.pre("Save", async function (next) {
    if (!this.password.ismodified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()

})
userschema.methods.isPasswordCorect = async function (password) {
    return await bcrypt.capmare(password, this.password)
}

userschema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: yhis.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userschema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}







export const user = mongoose.model("User", userschema)