declare namespace sun {
    namespace misc {
        class PerformanceLogger {
            public constructor()
            public static loggingEnabled(): boolean
            public static setStartTime(arg0: java.lang.String | string): void
            public static setBaseTime(arg0: long): void
            public static setStartTime(arg0: java.lang.String | string, arg1: long): void
            public static getStartTime(): long
            public static setTime(arg0: java.lang.String | string): int
            public static setTime(arg0: java.lang.String | string, arg1: long): int
            public static getTimeAtIndex(arg0: int): long
            public static getMessageAtIndex(arg0: int): string
            public static outputLog(arg0: java.io.Writer): void
            public static outputLog(): void
            public static class: java.lang.Class<any>
        }
    }
}