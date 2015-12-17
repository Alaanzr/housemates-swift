var AppUser = require('mongoose').model('AppUser');

exports.create = function(req, res, next) {
    var appUser = new AppUser(req.body);
    appUser.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(appUser);
        }
    });
};

exports.list = function(req, res, next) {
    AppUser.find({}, function(err, appUser) {
        if (err) {
            return next(err);
        }
        else {
            res.json(appUser);
        }
    });
};


exports.read = function(req, res) {
    res.json(req.appUser);
};

exports.appuser_id = function(req, res, next, id) {
    AppUser.findOne({
            _id: id
        },
        function(err, appUser) {
            if (err) {
                return next(err);
            }
            else {
                req.appUser = appUser;
                next();
            }
        }
    );
};

// exports.update = function(req, res, next) {
//     User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
//         if (err) {
//             return next(err);
//         }
//         else {
//             res.json(user);
//         }
//     });
// };


// exports.delete = function(req, res, next) {
//     req.user.remove(function(err) {
//         if (err) {
//             return next(err);
//         }
//         else {
//             res.json(req.user);
//         }
//     });
// };
