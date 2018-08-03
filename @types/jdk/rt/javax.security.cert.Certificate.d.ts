declare namespace javax {
    namespace security {
        namespace cert {
            abstract class Certificate {
                public constructor()
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public abstract getEncoded(): byte[]
                public abstract verify(arg0: java.security.PublicKey): void
                public abstract verify(arg0: java.security.PublicKey, arg1: java.lang.String | string): void
                public abstract toString(): string
                public abstract getPublicKey(): java.security.PublicKey
                public static class: java.lang.Class<any>
            }
        }
    }
}