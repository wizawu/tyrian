declare namespace sun {
    namespace security {
        namespace ec {
            class SunEC extends java.security.Provider {
                public constructor()
            }
            class SunECEntries {
                static putEntries(arg0: java.util.Map<java.lang.Object, java.lang.Object>, arg1: boolean): void
            }
            class ECPrivateKeyImpl extends sun.security.pkcs.PKCS8Key implements java.security.interfaces.ECPrivateKey {
                constructor(...args: any[])
                public getAlgorithm(): string
                public getS(): java.math.BigInteger
                public getParams(): java.security.spec.ECParameterSpec
                protected parseKeyBits(): void
            }
            class ECPublicKeyImpl extends sun.security.x509.X509Key implements java.security.interfaces.ECPublicKey {
                constructor(...args: any[])
                public getAlgorithm(): string
                public getW(): java.security.spec.ECPoint
                public getParams(): java.security.spec.ECParameterSpec
                public getEncodedPublicValue(): byte[]
                protected parseKeyBits(): void
                toString<T>(...args: any[]): any
                protected writeReplace(): java.lang.Object
            }
            class ECKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                public constructor()
                initialize<T>(...args: any[]): any
                public generateKeyPair(): java.security.KeyPair
            }
            class ECParameters extends java.security.AlgorithmParametersSpi {
                static getAlgorithmParameters(arg0: java.security.spec.ECParameterSpec): java.security.AlgorithmParameters
                public constructor()
                engineInit<T>(...args: any[]): any
                protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                engineGetEncoded<T>(...args: any[]): any
                protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
            }
            class NamedCurve extends java.security.spec.ECParameterSpec {
                constructor(arg0: string, arg1: string, arg2: java.security.spec.EllipticCurve, arg3: java.security.spec.ECPoint, arg4: java.math.BigInteger, arg5: int)
                getName(): string
                getEncoded(): byte[]
                getObjectId(): string
                toString<T>(...args: any[]): any
            }
            class CurveDB {
                static SPLIT_PATTERN: string
                public constructor()
                static getSupportedCurves(): java.util.Collection<sun.security.ec.NamedCurve>
                static lookup<T>(...args: any[]): any
            }
            class ECKeyFactory extends java.security.KeyFactorySpi {
                public constructor()
                public static toECKey(arg0: java.security.Key): java.security.interfaces.ECKey
                protected engineTranslateKey(arg0: java.security.Key): java.security.Key
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
            }
            class ECDHKeyAgreement extends javax.crypto.KeyAgreementSpi {
                public constructor()
                engineInit<T>(...args: any[]): any
                protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                engineGenerateSecret<T>(...args: any[]): any
            }
            abstract class ECDSASignature extends java.security.SignatureSpi {
                constructor(...args: any[])
                protected engineInitVerify(arg0: java.security.PublicKey): void
                engineInitSign<T>(...args: any[]): any
                protected resetDigest(): void
                protected getDigestValue(): byte[]
                engineUpdate<T>(...args: any[]): any
                protected engineSign(): byte[]
                protected engineVerify(arg0: byte[]): boolean
                protected engineSetParameter(arg0: string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: string): java.lang.Object
            }
            
        }
        
    }
    
}
