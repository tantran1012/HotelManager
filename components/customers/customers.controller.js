const khachHang = require("./customers.model");
const Handlebars = require("handlebars");

class CustomerController {
  index(req, res, next) {
    khachHang.find({})
      .then((customers) => {
        customers = customers.map((customers) => customers.toObject());
        res.render("customers/customers", {
          title: "Khách hàng",
          customers: customers,
        });
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render("customers/customers_edit", {
      title: "Thêm khách hàng",
    });
  }

  save(req, res, next) {
    const customer = new khachHang(req.body);
    customer.save()
      .then(() => res.redirect("/customers"))
      .catch(next);
  }

  edit(req, res, next) {
    khachHang
      .findOne({ ID: req.params.id })
      .then((customer) => {
        customer = customer.toObject();
        res.render("customers/customers_edit", {
          title: "Chỉnh sửa khách hàng",
          customer: customer,
        });
      })
      .catch(next);
  }

  update(req, res, next) {
    khachHang.updateOne({ ID: req.params.id }, req.body)
      .then(() => res.redirect('/customers'))
      .catch(next);
  }

  delete(req, res, next) {
    khachHang.deleteOne({ ID: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new CustomerController();
