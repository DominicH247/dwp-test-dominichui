exports.handleInvalidPath404 = (req, res, next) => {
  res.status(404).send({ msg: "Not Found." });
};

exports.handle405InvalidMethods = (req, res, next) => {
  res.status(405).send({ msg: "Method Not Allowed" });
};
