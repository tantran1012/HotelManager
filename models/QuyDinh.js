const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuyDinh = new Schema({
    ID: { type: Number },
    TenQuyDinh: {type : String },
    NoiDungQuyDinh: { type: Number },
});

module.exports = mongoose.model('QuyDinh', QuyDinh, 'QuyDinh');