declare namespace sun {
    namespace misc {
        class VM {
            public static STATE_GREEN: int
            public static STATE_YELLOW: int
            public static STATE_RED: int
            public constructor()
            public static threadsSuspended(): boolean
            public static allowThreadSuspension(arg0: java.lang.ThreadGroup, arg1: boolean): boolean
            public static suspendThreads(): boolean
            public static unsuspendThreads(): void
            public static unsuspendSomeThreads(): void
            public static getState(): int
            public static registerVMNotification(arg0: sun.misc.VMNotification | sun.misc.VMNotification$$Lambda): void
            public static asChange(arg0: int, arg1: int): void
            public static asChange_otherthread(arg0: int, arg1: int): void
            public static booted(): void
            public static isBooted(): boolean
            public static awaitBooted(): void
            public static maxDirectMemory(): long
            public static isDirectMemoryPageAligned(): boolean
            public static allowArraySyntax(): boolean
            public static isSystemDomainLoader(arg0: java.lang.ClassLoader): boolean
            public static getSavedProperty(arg0: java.lang.String | string): string
            public static saveAndRemoveProperties(arg0: java.util.Properties): void
            public static initializeOSEnvironment(): void
            public static getFinalRefCount(): int
            public static getPeakFinalRefCount(): int
            public static addFinalRefCount(arg0: int): void
            public static toThreadState(arg0: int): java.lang.Thread$State
            public static latestUserDefinedLoader(): java.lang.ClassLoader
            public static class: java.lang.Class<any>
        }
    }
}