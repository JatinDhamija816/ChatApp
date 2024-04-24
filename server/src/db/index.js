import mongoose from 'mongoose'

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connect successfully")
    } catch (error) {
        console.error("MongoDB Connection Failed")
        console.log(error)
    }
}

export default ConnectDb