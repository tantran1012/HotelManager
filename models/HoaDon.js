const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const HoaDonSchema = new Schema({
    ID: { type: Number },
    TenKhachHang: {type : Number },
    DiaChi: { type: String },
    TongTien: {type : Number },
    DanhSachPhongThue: {type : String },
});
HoaDonSchema.plugin(AutoIncrement, {id:"HoaDon", inc_field: 'ID'});
module.exports = mongoose.model('HoaDon', HoaDonSchema, 'HoaDon');