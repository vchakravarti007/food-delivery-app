const DishesModel = require("../models/Dishes");

const getDishes = async (req, res) => {
  const results = await DishesModel.find({});
  return res.status(200).send(results);
};

module.exports = {
  getDishes,
};
