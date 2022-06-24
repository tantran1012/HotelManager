const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KhachThuePhongSchema = new Schema({
    IDKhachHang: { type: Number },
    IDPhieuThuePhong: {type : Number },
});

module.exports = mongoose.model('KhachThuePhong', KhachThuePhongSchema, 'KhachThuePhong');