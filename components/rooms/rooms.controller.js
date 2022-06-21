const Phong = require('../../models/Phong');

class RoomController {
    index (req, res, next) {
        Phong.find({}) 
            .then(rooms => {
                rooms = rooms.map(rooms => rooms.toObject());
                res.render('rooms/rooms', {
                    title: "Phòng",
                    rooms: rooms,
                });
            })
            .catch(next)
    };
    save(req, res, next) {
        const room = new Phong(req.body);
        room.save()
          .then(() => res.redirect("/rooms"))
          .catch(next);
      }
    
      update(req, res, next) {
        Phong.updateOne({ ID: req.params.id }, req.body)
          .then(() => res.redirect('/rooms'))
          .catch(next);
      }
    
      delete(req, res, next) {
        Phong.deleteOne({ ID: req.params.id })
          .then(() => res.redirect('back'))
          .catch(next);
      }
}

module.exports = new RoomController();