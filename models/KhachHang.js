const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KhachHang = new Schema({
    ID: { type: Number },
    HoTen: {type : String },
    LoaiKhach: { type: Number },
    CMND: {type : String },
    DiaChi: {type : String },
});

module.exports = mongoose.model('khachHang', KhachHang, 'KhachHang');