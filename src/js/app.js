const calendar = require('./modules/calendar')
const offline = require('./modules/offline')
const menu = require('./modules/menu')
const safariLinks = require('./modules/safari-links')
const serviceWorker = require('./modules/service-worker')

calendar()
offline()
menu()
safariLinks()
serviceWorker()
