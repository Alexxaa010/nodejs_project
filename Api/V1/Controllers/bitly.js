const mongoose = require('mongoose');
const bitlySchemaModel = require('../Models/bitlySchema');
const crypto = require("crypto");

const db_uri = "mongodb+srv://Manager:kfEvhE4K4CAH3Spa@cluster0.tcswu.mongodb.net/nodejs_project?retryWrites=true&w=majority"

module.exports = {
    create: async (req, res) => {
        await mongoose.connect(db_uri);

        const urlCode = crypto.createHash("shake256", { outputLength: 2 })
            .update(req.params.url)
            .digest("hex");

        const siteUrl = `http://mysite.com/${urlCode}`
        const result = await bitlySchemaModel.collection.insertOne({ url: req.params.url, bitly_url: siteUrl })

        return res.status(200).json({ result: result.acknowledged, url: siteUrl });
    },
    read: async (req, res) => {
        await mongoose.connect(db_uri);

        const result = await bitlySchemaModel.findOne({url: req.params.url})
        if(result) return res.status(200).json({ result: "success", url: result.bitly_url });
        return res.status(200).json({ result: "not found" });
    }
}