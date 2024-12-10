const Sequelize = require('sequelize') 

const sequelize = require('../utils/database') 

const Users = sequelize.dbSequelize.define('user', { 

	id:{ 

		type:Sequelize.INTEGER, 
		autoIncrement:true, 
		allowNull:false, 
		primaryKey:true
	}, 
	email: { type: Sequelize.STRING, allowNull:false }, 
    role: { type: Sequelize.STRING, allowNull:false }, 
	name: { type: Sequelize.STRING, allowNull:false }, 
    language: { type: Sequelize.STRING }, 
    state: { type: Sequelize.STRING}, 
    country: { type: Sequelize.STRING }, 
    mobile: { type: Sequelize.STRING, allowNull:false }, 
    password: { type: Sequelize.STRING, allowNull:false }, 
    is_verified: { type: Sequelize.ENUM,
        values: [
            'true',
            'false',
        ],
        defaultValue: 'true'
    }, 
    granted_date: { type: Sequelize.DATE, allowNull:true }, 
    status: { type: Sequelize.ENUM,  
                values: [
                    'true',
                    'false',
                ],
                defaultValue: 'true'
    },
    is_allowed: { type: Sequelize.ENUM,  
        values: [
        'true',
        'false',
    ],
    defaultValue: 'true' }, 
	createdAt: { type: Sequelize.DATE, 
			defaultValue: Sequelize.NOW }, 
}) 

module.exports = Users