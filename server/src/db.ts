import mongoose from "mongoose";
import 'dotenv/config'
import { ConnectOptions } from "mongoose";
import colors from 'colors'

const MONGO_URI: string = process.env.MONGODB_URI || ''

type ConnectionOptionsExtend = {
    useNewUrlParser: boolean
    useUnifiedTopology: boolean
  }

const options: ConnectOptions & ConnectionOptionsExtend ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

const db = mongoose

export const db_connect = async () =>{
   console.log(colors.yellow(`\nMONGOBD IS STARTING ON: ` + colors.underline(process.env.MONGODB_URI || '')))
    await db.connect(MONGO_URI,  options)
}
export const db_close = async () =>{
    await db.connection.close()
}
export default db