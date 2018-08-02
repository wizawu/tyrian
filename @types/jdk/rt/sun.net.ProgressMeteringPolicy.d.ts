declare namespace sun {
    namespace net {
        interface ProgressMeteringPolicy {
            shouldMeterInput(arg0: java.net.URL, arg1: java.lang.String | string): boolean
            getProgressUpdateThreshold(): int
        }
    }
}