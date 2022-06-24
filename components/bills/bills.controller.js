const HoaDon = require('../../models/HoaDon');
const KhachHang = require('../../models/KhachHang');
const PhieuThuePhong = require('../../models/PhieuThuePhong');
class BillController {
	index(req, res, next) {
		HoaDon.find({})
			.then((bills) => {
				bills = bills.map((bills) => bills.toObject());
				res.render("bills/bills", {
					title: "Hoá Đơn",
					bills: bills,
				});
			})
			.catch(next);
	}


	save(req, res, next) {
		const bill = new HoaDon(req.body);
		bill.save()
			.then(() => res.redirect("/bills"))
			.catch(next);
	}

	update(req, res, next) {
		HoaDon.updateOne({ ID: req.params.id }, req.body)
			.then(() => res.redirect('/bills'))
			.catch(next);
	}

	delete(req, res, next) {
		HoaDon.deleteOne({ ID: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

	detail(req, res, next) {
		HoaDon.find({ ID: req.params.id }).limit(1)
			.then((bills) => {
				bills = bills.map((bills) => bills.toObject());
				res.render("bills/billsDetail", {
					title: "Chi Tiét Hoá Đơn",
					bills: bills
				});
			})
			.catch(next);
	}
}

module.exports = new BillController;