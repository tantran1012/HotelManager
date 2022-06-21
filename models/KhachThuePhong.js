const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KhachThuePhong = new Schema({
    IDKhachHang: { type: Number },
    IDPhieuThuePhong: {type : Number },
});

module.exports = mongoose.model('KhachThuePhong', KhachThuePhong, 'KhachThuePhong');