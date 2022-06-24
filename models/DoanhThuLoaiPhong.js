const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const DoanhThuLoaiPhongSchema = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    LoaiPhong: { type: Number },
    DoanhThu: {type : Number },
    TyLe: {type : Number},
});
DoanhThuLoaiPhongSchema.plugin(AutoIncrement, {id: "DoanhThuLoaiPhong", inc_field: 'ID'});
module.exports = mongoose.model('DoanhThuLoaiPhong', DoanhThuLoaiPhongSchema, 'DoanhThuLoaiPhong');