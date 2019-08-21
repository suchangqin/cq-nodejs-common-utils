

const msleep = async (milloseconds: number) => {
    if (milloseconds > 0) {
        // console.info(`sleep ${milloseconds} milloseconds`)
        return new Promise(resolve => setTimeout(resolve, milloseconds));
    } else {
        return Promise.resolve()
    }
}

const sleep = async (seconds: number) => {
    return msleep(seconds * 1000)
}

export {
    msleep,
    sleep,
}