const accounts = require('../../models/accounts.model');
const saltRound = 10;
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const multer = require('multer');
const app = require('../../index');

exports.list =  (pageNumber, nPerPage) => {
    return accounts
        .find().lean()
        .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
        .limit(nPerPage);
}

exports.add =  async (req,res) => {
  const HoTen = req.body.hoten;
  const TaiKhoan = req.body.taikhoan;
  const MatKhau = process.env.DEFAUL_PASSWORD;
  const ChucVu = req.body.chucvu;
  let isExist = await accounts.findOne({TaiKhoan});
  if (!TaiKhoan || !HoTen || !ChucVu || !MatKhau)
  {
      return res.render('accounts/accountsAdd',{message: 'Chưa nhập đủ thông tin!'});
  }
  if(isExist) 
  {
      return res.render('accounts/accountsAdd',{message: 'Đã tồn tại tên tài khoản!'});
  }
  else
  {
      const encryptPass = await bcrypt.hash(MatKhau, saltRound)
        
      try{
        const generateID = crypto.randomBytes(6).toString('hex');;
        const ID = 'AD' + generateID;
        const newAccount = new accounts({
        ID,
        HoTen,
        TaiKhoan,
        MatKhau: encryptPass,
        ChucVu,
        TrangThai: "Active"
        })
        await newAccount.save();
        return res.render('accounts/accounts',{message: 'Thêm tài khoản thành công!'})
      }catch(err){
          res.json({message: err.message})
      }
    }
}

exports.detail =  (TaiKhoan) => {
    return accounts.find({TaiKhoan: TaiKhoan}).limit(1).lean();
   };

exports.lock = async (req,res) => {
    const TaiKhoan = await accounts.findOne({ TaiKhoan:req.params.TaiKhoan});
    let User = undefined;
    try {
        User = req.user.TaiKhoan;
    } catch {}
    if (TaiKhoan.TaiKhoan === User)
    {
        return res.render('accounts/accounts',{message: 'Không thể tự khóa tài khoản!'})
    }
    else if (TaiKhoan.ChucVu === "Admin")
    {
        return res.render('accounts/accounts',{message: 'Không thể khóa tài khoản Admin!'})
    }
    else
    {
        const filter = { TaiKhoan:TaiKhoan.TaiKhoan };
        const update = { TrangThai:'Locked' };
        await accounts.updateOne(filter, update);
        return res.render('accounts/accounts',{message: 'Tài khoản đã khóa!'})
    }
};

exports.unlock = async (req,res) => {
    const TaiKhoan = await accounts.findOne({ TaiKhoan:req.params.TaiKhoan});
    let User = undefined;
    try {
        User = req.user.TaiKhoan;
    } catch {}
    if (TaiKhoan.TrangThai === "Locked")
    {
        const filter = { TaiKhoan:TaiKhoan.TaiKhoan };
        const update = { TrangThai:'Active' };
        await accounts.updateOne(filter, update);
        res.render('accounts/accounts',{message: 'Mở khóa thành công!'})
    }
    else
    {
        res.render('accounts/accounts',{message: 'Tài khoản không cần mở khóa!'})
    }
};

exports.changeProfile =  (TaiKhoan) => {
    return accounts.find({TaiKhoan: TaiKhoan}).limit(1).lean();
};

exports.saveChanges =  async (req,res) => {
    await app.upload(req, res, async(err) => {
        if (err) {
            console.log("Upload Error");
            res.render("Error", {
              error: err,
            });
          } else {
            if (req.file == undefined) {
              console.log("Upload Error: No File To Upload");
      
              res.render("error", {
                error: "Error: No File Selected!",
              });
              }
                else {
                    const HoTen = req.body.hoten;
                    const DiaChi = req.body.diachi;
                    const DOB = req.body.dob;
                    const Email = req.body.email;
                    const Phone = req.body.phone;
                    const Avatar = req.body.Avatar;
                    try{
                        const filter = { TaiKhoan:req.user.TaiKhoan };
                        const update = { HoTen: HoTen,DiaChi: DiaChi,DOB: DOB, Email: Email,Phone: Phone,Avatar: Avatar};
                        await accounts.updateOne(filter, update);
                        res.render('accounts/accountsProfile',{message: 'Chỉnh Sửa Thành Công!'})     
                  }catch(err){
                    res.json({message: err.message})
                  }    
            }
        }
    });
};

exports.savePassword =  async (req,res) => {
    const MKHienTai = req.body.mkhientai;
    const MKMoi = req.body.mkmoi;
    const NhapLai= req.body.nhaplai;
    const user = await accounts.findOne({ TaiKhoan:req.user.TaiKhoan});
    const match = await validPassword(user,MKHienTai);
    if (!MKHienTai || !MKMoi || !NhapLai)
    {
        res.render('accounts/accountsChangePassword',{message: 'Chưa nhập thông tin, vui lòng kiểm tra lại!'})
    }
    if (!match)
    {
        res.render('accounts/accountsChangePassword',{message: 'Nhập sai mật khẩu!'})
    }
    if (MKMoi.length < 6 )
    {
        return res.render('accounts/accountsChangePassword',{message: 'Mật khẩu mới chưa hợp lệ. Vui lòng nhập trên 6 ký tự.'});
    }
    if (MKMoi != NhapLai)
    {
        res.render('accounts/accountsChangePassword',{message: 'Nhập lại mật khẩu không chính xác!'})
    }
    else if (match)
    {
        if (MKMoi === NhapLai)
        {
            const filter = { TaiKhoan: user.TaiKhoan};
            const encryptPass = await bcrypt.hash(MKMoi, saltRound)
            const update = { MatKhau:encryptPass };
            await accounts.updateOne(filter, update);
            res.redirect('/')
        }
    }
    else
    {
        res.render('accounts/accountsChangePassword',{message: 'Chưa nhập thông tin, vui lòng kiểm tra lại!'})
    }
};

async function validPassword(user,password){
    return bcrypt.compare(password, user.MatKhau);
};