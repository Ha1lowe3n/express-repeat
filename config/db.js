import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            `mongodb+srv://user:${process.env.DB_PASSWORD}@cluster0.w4xpv.mongodb.net/express-start?retryWrites=true&w=majority`
        );
        console.log(`DB connected`);
    } catch (error) {
        throw new Error(error.message);
    }
};
