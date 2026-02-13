



async function terminateProcess(pumpsJSON,utils,arr) {

    try {
        for (const obj of pumpsJSON.pumps) {
            let statusCode = obj.status.ecr | (parseInt(obj.status.pump) << 1) | (parseInt(obj.status.scu) << 2)
            if(statusCode > 0){
                for(const app_name of arr){
                    await utils.killApp(app_name)
                }
            }
        }

    } catch (err) {
        return err

    }

}



module.exports = terminateProcess