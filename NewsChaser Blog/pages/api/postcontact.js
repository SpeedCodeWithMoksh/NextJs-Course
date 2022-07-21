import * as fs from 'node:fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
       let data = await fs.promises.readdir('contactdata');
       fs.promises.writeFile(`contactdata/formdata-${data.length+1}.json`, JSON.stringify(req.body))
      res.status(200).json(req)
    } else {
      // Handle any other HTTP method
      res.status(200).json(["Yes this get request"])
    //   name, email, phone, desc
    }
  }