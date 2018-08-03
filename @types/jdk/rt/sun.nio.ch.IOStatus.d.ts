declare namespace sun {
    namespace nio {
        namespace ch {
            class IOStatus {
                public static readonly EOF: int
                public static readonly UNAVAILABLE: int
                public static readonly INTERRUPTED: int
                public static readonly UNSUPPORTED: int
                public static readonly THROWN: int
                public static readonly UNSUPPORTED_CASE: int
                public static normalize(arg0: int): int
                public static check(arg0: int): boolean
                public static normalize(arg0: long): long
                public static check(arg0: long): boolean
                public static checkAll(arg0: long): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}