const assert = require("assert")
const Definer = require("../lib/mistake")
const Product = require("../models/Product")

let productController = module.exports

productController.getAllProducts = async (req, res) => {
  try {
    console.log("Get: cont/getAllProducts")
  } catch (error) {
    console.log(`Error, cont/getAllProducts, ${error.message}`)
    res.json({ state: "fail", message: error.message })
  }
}

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct")
    assert(req.files, Definer.general_err3)

    const product = new Product()
    let data = req.body

    data.product_images = req.files.map((ele) => {
      return ele.path;
    })

    const result = await product.addNewProductData(data, req.member);
    const html = `<script> 
                       alert(new thing added succesfully);
                       window.location.replace('resto/products/menu');
                  </script>`;
    res.end(html);
  } catch (error) {
    console.log(`Error, cont/addNewProduct, ${error.message}`);
  }
}

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct")
  } catch (error) {
    console.log(`Error, cont/updateChosenProduct, ${error.message}`)
    res.json({ state: "fail", message: error.message })
  }
}
