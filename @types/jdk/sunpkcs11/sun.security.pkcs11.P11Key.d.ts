declare namespace sun {
    namespace security {
        namespace pkcs11 {
            abstract class P11Key implements java.security.Key , sun.security.util.Length {
                public getKeyID(): long
                public releaseKeyID(): void
                public getAlgorithm(): string
                public getEncoded(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                protected writeReplace(): java.lang.Object
                public toString(): string
                public length(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}