// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=web-development
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, (err, data)=>{
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}
