module.exports = {
    connect: async () => {
        const mongoose = require('mongoose');
        const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack-app';

        try {
            await mongoose.connect(dbURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Database connection error:', error);
            process.exit(1);
        }
    }
};