const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhieuThuePhong = new Schema({
    ID: { type: Number },
    IDPhong: {type : Number },
    DanhSachKhachHang: { type: Number },
    NgayBatDauThue: {type : Date },
    NgayTraPhong: {type : Date },
});

module.exports = mongoose.model('PhieuThuePhong', PhieuThuePhong, 'PhieuThuePhong');