import console from "console";
import express  from "express";
import mongoose from "mongoose";
import { IVkPost } from "../interfaces/IVkPost";
import {vk} from '../vk_session'

const router = express.Router()
const PostFromVk = require('../models/PostFromVK')



router.get('/vk/get', (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    
    PostFromVk.find({}, (err: mongoose.Error, arr: Array<IVkPost>) =>{
        if(err){
            res.status(400)      
        }else{
            res.send(arr)
        }
    })

})

//Get from all groups last 100 posts who includes our keyword
router.post('/vk/search', async (req: express.Request, res: express.Response) =>{
    res.header("Access-Control-Allow-Origin", "*");

    let groups:   Array<string> = req.body.groups
    let keywords: Array<string> = req.body.keywords

    //Check every if text of post includes every keyword
    let every:Boolean = req.body.every

    if(groups && keywords){

        // If users data is not array => transform to array
        if (!Array.isArray(groups)) groups = [groups]
        if (!Array.isArray(keywords)) keywords = [keywords]

        const isIncludes = (e: IVkPost) =>{
            if(every){
                if(keywords.every((word: string) => e.text.toLowerCase().includes(word))){
                    return true
                }
            }else{
                if(keywords.some((word: string) => e.text.toLowerCase().includes(word))){
                    return true
                }
            } 
            return false
        }
        
        // Push all promises from vk api to array
        let promises = groups.map((group:string) =>{
            return vk.post('wall.get', {
                domain: group,
                count:100
            })
       }) 

        //Catch all promises and get datas from them
        Promise.all(promises).then((data) =>{

            //Get all posts
            let posts = data.map((e:any) => e.items).flat()

            //Filtring them
            let filtred_posts = posts.filter((e:IVkPost) => isIncludes(e))

            //  Send data to client
            let response = {
                data: filtred_posts,
                counts: filtred_posts.length
            }
            filtred_posts.forEach((post: IVkPost) =>{
                let posts_db = new PostFromVk({
                    text:  post.text,
                    link: post.id,
                })
                posts_db.save()
                
            })


            res.status(200)
            res.send(response)
       })
           
    }else{
        res.status(400)
        res.send('Error. Property groups or keywords is invalid. Please read docs.')
    }
   
    
})



export default router