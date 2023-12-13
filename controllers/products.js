const { Product } = require("../models/product");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const products = await Product.find({}, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  res.json(products);
};

const add = async (req, res) => {
  const result = await Product.create({ ...req.body });
  await res.status(201).json(result);
};

const getByCategory = async (req, res) => {
  const { category } = req.params;
  const result = await Product.find(category);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  getByCategory: ctrlWrapper(getByCategory),
};
