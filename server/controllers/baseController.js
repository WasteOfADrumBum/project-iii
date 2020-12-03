const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");

exports.deleteOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUserPlaces = (Model) => async (req, res, next) => {
  try {
    const userData = await Model.findById(req.params.id);
    const doc = await Model.findByIdAndUpdate(req.params.id, {
      $set: {
        places: [
          {
            name: req.body.name,
            lat: req.body.lat,
            lon: req.body.lon,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
          },
          ...userData.places,
        ],
      },
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUserVehicle = (Model) => async (req, res, next) => {
  try {
    const userData = await Model.findById(req.params.id);
    const doc = await Model.findByIdAndUpdate(req.params.id, {
      $set: {
        vehicles: [
          {
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            type: req.body.type,
            drive: req.body.drive,
            transmisson: req.body.transmisson,
            cylinders: req.body.cylinders,
            displacement: req.body.displacement,
            fueltype: req.body.fueltype,
            mpgcity: req.body.mpgcity,
            mpghwy: req.body.mpghwy,
          },
          ...userData.vehicles,
        ],
      },
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.updateUserRoute = (Model) => async (req, res, next) => {
  try {
    console.log("updateUserRoute")
    const userData = await Model.findById(req.params.id);
    const doc = await Model.findByIdAndUpdate(req.params.id, {
      $set: {
        routes: [
          {
            mode: req.body.mode,
            footprint: req.body.footprint,
          },
          ...userData.routes,
        ],
      },
    });

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
    console.log("userData.routes", userData.routes)
  } catch (error) {
    next(error);
  }
};

exports.createOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getAll = (Model) => async (req, res, next) => {
  try {
    const features = new APIFeatures(Model.find(), req.query).sort().paginate();

    const doc = await features.query;

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (error) {
    next(error);
  }
};
