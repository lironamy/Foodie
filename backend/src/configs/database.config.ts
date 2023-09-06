import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    connect(process.env.MONGO_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions)
    .then(
        () => console.log("Connected to the database"),
        (error) => console.log("Error connecting to the database:", error)
    );
};
