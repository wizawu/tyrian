declare namespace sun {
    namespace security {
        namespace x509 {
            class SerialNumber {
                public constructor(arg0: java.math.BigInteger)
                public constructor(arg0: int)
                public constructor(arg0: sun.security.util.DerInputStream)
                public constructor(arg0: sun.security.util.DerValue)
                public constructor(arg0: java.io.InputStream)
                public toString(): string
                public encode(arg0: sun.security.util.DerOutputStream): void
                public getNumber(): java.math.BigInteger
                public static class: java.lang.Class<any>
            }
        }
    }
}