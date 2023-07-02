const dataLatLon = require("../../files/latlon.js");

let data = dataLatLon

exports.callmeWebSocket = (req, res) => {
  // endpoint livethreat tidak return latlon
  // jadi kamu harus melookup latlon tersebut 
  // berdasarkan destinationCountry and sourceCountry yang berada di variable data 
  console.log(dataLatLon)
};
