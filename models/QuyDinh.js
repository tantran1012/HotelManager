const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const QuyDinhSchema = new Schema({
    ID: { type: Number },
    TenQuyDinh: {type : String },
    NoiDungQuyDinh: { type: Number },
});
QuyDinhSchema.plugin(AutoIncrement, {id: "QuyDinh", inc_field: 'ID'});
module.exports = mongoose.model('QuyDinh', QuyDinhSchema, 'QuyDinh');