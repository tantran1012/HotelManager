const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NguoiDung = new Schema({
    ID: { type: Number },
    HoTen: {type : String },
    TaiKhoan: {type: String},
    MatKhau: {type: String},
    ChucVu: {type: String},
    DiaChi: {type : String },
    DOB: {type: Date},
    Email: {type: String},
    GioiTinh: {type: String},
    Phone: {type: String},
    Avatar: {type: String}
});

module.exports = mongoose.model('NguoiDung', NguoiDung, 'NguoiDung');