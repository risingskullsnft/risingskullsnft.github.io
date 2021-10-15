// BASIC SERVER THAT WORKS WITH HEROKU.
// Might be useful.

var express = require('express');
var path = require('path');
const cors = require('cors');
var serveStatic = require('serve-static');
const compression = require('compression');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
const { isNumber, isString, last } = require('lodash');

const PORT = process.env.PORT || 80;
const app = express()
    .set('port', PORT);
    

// App is behind Heroku proxy.
app.enable('trust proxy');

if (argv.prod) {
    app.use(function(request, response, next) {
        if (request.protocol == 'http') {
            return response.redirect(301, "https://" + request.headers.host + request.url);
        } else {
            next();
        }
    });
}

const rootDir = process.cwd();

app.use(compression());
app.use(cors());
app.use(serveStatic(path.join(rootDir, 'dist'), {
    maxAge: 1000 * 60 * 60,
}));

app.use(/^\/(?!api).*/, function (request, response) {
    response.sendFile(path.resolve(rootDir, 'dist/index.html'));
});

app.listen(PORT, () => {
    console.log('Server listening on '+ PORT);

    if (argv.prod) {
        console.log('HTTPS redirects enabled');
    }
});

app.get('', (req, res) => {
 //TEMPLATE
});

process.on('cleanup', () => {
});

// do app specific cleaning before exiting
process.on('exit', function () {
    process.emit('cleanup');
});

