import { Logger } from "../src/logging"

Logger.info("info message")

{
    Logger.warn("warn message")
}

function error() {
    Logger.error("error message")
}

error()
