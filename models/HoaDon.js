const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoaDon = new Schema({
    ID: { type: Number },
    TenKhachHang: {type : Number },
    DiaChi: { type: String },
    TongTien: {type : Number },
    DanhSachPhongThue: {type : Number },
});

module.exports = mongoose.model('HoaDon', HoaDon, 'HoaDon');