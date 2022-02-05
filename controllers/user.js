const { response } = require("express");

const getUser = (req, res = response) => {
  const query = req.query;
  res.json({
    msg: "get api - controlador",
    query,
  });
};

const putUser = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put api - controlador",
    id: id,
  });
};

const postUser = (req, res) => {
  const body = req.body;
  res.json({
    msg: "post api - controlador",
    body,
  });
};

const deleteUser = (req, res) => {
  res.json({
    msg: "delete api - controlador",
  });
};

module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
};
