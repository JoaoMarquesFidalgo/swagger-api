const successGeneral = require('../models/success').callSuccess;
const errorGeneral = require('../models/error').callError;
const Solar = require('../models/solar');
const pool = require('../../config/config').pool;
 
function getCalc(req, res)
{
    const type = req.swagger.params.type.value;
    const diameter = req.swagger.params.diameterTurbineWind.value;
    const lat = req.swagger.params.lat.value;
    const lon = req.swagger.params.lon.value;
    const efficiency = req.swagger.params.efficiencyWind.value;
    var calc = 0;

    const query = 
    {
        text: 'SELECT dn from "wind_power_density" where ST_Intersects(geom, ST_SetSRID(ST_Point($1, $2), 4326))',
        values: [lon, lat]
    }

    pool.query(query)
        .then(result =>
        {
            if (type === 'wind') 
            {
                let potency = result.rows[0].dn * (efficiency / 100);
                const area = Math.PI*(diameter/2);
                calc = potency * area;
            }
            else 
            {
                calc = (result.rows[0].something * kwp) * 365;
            }
            
            res.status(200).send({error: false, ...successGeneral['1000'], data: {potency: calc.toFixed(2)}});
        })
        .catch(error =>
        {
            console.log('error ', error);
            res.status(200).send({error: true, ...errorGeneral['1000']});
        })
}

module.exports = {getCalc}