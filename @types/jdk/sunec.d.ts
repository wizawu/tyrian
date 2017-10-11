declare namespace sun {
    namespace security {
        namespace ec {
            class SunEC extends java.security.Provider {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class SunEC$1 implements java.security.PrivilegedAction<java.lang.Void> {
                public run(): java.lang.Void
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SunECEntries {
                public static class: java.lang.Class<any>
            }
            class ECPrivateKeyImpl extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.ECPrivateKey {
                public constructor(arg0: byte[])
                public constructor(arg0: java.math.BigInteger, arg1: java.security.spec.ECParameterSpec)
                public getAlgorithm(): string
                public getS(): java.math.BigInteger
                public getParams(): java.security.spec.ECParameterSpec
                protected parseKeyBits(): void
            }
            class ECPublicKeyImpl extends sun.security.x509.X509Key implements java.security.interfaces.ECPublicKey {
                public constructor(arg0: java.security.spec.ECPoint, arg1: java.security.spec.ECParameterSpec)
                public constructor(arg0: byte[])
                public getAlgorithm(): string
                public getW(): java.security.spec.ECPoint
                public getParams(): java.security.spec.ECParameterSpec
                public getEncodedPublicValue(): byte[]
                protected parseKeyBits(): void
                public toString(): string
                protected writeReplace(): java.lang.Object
            }
            class ECKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                public constructor()
                public initialize(arg0: int, arg1: java.security.SecureRandom): void
                public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                public generateKeyPair(): java.security.KeyPair
                public static class: java.lang.Class<any>
            }
            class ECParameters extends java.security.AlgorithmParametersSpi {
                public constructor()
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
                protected engineInit(arg0: byte[]): void
                protected engineInit(arg0: byte[], arg1: string): void
                protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
                protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: string): byte[]
                protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
                public static class: java.lang.Class<any>
            }
            class NamedCurve extends java.security.spec.ECParameterSpec {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class CurveDB {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECKeyFactory extends java.security.KeyFactorySpi {
                public constructor()
                public static toECKey(arg0: java.security.Key): java.security.interfaces.ECKey
                protected engineTranslateKey(arg0: java.security.Key): java.security.Key
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                public static class: java.lang.Class<any>
            }
            class ECDHKeyAgreement extends javax.crypto.KeyAgreementSpi {
                public constructor()
                protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
                protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                protected engineGenerateSecret(): byte[]
                protected engineGenerateSecret(arg0: byte[], arg1: int): int
                protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            abstract class ECDSASignature extends java.security.SignatureSpi {
                protected engineInitVerify(arg0: java.security.PublicKey): void
                protected engineInitSign(arg0: java.security.PrivateKey): void
                protected engineInitSign(arg0: java.security.PrivateKey, arg1: java.security.SecureRandom): void
                protected resetDigest(): void
                protected getDigestValue(): byte[]
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                protected engineSign(): byte[]
                protected engineVerify(arg0: byte[]): boolean
                protected engineSetParameter(arg0: string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: string): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$SHA512 extends sun.security.ec.ECDSASignature {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$SHA384 extends sun.security.ec.ECDSASignature {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$SHA256 extends sun.security.ec.ECDSASignature {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$SHA224 extends sun.security.ec.ECDSASignature {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$SHA1 extends sun.security.ec.ECDSASignature {
                public constructor()
                public static class: java.lang.Class<any>
            }
            class ECDSASignature$Raw extends sun.security.ec.ECDSASignature {
                public constructor()
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                protected resetDigest(): void
                protected getDigestValue(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}
