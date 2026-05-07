const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '4948772d0e14a925' : process.env.,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,4948772d0e14a925
SASINDU-MD: process.env.PORT === undefined ? "sasindu" : process.env.SASINDU-MD,
};
