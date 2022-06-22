const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountsSchema = new Schema({
  ID: { type: String, unique: true },
  TaiKhoan: { type: String, unique: true },
  HoTen: String,
  MatKhau: String,
  ChucVu: String,
  DiaChi: {type: String, sparse: true},
  DOB: Date,
  Email: {type: String, sparse: true},
  Phone: {type: String, sparse: true},
  Avatar: {type: String, sparse: true},
  TrangThai: String
},
{collection: "NguoiDung"}
);

module.exports = mongoose.model("NguoiDung", AccountsSchema);