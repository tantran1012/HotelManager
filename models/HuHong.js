const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const HuHongSchema = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    IDPhong: { type: Number },
    ThongTinHuHong: {type : String },
});
HuHongSchema.plugin(AutoIncrement, {id: "HuHong", inc_field: 'ID'});
module.exports = mongoose.model('HuHong', HuHongSchema, 'HuHong');