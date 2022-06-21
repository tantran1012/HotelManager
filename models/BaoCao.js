const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaoCao = new Schema({
    ID: { type: Number },
    NgayTao: {type : Date },
    IDNguoiTao: { type: Number },
    LoaiBaoCao: {type : String },
});

module.exports = mongoose.model('BaoCao', BaoCao, 'BaoCao');