const express = require('express')
const mobilRouter = require('./router/mobil')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use ('/asset', express.static('public'))

//mengkoneksikan dengan database mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sp52');
//tambahkan pesan
const db = mongoose.connection
db.on ('error', function(){
    console.log ('koneksi gagal')
})
db.once('open', function () {
    console.log ('Koneksi Berhasil')
})






const reqTime = function(req,res,next){
    date = new Date();
    console.log(date);
    next();
};
 
app.use(reqTime);
app.set ('view engine','ejs')

// app.get('/', function (req,res){
//     const sp52 = {
//         Nim : 1,
//         Nama : 'Adita',
//     };
//     res.render ('pages/index',{sp52: sp52})
// });  

app.get('/about', function (req, res){
    res.render('pages/about');
});


// app.get('/', function (req,res){
//     const tanggal = 'Selamat Belajar Express Js Bersama Adita</br>' +
//     '<p><small>Requested at: ' + date + '</small>';
//     res.send(tanggal);
// });

app.use(mobilRouter)
app.listen(3000, function (req, res) {
    console.log('Gak Oleh Eror')
})

app.get("/", function(req,res){
    const jualan = {
    Id: 001,
    Nama: "indah",
    };
    res.render('pages/index', {jualan: jualan})
    });
    app.get("/about", function(req,res){
    res.render('pages/about')
    });
    // app.get("/awal", function(req,res){
    // res.render('pages/awal')
    // });
    app.use('/asset', express.static('public'))


// var myLogger = function (req, res, next){
//     console.log('LOGGED');
//     next();
// };

// app.use(myLogger);

// app.get('/', function(req,res){
//     res.send('Selamat Belajar Express.Js Bersama Adita');
// });











// app.use(mobilRouter)

// app.listen(3000, function (req, res) {
//     console.log('Gak Oleh Eror')
// })








// app.get('/', function(req,res){
//     res.send('Penjualan Mobil')
// })










// app.route('/mobil')
//     .get(function (req, res) {
//         res.send('Tampilkan data mobil')
//     })
//     .post(function (req, res) {
//         res.send('Tambahkan data mobil')
//     })
//     .put(function (req, res) {
//         res.send('Update data mobil')
//     })
//     .delete(function (req, res) {
//         res.send('Delete data mobil')
//     })
// app.listen(3000, function (req, res) {
//     console.log('Gak Oleh Eror')
// })


















// app.get('/user', function (req, res){
//     const mobil = {
//         Kode : 001,
//         Nama : "Avanza",
//         Harga : "Rp.450.000"
//     }
//     res.json(mobil)
// })

// app.get('/about', function (req, res) {
//     res.redirect('https://expressjs.com/en/4x/api.html#res.redirect')
// })

// app.get ('/eror', function (req, res){
//     res.sendStatus(404)
// })

// app.listen(3000,function(req, res){
//     console.log('Gak Oleh Eror')
// })
























// app.get('/',function(req,res){
//     res.send('Hello Perkenalkan saya Adita')
// })

// app.get('/about',function(req,res){
//     res.send('ABOUT ! Hello Perkenalkan saya Adita. Mahasiswa semester 5')
// })

// app.post('/',function(req,res){
//     res.send('POST ! Hello Perkenalkan saya Adita')
// })

// app.put('/user/:kode/:namamobil/:harga',function(req,res){
//     res.send(req.params)
// })

// app.delete('/user',function(req,res){
//     res.send('DELETE ! Hello Perkenalkan saya Adita')
// })

// app.listen(3000,function(req, res){
//     console.log('Gak Oleh Eror')
// })