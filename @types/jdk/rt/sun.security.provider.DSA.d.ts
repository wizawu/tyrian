declare namespace sun {
    namespace security {
        namespace provider {
            abstract class DSA extends java.security.SignatureSpi {
                protected engineInitSign(arg0: java.security.PrivateKey): void
                protected engineInitVerify(arg0: java.security.PublicKey): void
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                protected engineSign(): byte[]
                protected engineVerify(arg0: byte[]): boolean
                protected engineVerify(arg0: byte[], arg1: int, arg2: int): boolean
                protected engineSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: java.lang.String | string): java.lang.Object
                protected generateK(arg0: java.math.BigInteger): java.math.BigInteger
                protected getSigningRandom(): java.security.SecureRandom
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}