const terminateProcess = require("./useCase")
const pumps = require("./pumps.json")
const utils = require("./utils")
let app_name = ["firefox","chrome"]



 terminateProcess(pumps, utils, app_name)

