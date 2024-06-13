import mongoose from "mongoose";

const UserInsertSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false}
});

export const UserInsert = mongoose.model('UserInsert', UserInsertSchema);