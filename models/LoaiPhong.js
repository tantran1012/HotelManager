const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoaiPhong = new Schema({
    ID: { type: Number },
    DonGia: {type : Number },
});

module.exports = mongoose.model('LoaiPhong', LoaiPhong, 'LoaiPhong');