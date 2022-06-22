const khachHang = require('./customers.service');

class CustomerController {
    index (req, res, next) {
        khachHang.find({}) 
            .then(customers => {
                customers = customers.map(customers => customers.toObject());
                res.render('customers/customers', {
                    title: "Khách Hàng",
                    customers: customers,
                });
            })
            .catch(next)
    };

    search (req, res, next) {
        res.render('customers/customers', {
            title: "Tìm Kiếm Khách Hàng",
        });
    }
}

module.exports = new CustomerController;