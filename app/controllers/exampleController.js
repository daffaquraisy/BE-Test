const dataLatLon = require("../../files/latlon.js");

let data = dataLatLon

exports.callmeWebSocket = (req, res) => {
  // endpoint livethreat tidak mereturn latlon
  // jadi kamu harus melookup latlon tersebut 
  // berdasarkan destinationCountry dan sourceCountry yang berada di variable data 
  console.log(dataLatLon)
};
