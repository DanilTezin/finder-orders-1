import path from 'path'

const easyvk = require('easyvk')
let vk: any;

const vk_connect = async () =>{
    console.log('Vk is starting...\n')
    vk = await easyvk({
    token: process.env.VK_TOKEN,
    sessionFile: path.join(__dirname, '.my-session')
    })
}

export {vk}
export {vk_connect}