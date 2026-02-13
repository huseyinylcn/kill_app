const { exec } = require("child_process")


let utils = {

    killApp(app_name) {
        return new Promise((resolve, reject) => {
            exec(`pkill -f "${app_name}"`, (error, stdout, stderr) => {
                if (error) {
                    if (error.code == 1) return resolve(true)
                    if (error.signal === 'SIGTERM' || error.signal === 'SIGKILL') {
                        return resolve(true);
                    }

                    return reject(error)
                }
                if (stderr) {
                    return reject(stderr)
                }
                return resolve(true)
            })
        })


    }
}


module.exports = utils