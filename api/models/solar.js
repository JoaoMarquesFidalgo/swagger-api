const mongoose = require('mongoose');

const SolarSchema = new mongoose.Schema({
    coordinates: [Number], // fe
    efficency: Number, // fe
    area: Number, // fe
    anual_avg_rad: Number, // dataset
    performance_ration: Number // constant
});

module.exports = mongoose.model("Solar", SolarSchema, "solar");
