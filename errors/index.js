exports.handleInvalidPath404 = (req,res,next  => {
  res.status(404).send({msg: "Not Found."})
}