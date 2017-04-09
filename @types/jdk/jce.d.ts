declare namespace sun {
    namespace security {
        namespace internal {
            namespace interfaces {
                interface TlsMasterSecret extends javax.crypto.SecretKey {
                    serialVersionUID: long
                    getMajorVersion(): int
                    getMinorVersion(): int
                }
                
            }
            namespace spec {
                class TlsKeyMaterialSpec implements java.security.spec.KeySpec , javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    public getAlgorithm(): java.lang.String
                    public getFormat(): java.lang.String
                    public getEncoded(): byte[]
                    public getClientMacKey(): javax.crypto.SecretKey
                    public getServerMacKey(): javax.crypto.SecretKey
                    public getClientCipherKey(): javax.crypto.SecretKey
                    public getClientIv(): javax.crypto.spec.IvParameterSpec
                    public getServerCipherKey(): javax.crypto.SecretKey
                    public getServerIv(): javax.crypto.spec.IvParameterSpec
                }
                class TlsKeyMaterialParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: java.lang.String, arg6: int, arg7: int, arg8: int, arg9: int, arg10: java.lang.String, arg11: int, arg12: int)
                    public getMasterSecret(): javax.crypto.SecretKey
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getClientRandom(): byte[]
                    public getServerRandom(): byte[]
                    public getCipherAlgorithm(): java.lang.String
                    public getCipherKeyLength(): int
                    public getExpandedCipherKeyLength(): int
                    public getIvLength(): int
                    public getMacKeyLength(): int
                    public getPRFHashAlg(): java.lang.String
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                }
                class TlsRsaPremasterSecretParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    constructor(...args: any[])
                    public getClientVersion(): int
                    public getServerVersion(): int
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getEncodedSecret(): byte[]
                }
                class TlsRsaPremasterSecretParameterSpec$1 implements java.security.PrivilegedAction<java.lang.Boolean> {
                    constructor()
                    run<T>(...args: any[]): any
                }
                class TlsMasterSecretParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: java.lang.String, arg6: int, arg7: int)
                    static checkVersion(arg0: int): int
                    public getPremasterSecret(): javax.crypto.SecretKey
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getClientRandom(): byte[]
                    public getServerRandom(): byte[]
                    public getPRFHashAlg(): java.lang.String
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                }
                class TlsPrfParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: java.lang.String, arg2: byte[], arg3: int, arg4: java.lang.String, arg5: int, arg6: int)
                    public getSecret(): javax.crypto.SecretKey
                    public getLabel(): java.lang.String
                    public getSeed(): byte[]
                    public getOutputLength(): int
                    public getPRFHashAlg(): java.lang.String
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                }
                
            }
            
        }
        
    }
    
}
declare namespace javax {
    namespace crypto {
        class JceSecurity {
            static RANDOM: java.security.SecureRandom
            static getInstance<T>(...args: any[]): any
            static verifyExemptJar(arg0: java.net.URL): javax.crypto.CryptoPermissions
            static verifyProviderJar(arg0: java.net.URL): void
            static getVerificationResult(arg0: java.security.Provider): java.lang.Exception
            static canUseProvider(arg0: java.security.Provider): boolean
            static getCodeBase(arg0: java.lang.Class<any>): java.net.URL
            static getDefaultPolicy(): javax.crypto.CryptoPermissions
            static getExemptPolicy(): javax.crypto.CryptoPermissions
            static isRestricted(): boolean
            static access$000(): void
            static access$100(): java.net.URL
        }
        class JceSecurity$2 implements java.security.PrivilegedAction<java.net.URL> {
            val$clazz: java.lang.Class
            constructor(arg0: java.lang.Class)
            run<T>(...args: any[]): any
        }
        class JceSecurity$1 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
            constructor()
            public run(): java.lang.Object
        }
        class EncryptedPrivateKeyInfo {
            constructor(...args: any[])
            public getAlgName(): java.lang.String
            public getAlgParameters(): java.security.AlgorithmParameters
            public getEncryptedData(): byte[]
            getKeySpec<T>(...args: any[]): any
            public getEncoded(): byte[]
        }
        class CipherOutputStream extends java.io.FilterOutputStream {
            constructor(...args: any[])
            write<T>(...args: any[]): any
            public flush(): void
            public close(): void
        }
        class CipherInputStream extends java.io.FilterInputStream {
            constructor(...args: any[])
            read<T>(...args: any[]): any
            public skip(arg0: long): long
            public available(): int
            public close(): void
            public markSupported(): boolean
        }
        class CryptoAllPermissionCollection extends java.security.PermissionCollection implements java.io.Serializable {
            constructor()
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
        }
        class SecretKeyFactory {
            protected constructor(arg0: javax.crypto.SecretKeyFactorySpi, arg1: java.security.Provider, arg2: java.lang.String)
            static getInstance<T>(...args: any[]): any
            public getProvider(): java.security.Provider
            public getAlgorithm(): java.lang.String
            public generateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
            public getKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
            public translateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
        }
        class CryptoPermissionCollection extends java.security.PermissionCollection implements java.io.Serializable {
            constructor()
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
        }
        class NullCipher extends javax.crypto.Cipher {
            public constructor()
        }
        class PermissionsEnumerator implements java.util.Enumeration<java.security.Permission> {
            constructor(arg0: java.util.Enumeration<java.security.PermissionCollection>)
            public hasMoreElements(): boolean
            nextElement<T>(...args: any[]): any
        }
        class extObjectInputStream extends java.io.ObjectInputStream {
            constructor(arg0: java.io.InputStream)
            protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
        }
        class NullCipherSpi extends javax.crypto.CipherSpi {
            protected constructor()
            public engineSetMode(arg0: java.lang.String): void
            public engineSetPadding(arg0: java.lang.String): void
            protected engineGetBlockSize(): int
            protected engineGetOutputSize(arg0: int): int
            protected engineGetIV(): byte[]
            protected engineGetParameters(): java.security.AlgorithmParameters
            engineInit<T>(...args: any[]): any
            engineUpdate<T>(...args: any[]): any
            engineDoFinal<T>(...args: any[]): any
            protected engineGetKeySize(arg0: java.security.Key): int
        }
        class CryptoAllPermission extends javax.crypto.CryptoPermission {
            static ALG_NAME: java.lang.String
            static INSTANCE: javax.crypto.CryptoAllPermission
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public newPermissionCollection(): java.security.PermissionCollection
        }
        class JceSecurityManager extends java.lang.SecurityManager {
            static INSTANCE: javax.crypto.JceSecurityManager
            getCryptoPermission(arg0: java.lang.String): javax.crypto.CryptoPermission
            isCallerTrusted(): boolean
            constructor(arg0: javax.crypto.JceSecurityManager$1)
        }
        class JceSecurityManager$1 implements java.security.PrivilegedAction<javax.crypto.JceSecurityManager> {
            constructor()
            run<T>(...args: any[]): any
        }
        class CryptoPolicyParser {
            constructor()
            read(arg0: java.io.Reader): void
            getPermissions(): javax.crypto.CryptoPermission[]
        }
        class CryptoPolicyParser$ParsingException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        class CryptoPolicyParser$CryptoPermissionEntry {
            cryptoPermission: java.lang.String
            alg: java.lang.String
            exemptionMechanism: java.lang.String
            maxKeySize: int
            checkParam: boolean
            algParamSpec: java.security.spec.AlgorithmParameterSpec
            constructor()
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
        }
        class CryptoPolicyParser$GrantEntry {
            constructor()
            add(arg0: javax.crypto.CryptoPolicyParser$CryptoPermissionEntry): void
            remove(arg0: javax.crypto.CryptoPolicyParser$CryptoPermissionEntry): boolean
            contains(arg0: javax.crypto.CryptoPolicyParser$CryptoPermissionEntry): boolean
            permissionElements(): java.util.Enumeration<javax.crypto.CryptoPolicyParser$CryptoPermissionEntry>
        }
        class CryptoPermissions extends java.security.PermissionCollection implements java.io.Serializable {
            constructor()
            load(arg0: java.io.InputStream): void
            isEmpty(): boolean
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
            getMinimum(arg0: javax.crypto.CryptoPermissions): javax.crypto.CryptoPermissions
            getPermissionCollection(arg0: java.lang.String): java.security.PermissionCollection
        }
        class JarVerifier {
            constructor(arg0: java.net.URL, arg1: boolean)
            verify(): void
            static verifyPolicySigned(arg0: java.security.cert.Certificate[]): void
            getPermissions(): javax.crypto.CryptoPermissions
        }
        class JarVerifier$1 implements java.security.PrivilegedExceptionAction<java.util.jar.JarFile> {
            val$url: java.net.URL
            this$0: javax.crypto.JarVerifier
            constructor(arg0: javax.crypto.JarVerifier, arg1: java.net.URL)
            run<T>(...args: any[]): any
        }
        class KeyGenerator {
            protected constructor(arg0: javax.crypto.KeyGeneratorSpi, arg1: java.security.Provider, arg2: java.lang.String)
            public getAlgorithm(): java.lang.String
            static getInstance<T>(...args: any[]): any
            public getProvider(): java.security.Provider
            disableFailover(): void
            init<T>(...args: any[]): any
            public generateKey(): javax.crypto.SecretKey
        }
        class KeyAgreement {
            protected constructor(arg0: javax.crypto.KeyAgreementSpi, arg1: java.security.Provider, arg2: java.lang.String)
            public getAlgorithm(): java.lang.String
            static getInstance<T>(...args: any[]): any
            chooseFirstProvider(): void
            public getProvider(): java.security.Provider
            init<T>(...args: any[]): any
            public doPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
            generateSecret<T>(...args: any[]): any
        }
        class ExemptionMechanismException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        abstract class ExemptionMechanismSpi {
            public constructor()
            protected engineGetOutputSize(arg0: int): int
            engineInit<T>(...args: any[]): any
            engineGenExemptionBlob<T>(...args: any[]): any
        }
        class NoSuchPaddingException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        class ExemptionMechanism {
            protected constructor(arg0: javax.crypto.ExemptionMechanismSpi, arg1: java.security.Provider, arg2: java.lang.String)
            public getName(): java.lang.String
            static getInstance<T>(...args: any[]): any
            public getProvider(): java.security.Provider
            public isCryptoAllowed(arg0: java.security.Key): boolean
            public getOutputSize(arg0: int): int
            init<T>(...args: any[]): any
            genExemptionBlob<T>(...args: any[]): any
            protected finalize(): void
        }
        class CryptoPermission extends java.security.Permission {
            static ALG_NAME_WILDCARD: java.lang.String
            constructor(...args: any[])
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public getActions(): java.lang.String
            public newPermissionCollection(): java.security.PermissionCollection
            getAlgorithm(): java.lang.String
            getExemptionMechanism(): java.lang.String
            getMaxKeySize(): int
            getCheckParam(): boolean
            getAlgorithmParameterSpec(): java.security.spec.AlgorithmParameterSpec
            toString<T>(...args: any[]): any
        }
        abstract class CipherSpi {
            public constructor()
            protected engineSetMode(arg0: java.lang.String): void
            protected engineSetPadding(arg0: java.lang.String): void
            protected engineGetBlockSize(): int
            protected engineGetOutputSize(arg0: int): int
            protected engineGetIV(): byte[]
            protected engineGetParameters(): java.security.AlgorithmParameters
            engineInit<T>(...args: any[]): any
            engineUpdate<T>(...args: any[]): any
            engineDoFinal<T>(...args: any[]): any
            static getTempArraySize(arg0: int): int
            protected engineWrap(arg0: java.security.Key): byte[]
            protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
            protected engineGetKeySize(arg0: java.security.Key): int
            engineUpdateAAD<T>(...args: any[]): any
        }
        class Cipher {
            public static ENCRYPT_MODE: int
            public static DECRYPT_MODE: int
            public static WRAP_MODE: int
            public static UNWRAP_MODE: int
            public static PUBLIC_KEY: int
            public static PRIVATE_KEY: int
            public static SECRET_KEY: int
            constructor(...args: any[])
            static getInstance<T>(...args: any[]): any
            chooseFirstProvider(): void
            public getProvider(): java.security.Provider
            public getAlgorithm(): java.lang.String
            public getBlockSize(): int
            public getOutputSize(arg0: int): int
            public getIV(): byte[]
            public getParameters(): java.security.AlgorithmParameters
            public getExemptionMechanism(): javax.crypto.ExemptionMechanism
            init<T>(...args: any[]): any
            update<T>(...args: any[]): any
            doFinal<T>(...args: any[]): any
            public wrap(arg0: java.security.Key): byte[]
            public unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
            public static getMaxAllowedKeyLength(arg0: java.lang.String): int
            public static getMaxAllowedParameterSpec(arg0: java.lang.String): java.security.spec.AlgorithmParameterSpec
            updateAAD<T>(...args: any[]): any
        }
        class Cipher$Transform {
            transform: java.lang.String
            suffix: java.lang.String
            mode: java.lang.String
            pad: java.lang.String
            constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String)
            setModePadding(arg0: javax.crypto.CipherSpi): void
            supportsModePadding(arg0: java.security.Provider$Service): int
            supportsMode(arg0: java.security.Provider$Service): int
            supportsPadding(arg0: java.security.Provider$Service): int
        }
        class SealedObject implements java.io.Serializable {
            static serialVersionUID: long
            protected encodedParams: byte[]
            constructor(...args: any[])
            public getAlgorithm(): java.lang.String
            getObject<T>(...args: any[]): any
        }
        class Mac implements java.lang.Cloneable {
            protected constructor(arg0: javax.crypto.MacSpi, arg1: java.security.Provider, arg2: java.lang.String)
            public getAlgorithm(): java.lang.String
            static getInstance<T>(...args: any[]): any
            chooseFirstProvider(): void
            public getProvider(): java.security.Provider
            public getMacLength(): int
            init<T>(...args: any[]): any
            update<T>(...args: any[]): any
            doFinal<T>(...args: any[]): any
            public reset(): void
            public clone(): java.lang.Object
        }
        namespace interfaces {
            interface DHPrivateKey extends javax.crypto.interfaces.DHKey , java.security.PrivateKey {
                serialVersionUID: long
                getX(): java.math.BigInteger
            }
            interface DHKey {
                getParams(): javax.crypto.spec.DHParameterSpec
            }
            interface DHPublicKey extends javax.crypto.interfaces.DHKey , java.security.PublicKey {
                serialVersionUID: long
                getY(): java.math.BigInteger
            }
            interface PBEKey extends javax.crypto.SecretKey {
                serialVersionUID: long
                getPassword(): char[]
                getSalt(): byte[]
                getIterationCount(): int
            }
            
        }
        abstract class KeyGeneratorSpi {
            public constructor()
            engineInit<T>(...args: any[]): any
            protected engineGenerateKey(): javax.crypto.SecretKey
        }
        namespace spec {
            class GCMParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getTLen(): int
                public getIV(): byte[]
            }
            class SecretKeySpec implements java.security.spec.KeySpec , javax.crypto.SecretKey {
                constructor(...args: any[])
                public getAlgorithm(): java.lang.String
                public getFormat(): java.lang.String
                public getEncoded(): byte[]
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
            }
            class DHPrivateKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getX(): java.math.BigInteger
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
            }
            class DESedeKeySpec implements java.security.spec.KeySpec {
                public static DES_EDE_KEY_LEN: int
                constructor(...args: any[])
                public getKey(): byte[]
                public static isParityAdjusted(arg0: byte[], arg1: int): boolean
            }
            class RC2ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getEffectiveKeyBits(): int
                public getIV(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
            }
            class DHGenParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: int, arg1: int)
                public getPrimeSize(): int
                public getExponentSize(): int
            }
            class RC5ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getVersion(): int
                public getRounds(): int
                public getWordSize(): int
                public getIV(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
            }
            class DESKeySpec implements java.security.spec.KeySpec {
                public static DES_KEY_LEN: int
                constructor(...args: any[])
                public getKey(): byte[]
                public static isParityAdjusted(arg0: byte[], arg1: int): boolean
                public static isWeak(arg0: byte[], arg1: int): boolean
            }
            class PBEParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getSalt(): byte[]
                public getIterationCount(): int
                public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
            }
            class PSource {
                protected constructor(arg0: java.lang.String)
                public getAlgorithm(): java.lang.String
            }
            class PSource$PSpecified extends javax.crypto.spec.PSource {
                public static DEFAULT: javax.crypto.spec.PSource$PSpecified
                public constructor(arg0: byte[])
                public getValue(): byte[]
            }
            class OAEPParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public static DEFAULT: javax.crypto.spec.OAEPParameterSpec
                public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.security.spec.AlgorithmParameterSpec, arg3: javax.crypto.spec.PSource)
                public getDigestAlgorithm(): java.lang.String
                public getMGFAlgorithm(): java.lang.String
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                public getPSource(): javax.crypto.spec.PSource
            }
            class DHPublicKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getY(): java.math.BigInteger
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
            }
            class IvParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getIV(): byte[]
            }
            class DHParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                constructor(...args: any[])
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
                public getL(): int
            }
            class PBEKeySpec implements java.security.spec.KeySpec {
                constructor(...args: any[])
                public clearPassword(): void
                public getPassword(): char[]
                public getSalt(): byte[]
                public getIterationCount(): int
                public getKeyLength(): int
            }
            
        }
        abstract class KeyAgreementSpi {
            public constructor()
            engineInit<T>(...args: any[]): any
            protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
            engineGenerateSecret<T>(...args: any[]): any
        }
        abstract class SecretKeyFactorySpi {
            public constructor()
            protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
            protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
            protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
        }
        interface SecretKey extends java.security.Key , javax.security.auth.Destroyable {
            serialVersionUID: long
        }
        class BadPaddingException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        class AEADBadTagException extends javax.crypto.BadPaddingException {
            constructor(...args: any[])
        }
        class ShortBufferException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        class IllegalBlockSizeException extends java.security.GeneralSecurityException {
            constructor(...args: any[])
        }
        abstract class MacSpi {
            public constructor()
            protected engineGetMacLength(): int
            protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            engineUpdate<T>(...args: any[]): any
            protected engineDoFinal(): byte[]
            protected engineReset(): void
            public clone(): java.lang.Object
        }
        
    }
    
}
