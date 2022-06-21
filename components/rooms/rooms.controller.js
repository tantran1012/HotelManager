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
    detail (req, res, next) {
        res.render('rooms/roomsdetail', {
            title: "Chi Tiet Phong",
        });
    };
    add (req, res, next) {
        res.render('rooms/roomsadd', {
            title: "Them Phong",
        });
    };
}

module.exports = new RoomController;