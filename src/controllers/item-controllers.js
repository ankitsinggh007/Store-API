const itemService = require("../services/item-service");

const itemservice = new itemService();

const getAllItems = async (req, res) => {
  try {
    const response = await itemservice.getAll(req.query);    
    return res.status(200).json({
      success: true,
      message: "all data has been fetched",
      data: response,
      error: {},
      nBits: response.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "data can't be fetched",
      data: {},
      error: error,
    });
  }
};

module.exports = {
  getAllItems,
};
