const HoaDon = require('../../models/HoaDon');

class BillController {
    index (req, res, next) {
        HoaDon.find({}) 
            .then(bills => {
                bills = bills.map(bills => bills.toObject());
                res.render('bills/bills', {
                    title: "Bills",
                    bills: bills,
                });
            })
            .catch(next)
    };
    detail (req, res, next) {
        res.render('bills/billsdetail', {
            title: "Chi Tiet Hoa Don",
        });
    };
    add (req, res, next) {
        res.render('bills/billsadd', {
            title: "Them Hoa Don",
        });
    };
}

module.exports = new BillController;