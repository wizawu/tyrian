declare namespace com {
    namespace ibm {
        namespace jvm {
            class Trace {
                public static readonly EVENT: string
                public static readonly EXCEPTION: string
                public static readonly ENTRY: string
                public static readonly EXIT: string
                public static readonly EXCEPTION_EXIT: string
                public static initializeTrace(): void
                public static set(arg0: java.lang.String | string): int
                public static snap(): void
                public static suspend(): void
                public static resume(): void
                public static suspendThis(): void
                public static resumeThis(): void
                public static registerApplication(arg0: java.lang.String | string, arg1: java.lang.String[]): int
                public static trace(arg0: int, arg1: int): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.Object): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: int): void
                public static trace(arg0: int, arg1: int, arg2: int, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: long): void
                public static trace(arg0: int, arg1: int, arg2: long, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: byte): void
                public static trace(arg0: int, arg1: int, arg2: byte, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: char): void
                public static trace(arg0: int, arg1: int, arg2: char, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: float): void
                public static trace(arg0: int, arg1: int, arg2: float, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: double): void
                public static trace(arg0: int, arg1: int, arg2: double, arg3: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.Object): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.lang.Object): void
                public static trace(arg0: int, arg1: int, arg2: int): void
                public static trace(arg0: int, arg1: int, arg2: int, arg3: int): void
                public static trace(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public static trace(arg0: int, arg1: int, arg2: long): void
                public static trace(arg0: int, arg1: int, arg2: long, arg3: long): void
                public static trace(arg0: int, arg1: int, arg2: long, arg3: long, arg4: long): void
                public static trace(arg0: int, arg1: int, arg2: byte): void
                public static trace(arg0: int, arg1: int, arg2: byte, arg3: byte): void
                public static trace(arg0: int, arg1: int, arg2: byte, arg3: byte, arg4: byte): void
                public static trace(arg0: int, arg1: int, arg2: char): void
                public static trace(arg0: int, arg1: int, arg2: char, arg3: char): void
                public static trace(arg0: int, arg1: int, arg2: char, arg3: char, arg4: char): void
                public static trace(arg0: int, arg1: int, arg2: float): void
                public static trace(arg0: int, arg1: int, arg2: float, arg3: float): void
                public static trace(arg0: int, arg1: int, arg2: float, arg3: float, arg4: float): void
                public static trace(arg0: int, arg1: int, arg2: double): void
                public static trace(arg0: int, arg1: int, arg2: double, arg3: double): void
                public static trace(arg0: int, arg1: int, arg2: double, arg3: double, arg4: double): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.Object, arg3: java.lang.String | string, arg4: java.lang.Object): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: int, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: int, arg3: java.lang.String | string, arg4: int): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: long, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: long, arg3: java.lang.String | string, arg4: long): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: byte, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: byte, arg3: java.lang.String | string, arg4: byte): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: char, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: char, arg3: java.lang.String | string, arg4: char): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: float, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: float, arg3: java.lang.String | string, arg4: float): void
                public static trace(arg0: int, arg1: int, arg2: java.lang.String | string, arg3: double, arg4: java.lang.String | string): void
                public static trace(arg0: int, arg1: int, arg2: double, arg3: java.lang.String | string, arg4: double): void
                public static getMicros(): long
                public static class: java.lang.Class<any>
            }
        }
    }
}