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
    
}

module.exports = new BillController;