const Church = require("../models/Church");

exports.getAllChurches = async (req, res) => {
  const churches = await Church.find();

  return res.json(churches);
};

exports.getChurchById = async (req, res) => {
  try {
    const churchId = req.params.id;
    const church = await Church.findById(churchId);
    
    return res.json(church);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Det finns ingen kyrka med det id:t!",
    });
  }
};

exports.addNewChurch = async (req, res) => {
  try {
    const { name, description, rating } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "Du måste fylla i namn/beskrivning!!",
      });
    }

    const newChurch = await Church.create({
      name: name,
      description: description,
      rating: rating,
    });

    return res
      .setHeader(
        "Location",
        `http://localhost:${
          process.env.PORT
        }/api/v1/churches/${newChurch._id.toString()}`
      )
      .status(201)
      .json(newChurch);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateChurch = async (req, res) => {
  const churchId = req.params.id;
  const { name, description, rating } = req.body;

  const churchToUpdate = await Church.findById(churchId);

  if (name) churchToUpdate.name = name;
  if (description) churchToUpdate.description = description;

  const updatedChurch = await churchToUpdate.save();

  return res.json(updatedChurch);
};

exports.deleteChurch = async (req, res, next) => {
  res.send("Delete church!");
};
