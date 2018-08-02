declare namespace java {
    namespace security {
        abstract class Signature extends java.security.SignatureSpi {
            protected static UNINITIALIZED: int
            protected static SIGN: int
            protected static VERIFY: int
            protected state: int
            protected constructor(arg0: java.lang.String | string)
            public static getInstance(arg0: java.lang.String | string): java.security.Signature
            public static getInstance(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Signature
            public static getInstance(arg0: java.lang.String | string, arg1: java.security.Provider): java.security.Signature
            public getProvider(): java.security.Provider
            public initVerify(arg0: java.security.PublicKey): void
            public initVerify(arg0: java.security.cert.Certificate): void
            public initSign(arg0: java.security.PrivateKey): void
            public initSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
            public sign(): byte[]
            public sign(arg0: byte[], arg1: int, arg2: int): int
            public verify(arg0: byte[]): boolean
            public verify(arg0: byte[], arg1: int, arg2: int): boolean
            public update(arg0: byte): void
            public update(arg0: byte[]): void
            public update(arg0: byte[], arg1: int, arg2: int): void
            public update(arg0: java.nio.ByteBuffer): void
            public getAlgorithm(): string
            public toString(): string
            public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public setParameter(arg0: java.security.spec.AlgorithmParameterSpec): void
            public getParameters(): java.security.AlgorithmParameters
            public getParameter(arg0: java.lang.String | string): java.lang.Object
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}