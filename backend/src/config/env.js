import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',

}

