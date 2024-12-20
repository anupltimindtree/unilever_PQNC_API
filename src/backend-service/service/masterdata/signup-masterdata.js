const {QueryTypes} = require('sequelize') 

const sequelize = require('../../utils/database');

const allClusterDetails = async () => {
    try{ 
        const allClusterData = await sequelize.dbSequelize.query('SELECT id,name__v FROM `marketmanagement_hierarchy__c`', 
                                {
                                    nest: true,
                                    type: QueryTypes.SELECT,
                                });
        return allClusterData;                              
    } catch (err) {
    }
}
const allLocationDetails = async () => {
    try{ 
         const allLocationData = await sequelize.dbSequelize.query('SELECT id,name__v FROM `facility__v`', 
                                {
                                    nest: true,
                                    type: QueryTypes.SELECT,
                                });
          return allLocationData;                              
     } catch (err) {
     }
}

const allorganizationDetails = async () => {
    try{ 
         const allOrganizationData = await sequelize.dbSequelize.query('SELECT id,name__v FROM `qms_organization__qdm`', 
                                        {
                                          nest: true,
                                          type: QueryTypes.SELECT,
                                        });
          return allOrganizationData;                              
     } catch (err) {
     }
}
const allCountryDetails = async () => {
    try{ 
        const allCountryData = await sequelize.dbSequelize.query('SELECT id,name__v FROM `geographies__c`', 
                                {
                                    nest: true,
                                    type: QueryTypes.SELECT,
                                });
        return allCountryData;                              
     } catch (err) {
     }
}
module.exports = {
    allClusterDetails,
    allLocationDetails,
    allorganizationDetails,
    allCountryDetails
};
