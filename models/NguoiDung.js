const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const NguoiDungSchema = new Schema({
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

NguoiDungSchema.plugin(AutoIncrement, {id: "NguoiDung", inc_field: 'ID'});
module.exports = mongoose.model('NguoiDung', NguoiDungSchema, 'NguoiDung');