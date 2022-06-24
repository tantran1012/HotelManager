const PhieuThuePhong = require('../../models/PhieuThuePhong');
class RentalController {
	index(req, res, next) {
		PhieuThuePhong.find({})
			.then((rentals) => {
				rentals = rentals.map((rentals) => rentals.toObject());
				res.render("rentals/rentals", {
					title: "Phiếu Thuê",
					rentals: rentals,
				});
			})
			.catch(next);
	}


	save(req, res, next) {
		const rental = new PhieuThuePhong(req.body);
		rental.save()
			.then(() => res.redirect("/rentals"))
			.catch(next);
	}

	update(req, res, next) {
		PhieuThuePhong.updateOne({ ID: req.params.id }, req.body)
			.then(() => res.redirect('/rentals'))
			.catch(next);
	}

	delete(req, res, next) {
		PhieuThuePhong.deleteOne({ ID: req.params.id })
			.then(() => res.redirect('back'))
			.catch(next);
	}

}

module.exports = new RentalController;