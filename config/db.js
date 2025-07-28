import mongoose from "mongoose"

export const dbConnection = () => {
    try {
        const URI = 'mongodb+srv://admin:admin@cluster0.t9deziy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

        // Connect mongoDB
        mongoose.connect(URI)
            .then(() => console.log(`🚀 mongoDB connected`))
            .catch((err) => console.log(`💥MongoDB ERROR: ${err.message}`))


        // mongoose.connection.on("connected", () => console.log("MONGOOSE IS CONNECTED"))
        // mongoose.connection.on("error", (error) => console.log("MONGOOSE ERROR " + error.message))

    } catch (error) {
        console.log("error", error.message)
    }
}