const bcrypt = require("bcrypt");
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  const accounts=require('../models/accounts.model');

  passport.use(new LocalStrategy(

    async function (username, password, done) {
        try{
            const user=await accounts.findOne({ TaiKhoan: username}).lean();
            if (!user) {
                return done(null, false, { message: 'Account not exists.' });
            }
            if(user.TrangThai === "Locked")
            {
                return done(null, false, { message: 'Your account has been locked!' });
            }
            const match=await validPassword(user,password);
            if (!match) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        }
        catch(err){
            return done(err);
        }
    },
));

passport.serializeUser(function (user, done) {
    done(null, {TaiKhoan:user.TaiKhoan, ChucVu:user.ChucVu, HoTen:user.HoTen, Avatar:user.Avatar});
});

passport.deserializeUser(function (user, done) {
    return done(null, user);
});

async function validPassword(user,password){
    return bcrypt.compare(password, user.MatKhau);
};

module.exports=passport;