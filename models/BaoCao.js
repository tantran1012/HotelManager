const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const BaoCaoSchema = new Schema({
    ID: { type: Number },
    NgayTao: {type : Date },
    IDNguoiTao: { type: Number },
    LoaiBaoCao: {type : String },
});



BaoCaoSchema.plugin(AutoIncrement, {id: "BaoCao", inc_field: 'ID'});
module.exports = mongoose.model('BaoCao', BaoCaoSchema, 'BaoCao');