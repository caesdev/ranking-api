import mongoose from "mongoose";

export const userEntity = () => {
    let userSchema = new mongoose.Schema(
        {
            name: String,
            power: Number,
            rank: String,
            server: Number
        }
    )
    return mongoose.models.users || mongoose.model('users', userSchema);
}