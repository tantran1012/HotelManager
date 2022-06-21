const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const KhachHangSchema = new Schema({
    ID: { type: Number },
    HoTen: {type : String, required: true},
    LoaiKhach: { type: Number },
    CMND: {type : String, required: true },
    DiaChi: {type : String, required: true },
});


KhachHangSchema.plugin(AutoIncrement, {id: "KhachHang" ,inc_field: 'ID'});
module.exports = mongoose.model('khachHang', KhachHangSchema, 'KhachHang');