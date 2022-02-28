import express from 'express'

const app = express()
const port = process.env.npm_package_config_port || 4005;
let runningMessage = 'Server is running on port ' + port;

app.get('/', (req, res) => {
    console.log('API was successfuly requested');
    res.send(runningMessage);
});


const server = app.listen(port, () => {
    console.log(runningMessage);
});

module.exports = server;

