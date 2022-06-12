
class HomeController {
    index (req, res) {
        res.render('home/home', {
            title: "Trang chủ",
        });
    }

}

module.exports = new HomeController;