declare namespace sun {
    namespace rmi {
        namespace log {
            class ReliableLog {
                public static readonly PreferredMajorVersion: int
                public static readonly PreferredMinorVersion: int
                public constructor(arg0: java.lang.String | string, arg1: sun.rmi.log.LogHandler, arg2: boolean)
                public constructor(arg0: java.lang.String | string, arg1: sun.rmi.log.LogHandler)
                public recover(): java.lang.Object
                public update(arg0: java.lang.Object): void
                public update(arg0: java.lang.Object, arg1: boolean): void
                public snapshot(arg0: java.lang.Object): void
                public close(): void
                public snapshotSize(): long
                public logSize(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}