declare namespace sun {
    namespace security {
        namespace jgss {
            class GSSHeader {
                public static readonly TOKEN_ID: int
                public constructor(arg0: sun.security.util.ObjectIdentifier, arg1: int)
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public getOid(): sun.security.util.ObjectIdentifier
                public getMechTokenLength(): int
                public getLength(): int
                public static getMaxMechTokenSize(arg0: sun.security.util.ObjectIdentifier, arg1: int): int
                public encode(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): int
                public static class: java.lang.Class<any>
            }
        }
    }
}