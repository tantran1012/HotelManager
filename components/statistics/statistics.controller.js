const baoCao = require("../../models/BaoCao");
const doanhThuLoaiPhong = require("../../models/DoanhThuLoaiPhong");
const huHong = require("../../models/HuHong");
const matDoSuDungPhong = require("../../models/MatDoSuDungPhong");

class StatisticController {
  index(req, res, next) {
    baoCao
      .find({})
      .then((statistic) => {
        statistic = statistic.map((statistic) => statistic.toObject());
        res.render("statistics/statistics", {
          title: "Thống kê",
          statistic: statistic,
        });
      })
      .catch(next);
  }

  save(req, res, next) {
    const statistic = new baoCao(req.body);
    statistic
      .save()
      .then(() => res.redirect("/statistic"))
      .catch(next);
  }

  update(req, res, next) {
    baoCao
      .updateOne({ ID: req.params.id }, req.body)
      .then(() => res.redirect("/statistic"))
      .catch(next);
  }

  delete(req, res, next) {
    baoCao
      .deleteOne({ ID: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  saveOne(req, res, next) {
    baoCao.findOne(req.params.id).then((statistic) => {
      statistictype = statistic.toObject().LoaiBaoCao;
      var NewStatistic;
      switch (statisticType) {
        case "Hu hong": {
          NewStatistic = new HuHong(req.body);
          break;
        }
        case "Mat do su dung": {
          NewStatistic = new MatDoSuDungPhong(req.body);
          break;
        }
        case "Doanh thu loai phong": {
          NewStatistic = new DoanhThuLoaiPhong(req.body);
          break;
        }
        default:
          break;
      }
      NewStatistic.save()
        .then(() => res.redirect("back"))
        .catch(next);
    });
  }

  updateLine(req, res, next) {
    baoCao.findOne(req.params.id).then((statistic) => {
      statistictype = statistic.toObject().LoaiBaoCao;
      switch (statisticType) {
        case "Hu hong": {
          huHong.updateOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        case "Mat do su dung": {
          matDoSuDungPhong.updateOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        case "Doanh thu loai phong": {
          doanhThuLoaiPhong.updateOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        default:
          break;
      }
      NewStatistic.save()
        .then(() => res.redirect("back"))
        .catch(next);
    });
  }

  deleteLine(req, res, next) {
    baoCao.findOne(req.params.id).then((statistic) => {
      statistictype = statistic.toObject().LoaiBaoCao;
      switch (statisticType) {
        case "Hu hong": {
          huHong.deleteOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        case "Mat do su dung": {
          matDoSuDungPhong.deleteOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        case "Doanh thu loai phong": {
          doanhThuLoaiPhong.deleteOne({ ID: req.params.idLine }, req.body)
            .then(() => res.redirect("back"))
            .catch(next);
          break;
        }
        default:
          break;
      }
      NewStatistic.save()
        .then(() => res.redirect("back"))
        .catch(next);
    });
  }

  viewStatistics(req, res, next) {
    var statisticType;
    var statisticInfo;
    baoCao
      .findOne({ ID: req.params.id })
      .then((statistic) => {
        statisticInfo = statistic.toObject();
        statisticType = statistic.LoaiBaoCao;
      })
      .catch(next)
      .then(() => {
        switch (statisticType) {
          case "Hu hong": {
            huHong
              .find({ IDBaoCao: req.params.id })
              .then((damaged) => {
                damaged = damaged.map((damaged) => damaged.toObject());
                res.render("statistics/statistics_damaged", {
                  title: "Báo cáo hư hỏng",
                  damaged: damaged,
                  time: statisticInfo.NgayTao,
                });
              })
              .catch(next);
            break;
          }
          case "Mat do su dung": {
            matDoSuDungPhong
              .find({ IDBaoCao: req.params.id })
              .then((density) => {
                density = density.map((density) => density.toObject());
                res.render("statistics/statistics_density", {
                  title: "Báo cáo mật độ sử dụng phòng",
                  density: density,
                  time: statisticInfo.NgayTao,
                });
              })
              .catch(next);
            break;
          }
          case "Doanh thu loai phong": {
            doanhThuLoaiPhong
              .find({ IDBaoCao: req.params.id })
              .then((turnover) => {
                turnover = turnover.map((turnover) => turnover.toObject());
                res.render("statistics/statistics_turnover", {
                  title: "Báo cáo doanh thu theo loại phòng",
                  turnover: turnover,
                  time: statisticInfo.NgayTao,
                });
              })
              .catch(next);
            break;
          }
          default:
            break;
        }
      });
  }
}

module.exports = new StatisticController();
