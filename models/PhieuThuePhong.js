const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const PhieuThuePhongSchema = new Schema({
    ID: { type: Number },
    IDPhong: {type : Number },
    DanhSachKhachHang: { type: Number },
    NgayBatDauThue: {type : Date },
    NgayTraPhong: {type : Date },
});

PhieuThuePhongSchema.plugin(AutoIncrement, {id: "PhieuThuePhong", inc_field: 'ID'});
module.exports = mongoose.model('PhieuThuePhong', PhieuThuePhongSchema, 'PhieuThuePhong');