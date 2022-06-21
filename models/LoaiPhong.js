const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const LoaiPhongSchema = new Schema({
    ID: { type: Number },
    DonGia: {type : Number },
});

LoaiPhongSchema.plugin(AutoIncrement, {id: "LoaiPhong", inc_field: 'ID'});
module.exports = mongoose.model('LoaiPhong', LoaiPhongSchema, 'LoaiPhong');