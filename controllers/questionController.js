const db = require("../models");

// image Upload

// create main Model
const Question = db.questions;

// main work

// 2. get all products

const getAllQuestions = async (req, res) => {
  let products = await Question.findAll({});
  res.status(200).send({ products, totalQuestions: products.length });
};

// 3. get single product

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// 4. update Product

const updateProduct = async (req, res) => {
  let id = req.params.id;

  const product = await Product.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

// 5. delete product by id

const deleteProduct = async (req, res) => {
  let id = req.params.id;

  await Product.destroy({ where: { id: id } });

  res.status(200).send("Product is deleted !");
};

// 6. get published product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });

  res.status(200).send(products);
};

// 7. connect one to many relation Product and Reviews

const getProductReviews = async (req, res) => {
  const id = req.params.id;

  const data = await Product.findOne({
    include: [
      {
        model: Review,
        as: "review",
      },
    ],
    where: { id: id },
  });

  res.status(200).send(data);
};

// 8. Upload Image Controller

module.exports = {
  //   addProduct,
  getAllQuestions,
  //   getOneProduct,
  //   updateProduct,
  //   deleteProduct,
  //   getPublishedProduct,
  //   getProductReviews,
  //   upload,
};
