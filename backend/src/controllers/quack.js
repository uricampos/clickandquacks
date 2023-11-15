import QuackModel from '../models/quack.js';

export const getQuacks = async (req, res) => {
    try {
        const quacks = await QuackModel.find().exec();
        res.status(200).json(quacks);
    } catch (error) {
        console.error(error);
    }
};

export const updateQuacks = async (req, res) => {
    const newQuack = req.body.count + 1;
    const quackId = req.params.quackId;

    try {
        const quack = await QuackModel.findById(quackId).exec();
        quack.count = newQuack;

        const updatedQuack = await quack.save();

        res.status(200).json(updatedQuack);
    } catch (error) {
        console.error(error);
    }
};
