declare namespace sun {
    namespace security {
        namespace ssl {
            class ProtocolVersion implements java.lang.Comparable<sun.security.ssl.ProtocolVersion> {
                public readonly v: int
                public readonly major: byte
                public readonly minor: byte
                public static valueOf(arg0: int, arg1: int): sun.security.ssl.ProtocolVersion
                public toString(): string
                public compareTo(arg0: sun.security.ssl.ProtocolVersion): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
        }
    }
}