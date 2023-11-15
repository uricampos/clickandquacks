import { Schema, model } from 'mongoose';

const quackSchema = new Schema(
    {
        count: { type: Number, required: true },
    },
    { timestamps: true }
);

export default model('Quack', quackSchema);
