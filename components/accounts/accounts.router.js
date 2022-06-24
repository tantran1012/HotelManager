var express = require('express');
var router = express.Router();

const accountsController = require('./accounts.controller');

router.get('/', accountsController.list);

router.get("/add", (req, res) => {
    res.render('accounts/accountsAdd',{title: "Thêm Tài Khoản"});
});

router.post('/new',accountsController.add);

router.get('/profile/:TaiKhoan',accountsController.detail);

router.get('/myprofile',accountsController.profile);

router.post('/lock/:TaiKhoan',accountsController.lock);

router.post('/unlock/:TaiKhoan',accountsController.unlock);

router.get('/changeProfile',accountsController.changeProfile);

router.post('/upload',accountsController.upload);

router.post('/saveChanges',accountsController.saveChanges);

router.get('/changePassword',accountsController.changePassword);

router.post('/savePassword',accountsController.savePassword);

module.exports = router;