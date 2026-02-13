const { exec } = require("child_process")
const fs = require("fs").promises

async function terminateProcess() {
    try {
        let arr = ["firefox","chrome"]
        let pumpsJSON =await fs.readFile("pumps.txt",'utf8')
        pumpsJSON = JSON.parse(pumpsJSON)
        
        for (const obj of pumpsJSON.pumps) {
            let statusCode = parseInt(obj.status.ecr) | (parseInt(obj.status.pump) << 1) | (parseInt(obj.status.scu) << 2)
            if (statusCode > 0) {
                for (const app_name of arr) {

                    exec(`pkill -f "${app_name}"`, (error, stdout, stderr) => {
                        if (error) {
                            if (error.code == 1) return true
                            if (error.signal === 'SIGTERM' || error.signal === 'SIGKILL') return true;
                            return error
                        }

                        if (stderr) return stderr
                        return true
                    })

                }
            }
        }

    } catch (err) {
        return err

    }

}

