exports.success = (req, res, body, status) => {
  res.status(status || 200).send({
    error: false,
    status: status || 200,
    body: body || "",
  });
};

exports.error = (req, res, error, body, status) => {
  console.error(`[response error]: ${error}`);
  res.status(status || 500).send({
    error: body.message || "Error interno del servidor",
    status: status || 500,
    body: false,
  });
};
