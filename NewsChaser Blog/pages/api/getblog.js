// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=web-development
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
    res.status(200).json(JSON.parse(data))
  })
}
