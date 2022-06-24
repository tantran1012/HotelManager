const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const MatDoSuDungPhongSchema = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    IDPhong: { type: Number },
    SoNgayThue: {type : Number },
    TyLe: {type : Float32Array },
});

MatDoSuDungPhongSchema.plugin(AutoIncrement, {id:"MatDoSuDungPhong", inc_field: 'ID'});
module.exports = mongoose.model('MatDoSuDungPhong', MatDoSuDungPhongSchema, 'MatDoSuDungPhong');