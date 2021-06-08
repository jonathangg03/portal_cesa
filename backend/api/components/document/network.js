const express = require("express");
const response = require("../../../network/response");
const multer = require("multer");
const controller = require("./index");
const router = express.Router();

let storage = multer.memoryStorage();
const upload = multer({
  dest: "/public/files",
  storage: storage,
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});
// var storage = multer.diskStorage({
//   destination:function(req,file,cb){
//   cb(null,'/public/uploads/')
//   },
//   filename:function(req,file,cb){
//   cb(null,Date.now()+path.extname(file.originalname)); //Appending extension
//   }
//   });
//   var upload = multer({ storage: storage,
//    fileFilter: function (req, file, cb) {
//    if (!file.originalname.match(/\.(pdf|doc|docx|jpg)$/)) {
//    return cb(new Error('Error en el tipo de archivo.'));
//    }
//    cb(null, true);
//    }
//    });
router.get("/", (req, res) => {
  //Usado en enlistar todos los datos, y al realizar la busqueda
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.get("/:id", (req, res) => {
  //Usado para cuando queramos editar o borrar uno
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.post("/", upload.single("document"), (req, res) => {
  controller
    .upsert(req.body, req, true)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.put("/", (req, res) => {
  controller
    .upsert(req.body, false)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

router.delete("/:id", (req, res) => {
  controller
    .deleted(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch((error) => response.success(req, res, error));
});

module.exports = router;
