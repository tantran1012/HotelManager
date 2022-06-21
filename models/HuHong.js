const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HuHong = new Schema({
    ID: { type: Number },
    IDBaoCao: {type : Number },
    IDPhong: { type: Number },
    ThongTinHuHong: {type : String },
});

module.exports = mongoose.model('HuHong', HuHong, 'HuHong');