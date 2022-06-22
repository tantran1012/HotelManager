const accountsService = require('./accounts.service');

exports.list = async (req,res) => {
    let itemPerPage = 5;
    let page = req.query.page;
    if (isNaN(page)) page = 1;
    let accounts = await accountsService.list(page, itemPerPage)
    let user = req.user
    if (user.ChucVu === "Admin")
    {
        res.render('accounts/accounts', {
            title: "Nhân Viên",
            accounts});
    }
    else
    {
        res.render('accounts/accountsStaff', {
            title: "Nhân Viên",
            accounts});
    }

}

exports.add = (req,res) => {
    accountsService.add(req,res);
}

exports.detail = async (req,res) => {
    let TaiKhoan = undefined;
    try {
        TaiKhoan = req.params.TaiKhoan;
      } catch {}
    let detail= await accountsService.detail(TaiKhoan)
    res.render('accounts/accountsDetail', {title:"Thông Tin Nhân Viên",detail: detail});
}

exports.profile = async (req,res) => {
    let TaiKhoan = undefined;
    try {
        TaiKhoan = req.user.TaiKhoan;
      } catch {}
    let profile= await accountsService.detail(TaiKhoan)
    res.render('accounts/accountsProfile', {title:"Profile Của Tôi", profile:profile});
}

// exports.edit = async (req,res) => {
//     let Account = undefined;
//     try {
//         Account = req.params.Account;
//       } catch {}
//     let adminDetail= await adminsService.detail(Account)
//     res.render('admins/adminsEdit', {  adminDetail: adminDetail});
// }

// exports.saveEdit = async (req, res) => {
//     await adminsService.saveEdit(req,res);
//     res.redirect("/admins/adminsProfile");
//  }

exports.lock = async (req, res) => {
    await accountsService.lock(req,res);
   }

exports.unlock = async (req, res) => {
    await accountsService.unlock(req,res);
   }

exports.changeProfile = async (req, res) => {
    let TaiKhoan = undefined;
    try {
        TaiKhoan = req.user.TaiKhoan;
      } catch {}
      let profile= await accountsService.detail(TaiKhoan)
    res.render('accounts/accountsEdit', {title:"Chỉnh Sửa Thông Tin",profile:profile});
}

exports.saveChanges = async (req, res) => {
    await accountsService.saveChanges(req,res);
}

exports.changePassword = async (req, res) => {
    res.render('accounts/accountsChangePassword', {
        title: "Thay Đổi Mật Khẩu"});
}

exports.savePassword = async (req, res) => {
    await accountsService.savePassword(req,res);
}