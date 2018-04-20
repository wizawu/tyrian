import { logging } from "../src/index"

const Logger = logging.Logger

Logger.info("info message")

{
    Logger.warn("warn message")
}

function error() {
    Logger.error("error message")
}

error()
