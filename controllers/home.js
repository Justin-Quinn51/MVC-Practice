const itemList = require("../models/itemlist");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const items = await itemList.find();
      res.render("index.ejs", { itemList: items });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },
  createItem: async (req, res) => {
    const newItem = new ItemList({
      textInput: req.body.textInput,
      numInput: req.body.numInput,
    });
    try {
      await newItem.save();
      console.log(newItem);
      res.redirect("/");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/");
    }
  },
};
