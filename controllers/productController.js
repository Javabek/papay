let productController = module.exports;

productController.getAllProducts = async (req, res) => {
  try {
    console.log("Get: cont/getAllProducts");
  } catch (error) {
    console.log(`Error, cont/getAllProducts, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};

productController.addNewProduct = async (req, res) => {
  try {
    console.log("POST: cont/addNewProduct");

    //TODO: product creation develop

    res.send("ok");
  } catch (error) {
    console.log(`Error, cont/addNewProduct, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};

productController.updateChosenProduct = async (req, res) => {
  try {
    console.log("POST: cont/updateChosenProduct");
  } catch (error) {
    console.log(`Error, cont/updateChosenProduct, ${error.message}`);
    res.json({ state: "fail", message: error.message });
  }
};
