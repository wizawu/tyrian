declare namespace java {
    namespace security {
        abstract class SignatureSpi {
            protected appRandom: java.security.SecureRandom
            public constructor()
            protected abstract engineInitVerify(arg0: java.security.PublicKey): void
            protected abstract engineInitSign(arg0: java.security.PrivateKey): void
            protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
            protected abstract engineUpdate(arg0: byte): void
            protected abstract engineUpdate(arg0: byte[], arg1: int, arg2: int): void
            protected engineUpdate(arg0: java.nio.ByteBuffer): void
            protected abstract engineSign(): byte[]
            protected engineSign(arg0: byte[], arg1: int, arg2: int): int
            protected abstract engineVerify(arg0: byte[]): boolean
            protected engineVerify(arg0: byte[], arg1: int, arg2: int): boolean
            protected abstract engineSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
            protected engineSetParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
            protected engineGetParameters(): java.security.AlgorithmParameters
            protected abstract engineGetParameter(arg0: java.lang.String | string): java.lang.Object
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}