import mongoose from 'mongoose';

class Database {
    public static async connect() {
        const uri: string = process.env.LOCAL_MONGO_URI || 'mongodb://localhost/testA';

        try {
            return await mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
        } catch (err) { return err };
    }
}

export default Database;