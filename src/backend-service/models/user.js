const Sequelize = require('sequelize') 

const sequelize = require('../utils/database') 

const Users = sequelize.dbSequelize.define('user__sys', { 
	id:{ 

		type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
	}, 
	email__sys: { type: Sequelize.STRING(120), allowNull:false }, 
    cluster__c: { type: Sequelize.STRING(128)}, 
	country1__c: { type: Sequelize.STRING(128) }, 
    country__c: { type: Sequelize.STRING(128) }, 
    factory__c: { type: Sequelize.STRING(128)}, 
    username__sys: { type: Sequelize.STRING(255) }, 
    first_name__sys: { type: Sequelize.STRING(100) }, 
    last_login__sys: { type: Sequelize.DATE }, 
    password: { type: Sequelize.STRING(255)}, 
    last_name__sys: { type: Sequelize.STRING(100)}, 
    modified_by__v: { type: Sequelize.STRING(128)}, 
    modified_date__v: { type: Sequelize.DATE }, 
    name__v: { type: Sequelize.STRING(255) }, 
    reject_comment : { type: Sequelize.STRING(255) },
    cm_site: { type: Sequelize.STRING(255) }, 
	security_profile__sys: { type: Sequelize.STRING(128), allowNull:false }, 
    role_id:{ type: Sequelize.INTEGER(1) },
    user_permission: { type: Sequelize.STRING(11) },
    add_permission : { type: Sequelize.STRING(11) },
    vendor__code:{ type: Sequelize.STRING(255) },
    user__category:{ type: Sequelize.STRING(255),allowNull:false },
    status__v: { type: Sequelize.ENUM,
        values: [
            'active__v',
            'inactive__v',
            'unapproved__v',
            'reject__v'
        ],
        defaultValue: 'unapproved__v'
     }, 
    user_type: { type: Sequelize.ENUM,  
        values: [
        'mobile',
        'qualityone',
    ], 
     defaultValue: 'mobile'
   }, 
    created_by__v: { type: Sequelize.STRING(128)},
	created_date__v: { type: Sequelize.DATE,defaultValue: Sequelize.NOW}, 

}) 

module.exports = Users