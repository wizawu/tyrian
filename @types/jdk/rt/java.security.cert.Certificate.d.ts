declare namespace java {
    namespace security {
        namespace cert {
            abstract class Certificate implements java.io.Serializable {
                protected constructor(arg0: java.lang.String | string)
                public getType(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public abstract getEncoded(): byte[]
                public abstract verify(arg0: java.security.PublicKey): void
                public abstract verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
                public verify(arg0: java.security.PublicKey, arg1: java.security.Provider): void
                public abstract toString(): string
                public abstract getPublicKey(): java.security.PublicKey
                protected writeReplace(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}