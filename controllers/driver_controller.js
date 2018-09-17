const Driver = require("../models/driver");

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },
  async create(req, res, next) {
    let driver = new Driver({
      email: req.body.email,
      driving: req.body.driving
    });
    await driver.save();

    res.send(driver);
  },
  async edit(req, res, next) {
    let id = req.params.id;
    let driver = await Driver.findById(id);
    driver.email = req.body.email;
    driver.driving = req.body.driving;
    await driver.save();
    res.send(driver);
  },
  async delete(req, res, next) {
    let id = req.params.id;
    let driver = await Driver.findByIdAndRemove(id);
    res.send(driver);
  },
  index(req,res,next) {
    Loc.aggregate([
        {
            $geoNear: {
                near: 'Point',
                distanceField: "dist.calculated",
                maxDistance: 100000,
                spherical: true                
            }
        }
    ]).then(function(err, results, next){
        res.send(results);
    }).catch(next);
  } 
};
