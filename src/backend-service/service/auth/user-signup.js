const Sequelize = require('sequelize') 

const sequelize = require('../../utils/database');
const Users     = require('../../models/user');

const checkEmailExists = async (value) => {
    let resultData = {
        status:true,
        data: ""
    };
    return  Users.findOne({
        where: {
            email__sys : value.email.trim()
        },
        attributes: ['id','email__sys','status__v','password']
    }).then(result => {
        resultData.data=result;
        return resultData; 
    }).catch((error) => {
        resultData.status=false;
        resultData.data=error;
        return resultData; 
    });
}

const createUsers = async (value) => {
    let resultData = {
        status:true,
        data: ""
    };
    const firstName = value.first_name ? value.first_name.trim() : "";
    const lastName  = value.last_name?value.last_name.trim() : "";
    return Users.create({
            first_name__sys:value.first_name ? value.first_name.trim() : "",
            last_name__sys:value.last_name?value.last_name.trim() : "" ,
            name__v: firstName + lastName,
            country1__c:value.country ?value.country.trim() : null,            
            cluster__c: value.cluster ?value.cluster.trim() : null,
            factory__c: value.location ?value.location.trim() : null,
            security_profile__sys: value.security_profile_role.trim(),
            role_id:value.role.trim(),
            user_type:  value.user_type.trim(),
            password: value?.password || "",
            email__sys:value.email.trim(),
            username__sys:value.email.trim(),
            vendor_code:value.vendor_code?value.vendor_code.trim() : "",    
            cm_site:value.cm_site?value.cm_site.trim() :""
    }).then(result => {
        resultData.data=result;
        return resultData; 
    }).catch((error) => {
        resultData.status=false;
        resultData.data=error;
        return resultData; 
    });
}

module.exports = {
    checkEmailExists,
    createUsers
};
