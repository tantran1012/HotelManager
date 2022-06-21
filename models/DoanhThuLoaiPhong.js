const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoanhThuLoaiPhong = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    LoaiPhong: { type: Number },
    DoanhThu: {type : Number },
    TyLe: {type : Float64Array},
});

module.exports = mongoose.model('DoanhThuLoaiPhong', DoanhThuLoaiPhong, 'DoanhThuLoaiPhong');