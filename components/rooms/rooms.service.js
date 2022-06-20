const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Phong = new Schema({
    ID: { type: Number },
    LoaiPhong: {type : Number },
    TinhTrang: { type: String },
});

module.exports = mongoose.model('Phong', Phong, 'Phong');