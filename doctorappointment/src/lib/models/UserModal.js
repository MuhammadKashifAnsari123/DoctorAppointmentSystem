import mongoose from "mongoose";


const {Schema} = mongoose;

const userSchema = new Schema({
    firtName: String,
    lastName: String,
    email: String,
    picture: String,
    role: {type: String, default: "user", enum: ["users", "doctor","admin"]},
    extraInfo: {
        fees: Number,
        hospital:String,
        time:String,
        bio:String,
        specialization:String,
        gender:String,
    }
});


export const UserModal = 
mongoose.models.Users || mongoose.model("Users", userSchema);