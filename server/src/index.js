import dotenv from 'dotenv'
import app from "./app.js";
import ConnectDb from "./db/index.js";

dotenv.config()
const PORT = process.env.PORT || 5000

ConnectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server start at ${PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed")
        console.log(err)
    })
