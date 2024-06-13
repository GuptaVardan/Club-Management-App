import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    time: {type: String, required: true}
});

export const Event = mongoose.model('Event', EventSchema);