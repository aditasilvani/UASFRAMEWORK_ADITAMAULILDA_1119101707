const express = require('express')
const router = express.Router()
const mobilcontroller = require('../controllers/mobil')
const fs = require('fs');
var multer = require('multer');
var path = require('path');
const Mobil = require('../models/mobil');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
const upload = multer({ storage: storage, limits: { fieldSize: 10 * 1024 * 1024 } })

router.route('/mobil')
        .get(mobilcontroller.index)
router.route('/mobil').post(upload.single('image'), (req, res, next) => {
    const mobil = new Mobil({
        id : req.body.id,
        jns_mobil : req.body.jns_mobil,
        nm_mobil : req.body.nm_mobil,
        password:req.body.password,
        img: {
            data: fs.readFileSync(path.join(__dirname, '../' + '/uploads/' + req.file.filename)),
            contentType: 'image/jpg'
        }
    });
    mobil.save(function (error) {
        if (error) return handleError(error);
        res.redirect('/mobil')
    });


});
router.route('/mobil/update').post(upload.single('image'), (req, res, next) => {
    const _id = req.body._id
    const id = req.body.id
    const jns_mobil = req.body.jns_mobil
    const nm_mobil = req.body.nm_mobil
    const harga = req.body.harga
    const password = req.body.password
    const filter = { _id: _id };
    const update = {
        _id: _id,
        id: id,
        jns_mobil: jns_mobil,
        nm_mobil: nm_mobil,
        harga: harga,
        password: password,
        img: {
            data: fs.readFileSync(path.join(__dirname, '../' + '/uploads/' + req.file.filename)),
            contentType: 'image/jpg'
        }
    };
    Katalog.updateOne(filter, update, function (err) {
        res.redirect('/mobil')
    });
});
router.get ('/mobil/create', mobilcontroller.tambah)
router.get ('/mobil/:id', mobilcontroller.show)
//baru
router.get('/mobil/hapus/:id', mobilcontroller.hapus)
router.route('/mobil/update').post(mobilcontroller.baharui)
router.route('/mobil/update/:_id/:id/:jns_mobil/:nm_mobil/:harga/:password').get(mobilcontroller.renderUpdate)

// router.get ('/mobil/:id/edit', mobilcontroller.edit)

router.put('/mobil/:idmob', mobilcontroller.update)

router.delete('/mobil/:idmob', mobilcontroller.delete)

module.exports = router












// .post(function(req, res) {
//     mobil.push(req.body)
//     res.send({
//         status: true,
//         data: mobil,
//         massage: 'DATA MOBIL SUDAH BERHASIL DITAMBAHKAN',
//         method: req.method,
//         URL: req.url
//     })
// })

//   router.put('/mobil/:id', function (req, res) {
//     const id = req.params.id
//     let ditemukan = false
//     mobil.filter (mobil =>{
//       if(mobil.id == id){
//         mobil.id = id
//         mobil.jns_mobil = req.body.jns_mobil
//         mobil.nm_mobil = req.body.nm_mobil
//         mobil.harga = req.body.harga
//         res.send({
//             status: true,
//             data: mobil,
//             massage: 'MOBIL BERHASIL DI UPDATE',
//             method: req.method,
//             url: req.url,
//             tanggal: new Date
//       })
//       ditemukan = true;
//       return mobil
//     }
// })
//     res.json(mobil)
// })

// router.delete('/mobil/:id', function (req, res) {
//     const id = req.params.id
//     mobil.filter (mobil =>{
//       if(mobil.id == id){
//         res.send({
//             status: true,
//             data: mobil,
//             massage: 'MOBIL BERHASIL DI DELETE',
//             method: req.method,
//             url: req.url,
//             tanggal: new Date
//         })
//         var index = mobil.indexOf(mobil)
//         mobil.splice(index,1)
// }
//     })
//     res.json(mobil)
//     res.send(mobil)
// })

  

  

//   .post(function(req, res) {
//       mobil.push(req.body)
//       res.send({
//           status: true,
//           data: mobil,
//           massage: 'DATA MOBIL SUDAH BERHASIL DITAMBAHKAN',
//           method: req.method,
//           URL: req.url
//       })
//   })
