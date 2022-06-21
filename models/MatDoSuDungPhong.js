const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatDoSuDungPhong = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    IDPhong: { type: Number },
    SoNgayThue: {type : Number },
    TyLe: {type : Float32Array },
});

module.exports = mongoose.model('MatDoSuDungPhong', MatDoSuDungPhong, 'MatDoSuDungPhong');