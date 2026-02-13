





async function terminateProcess(data,utils) {

    try {

        for (const obj of data.pumps) {
            let statusCode = obj.status.ecr | (parseInt(obj.status.pump) << 1) | (parseInt(obj.status.scu) << 2)
            switch (statusCode) {
                case 0:
                    return await utils.killApp("firefox")
                    
                case 1:
                    return await utils.killApp("firefox")
                case 2:
                    console.log(statusCode)
                    return await utils.killApp("firefox")
                case 3:
                    console.log(statusCode)
                    return await utils.killApp("firefox")
                case 4:
                    console.log(statusCode)
                    return await utils.killApp("firefox")
                case 5:
                    console.log(statusCode)
                    return await utils.killApp("firefox")
                case 6:
                    console.log(statusCode)
                    return await utils.killApp("firefox")
                case 7:
                    console.log(statusCode)
                    return await utils.killApp("firefox")

                default:
                    true;
            }
        }

    } catch (err) {
        return err

    }

}



module.exports = terminateProcess