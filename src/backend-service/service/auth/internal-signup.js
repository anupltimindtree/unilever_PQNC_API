const Sequelize = require('sequelize') 

const sequelize = require('../../utils/database');
const Users     = require('../../models/user');

const checkEmailExists = async (value) => {
        return  Users.findOne({
            where: {
                email : value.email
            },
            attributes: ['id','email','mobile','name']
        }).then(result => {
            return result; 
        }).catch((error) => {
        });
}
const checkMobileNumber = async (value) => {
       return Users.findOne({
            where: {
                mobile : value.mobile
            },
            attributes: ['id']
        }).then(result => {
            return result;
        }).catch((error) => {
        });
}

const createUsers = async (value) => {
        return Users.create({
                role:value.role,
                language: value?.language || null,
                state: value?.state || null,
                country: value?.country || null,
                mobile: value.mobile,
                password: password,
                email:value.email,
                name:value.name,
                granted_date: null
        }).then(result => {
            return result;
        }).catch((error) => {
        });
}

module.exports = {
    checkEmailExists,
    createUsers,
    checkMobileNumber
};
