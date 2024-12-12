const { responseHandler, errorHandler }  = require("../middleware/response-handler");
const pqncStatusDetails = async (req, res, next) => {
    try {
        const sessionUserId = req.user.userId;
        const userId        = req.body.userId;
        if(sessionUserId == userId ){
            // A fake database object
            let allPQNCStatusDetails = [
                {
                    status: "Initiated",
                    total: 10                
                },
                {
                    status: "Submitted",
                    total: "123",
                },
                {
                    status: "Cancelled",
                    total: "123",
                },
                {
                    status: "Error",
                    total: "123",
                }, 
                {
                    status: "In Queue",
                    total: "123",
                },
            ]
            const data = {
                allPQNCStatusDetails,
            };
            return responseHandler(data, res);
        }else{
            return errorHandler(403, res, 'Invalid token');

        }

    } catch (err) {
        return errorHandler(500, res, "Internal Server Error",err);
    }
};

module.exports = {
    pqncStatusDetails
}