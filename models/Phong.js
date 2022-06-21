const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const PhongSchema = new Schema({
    ID: { type: Number },
    LoaiPhong: {type : Number },
    TinhTrang: { type: String },
});
PhongSchema.plugin(AutoIncrement, {id: "Phong", inc_field: 'ID'});
module.exports = mongoose.model('Phong', PhongSchema, 'Phong');