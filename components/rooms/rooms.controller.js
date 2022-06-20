const Phong = require('./rooms.service');

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
}

module.exports = new RoomController;