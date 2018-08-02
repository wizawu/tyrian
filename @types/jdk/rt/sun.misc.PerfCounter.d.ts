declare namespace sun {
    namespace misc {
        class PerfCounter {
            public get(): long
            public set(arg0: long): void
            public add(arg0: long): void
            public increment(): void
            public addTime(arg0: long): void
            public addElapsedTimeFrom(arg0: long): void
            public toString(): string
            public static getFindClasses(): sun.misc.PerfCounter
            public static getFindClassTime(): sun.misc.PerfCounter
            public static getReadClassBytesTime(): sun.misc.PerfCounter
            public static getParentDelegationTime(): sun.misc.PerfCounter
            public static getZipFileCount(): sun.misc.PerfCounter
            public static getZipFileOpenTime(): sun.misc.PerfCounter
            public static getD3DAvailable(): sun.misc.PerfCounter
            public static class: java.lang.Class<any>
        }
    }
}