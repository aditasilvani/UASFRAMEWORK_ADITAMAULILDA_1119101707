const Mobil = require("../models/mobil")

// let mobil = [
//     {id: 001, jns_mobil: 'Toyota', nm_mobil: 'Agya', harga: 'Rp.450.000.000'},
//     {id: 002, jns_mobil: 'Suzuki', nm_mobil: 'Karimun', harga: 'Rp.300.000.000'}
//   ]

 module.exports =
 { 
  index: function(req,res){
    // Mobil.find (function (error,mobil) {
    //   let keyword = {}
    //   if (req.query.keyword) {
    //       keyword = {jns_mobil: {$regex: req.query.keyword}}
    //   }
      Mobil.find (function (error,mobil){
          if (error) console.log (error)
        //   console.log (mobil)
        res.render ('pages/mobil/index',{mobil})

      })
    },
    show: function (req, res) {
      const id = req.params.id
      // const data = mobil.filter(mobil =>{
      //     return mobil.id == id
        // })
        // Mobil.find (id, function (error,data) {
        Mobil.findById (id, function (error,data) {
          if (error) console.log (error)
          // console.log (data)
        res.render ('./pages/mobil/show', {mobil: data})
        })
    },
tambah: function (req, res) {
        res.render ('pages/mobil/create')
    },
create: function(req,res){
    // mobil.push ({
        const mobil = new Mobil ({
        id : req.body.id,
        jns_mobil : req.body.jns_mobil,
        nm_mobil : req.body.nm_mobil,
        // harga : req.body.harga,
        password:req.body.password,
    // mobil.push(req.body)
    // res.send({
    //     status: true,
    //     data: mobil,
    //     massage: 'DATA MOBIL SUDAH BERHASIL DITAMBAHKAN',
    //     method: req.method,
    //     URL: req.url,
    //     tanggal: new Date
    })
    mobil.save (function (error){
      if (error) return handleError (error);
      res.redirect('/mobil')
    });
  },
  edit: function (req,res) {
    const id = req.params.id
    Mobil.findById (id, function (error, data) {
        if (error) console.log (error)
    res.render ('pages/mobil/edit', {mobil: data})
    })
},
update: function (req, res) { //Memperbaharui data
  const id = req.params.idmob;
  let isFound = false
  console.log(id)
  Mobil.filter(proj => { //Filter adalah metode update dari javascript (agar data katalog di filter satu/satu)
      if (proj.idmob == id) { //Untuk pengecekan kondisi
          proj.jns_mobil = req.body.jns_mobil,
          proj.nm_mobil = req.body.nm_mobil,
          proj.harga = req.body.harga,
          proj.password = req.body.password
          res.send({
              status: true,
              data: mobil,
              message: "data berhasil diperbarui",
              method: req.method,
              url: req.url,
              tanggal: new Date()})
          isFound = true
          return proj //return data katalog yang baru
      }})
  if (isFound == false) {
      res.send({
          status: false,
          message: "data tidak ditemukan"
      })
  }
  res.json(mobil) //tampilkan data katalog yang baru
},
baharui: function (req, res) {
  const _id = req.body._id
  const jns_mobil = req.body.jns_mobil
  const nm_mobil = req.body.nm_mobil
  const harga = req.body.harga
  const password = req.body.password
  const filter = { _id: _id };
  const update = {
      jns_mobil: jns_mobil,
      nm_mobil : nm_mobil,
      harga: harga,
      password: password
  };
  Mobil.updateOne(filter, update, function (err) {
      console.log(jns_mobil,nm_mobil, harga, password)
      res.redirect('/mobil')
  });


},
renderUpdate: function (req, res) {
  const id = req.params._id
  Mobil.findById(id, function (error, data) {
      if (error) console.log(error)
      console.log(error)
      res.render('pages/mobil/update', { mobil: data })
  })
},

//    update: function (req, res) {
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
// },
//     delete: function (req, res) {
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
// }
//  }
hapus: function (req, res) {
  const id = req.params.id
  Mobil.deleteOne({ _id: id }, function (err) {
      if (err) return console.log(err);
      res.redirect('/mobil')});
},
delete: function (req, res) { //Menghapus data
  const id = req.params.idmob;
  let isFound = false
  mobil.filter(proj => {
      if (proj.idmob == id) {
          const index = mobil.indexOf(pro)
          mobil.splice(index, 1)
          res.send({
              status: true,
              data: mobil,
              message: "Project berhasil dihapus",
              method: req.method,
              url: req.url,
              tanggal: new Date()})
          isFound = true}})
  if (isFound == false) {
      res.json({
          status: false,
          message: "Project tidak ditemukan"
      })}
  res.json(mobil)
}}

