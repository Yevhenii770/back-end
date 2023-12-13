const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Set price for product"],
    },
    category: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
productSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  isAvailable: Joi.boolean(),
});

const updateAvailableSchema = Joi.object({
  isAvailable: Joi.boolean().required(),
});
const shemas = {
  addSchema,
  updateAvailableSchema,
};
const Product = model("product", productSchema);

module.exports = {
  Product,
  shemas,
};
