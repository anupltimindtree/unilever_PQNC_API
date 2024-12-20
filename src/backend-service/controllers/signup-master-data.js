const service                            = require('../service/masterdata/signup-masterdata');
const { responseHandler, errorHandler }  = require("../middleware/response-handler");
const signupmasterDataListings = async (req, res, next) => {
    try {
       const clusterData  = await service.allClusterDetails();

       const locationData = await service.allLocationDetails();

       const cmSiteData   = await service.allorganizationDetails();

       const countryData  = await service.allCountryDetails();

       const response = {
            clusterData: clusterData,
            locationData: locationData,
            cmsiteData:cmSiteData,
            countryData:countryData
       };
       return responseHandler(response, res);
    } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
    }
};

module.exports = {
    signupmasterDataListings
}