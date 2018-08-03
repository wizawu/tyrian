declare namespace sun {
    namespace net {
        class InetAddressCachePolicy {
            public static readonly FOREVER: int
            public static readonly NEVER: int
            public static readonly DEFAULT_POSITIVE: int
            public constructor()
            public static get(): int
            public static getNegative(): int
            public static setIfNotSet(arg0: int): void
            public static setNegativeIfNotSet(arg0: int): void
            public static class: java.lang.Class<any>
        }
    }
}