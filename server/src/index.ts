import { db_connect } from './db';
import express from 'express';
import { Request, Response } from 'express';
import 'dotenv/config'
import colors from 'colors'
import { vk_connect } from './vk_session';
import vk_router from './routes/vk'

const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use('/api/',  vk_router)




app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world',
  });
});

const start = async () =>{
    await db_connect()
    await vk_connect()

    if(require.main === module){
        app.listen(PORT, () => {
            console.log(colors.green('Server was started at http://localhost: ') + colors.underline(PORT || ''));
        });
    }

}

start()

export default app;
