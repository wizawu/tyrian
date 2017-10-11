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
                    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey)
                    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey, arg2: javax.crypto.SecretKey, arg3: javax.crypto.SecretKey)
                    public constructor(arg0: javax.crypto.SecretKey, arg1: javax.crypto.SecretKey, arg2: javax.crypto.SecretKey, arg3: javax.crypto.spec.IvParameterSpec, arg4: javax.crypto.SecretKey, arg5: javax.crypto.spec.IvParameterSpec)
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                    public getClientMacKey(): javax.crypto.SecretKey
                    public getServerMacKey(): javax.crypto.SecretKey
                    public getClientCipherKey(): javax.crypto.SecretKey
                    public getClientIv(): javax.crypto.spec.IvParameterSpec
                    public getServerCipherKey(): javax.crypto.SecretKey
                    public getServerIv(): javax.crypto.spec.IvParameterSpec
                    public static class: java.lang.Class<any>
                }
                class TlsKeyMaterialParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: string, arg6: int, arg7: int, arg8: int, arg9: int, arg10: string, arg11: int, arg12: int)
                    public getMasterSecret(): javax.crypto.SecretKey
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getClientRandom(): byte[]
                    public getServerRandom(): byte[]
                    public getCipherAlgorithm(): string
                    public getCipherKeyLength(): int
                    public getExpandedCipherKeyLength(): int
                    public getIvLength(): int
                    public getMacKeyLength(): int
                    public getPRFHashAlg(): string
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                    public static class: java.lang.Class<any>
                }
                class TlsRsaPremasterSecretParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: int, arg1: int)
                    public constructor(arg0: int, arg1: int, arg2: byte[])
                    public getClientVersion(): int
                    public getServerVersion(): int
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getEncodedSecret(): byte[]
                    public static class: java.lang.Class<any>
                }
                class TlsRsaPremasterSecretParameterSpec$1 implements java.security.PrivilegedAction<java.lang.Boolean> {
                    public run(): boolean
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TlsMasterSecretParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: int, arg2: int, arg3: byte[], arg4: byte[], arg5: string, arg6: int, arg7: int)
                    public getPremasterSecret(): javax.crypto.SecretKey
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getClientRandom(): byte[]
                    public getServerRandom(): byte[]
                    public getPRFHashAlg(): string
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                    public static class: java.lang.Class<any>
                }
                class TlsPrfParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                    public constructor(arg0: javax.crypto.SecretKey, arg1: string, arg2: byte[], arg3: int, arg4: string, arg5: int, arg6: int)
                    public getSecret(): javax.crypto.SecretKey
                    public getLabel(): string
                    public getSeed(): byte[]
                    public getOutputLength(): int
                    public getPRFHashAlg(): string
                    public getPRFHashLength(): int
                    public getPRFBlockSize(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace javax {
    namespace crypto {
        class JceSecurity {
            public static class: java.lang.Class<any>
        }
        class JceSecurity$2 implements java.security.PrivilegedAction<java.net.URL> {
            public run(): java.net.URL
            public run(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class JceSecurity$1 implements java.security.PrivilegedExceptionAction<java.lang.Object> {
            public run(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class EncryptedPrivateKeyInfo {
            public constructor(arg0: byte[])
            public constructor(arg0: string, arg1: byte[])
            public constructor(arg0: java.security.AlgorithmParameters, arg1: byte[])
            public getAlgName(): string
            public getAlgParameters(): java.security.AlgorithmParameters
            public getEncryptedData(): byte[]
            public getKeySpec(arg0: javax.crypto.Cipher): java.security.spec.PKCS8EncodedKeySpec
            public getKeySpec(arg0: java.security.Key): java.security.spec.PKCS8EncodedKeySpec
            public getKeySpec(arg0: java.security.Key, arg1: string): java.security.spec.PKCS8EncodedKeySpec
            public getKeySpec(arg0: java.security.Key, arg1: java.security.Provider): java.security.spec.PKCS8EncodedKeySpec
            public getEncoded(): byte[]
            public static class: java.lang.Class<any>
        }
        class CipherOutputStream extends java.io.FilterOutputStream {
            public constructor(arg0: java.io.OutputStream, arg1: javax.crypto.Cipher)
            protected constructor(arg0: java.io.OutputStream)
            public write(arg0: int): void
            public write(arg0: byte[]): void
            public write(arg0: byte[], arg1: int, arg2: int): void
            public flush(): void
            public close(): void
            public static class: java.lang.Class<any>
        }
        class CipherInputStream extends java.io.FilterInputStream {
            public constructor(arg0: java.io.InputStream, arg1: javax.crypto.Cipher)
            protected constructor(arg0: java.io.InputStream)
            public read(): int
            public read(arg0: byte[]): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public available(): int
            public close(): void
            public markSupported(): boolean
            public static class: java.lang.Class<any>
        }
        class CryptoAllPermissionCollection extends java.security.PermissionCollection implements java.io.Serializable {
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
            public static class: java.lang.Class<any>
        }
        class SecretKeyFactory {
            protected constructor(arg0: javax.crypto.SecretKeyFactorySpi, arg1: java.security.Provider, arg2: string)
            public static getInstance(arg0: string): javax.crypto.SecretKeyFactory
            public static getInstance(arg0: string, arg1: string): javax.crypto.SecretKeyFactory
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.SecretKeyFactory
            public getProvider(): java.security.Provider
            public getAlgorithm(): string
            public generateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
            public getKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
            public translateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        class CryptoPermissionCollection extends java.security.PermissionCollection implements java.io.Serializable {
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
            public static class: java.lang.Class<any>
        }
        class NullCipher extends javax.crypto.Cipher {
            public constructor()
            public static class: java.lang.Class<any>
        }
        class PermissionsEnumerator implements java.util.Enumeration<java.security.Permission> {
            public hasMoreElements(): boolean
            public nextElement(): java.security.Permission
            public nextElement(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class extObjectInputStream extends java.io.ObjectInputStream {
            protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
            public static class: java.lang.Class<any>
        }
        class NullCipherSpi extends javax.crypto.CipherSpi {
            protected constructor()
            public engineSetMode(arg0: string): void
            public engineSetPadding(arg0: string): void
            protected engineGetBlockSize(): int
            protected engineGetOutputSize(arg0: int): int
            protected engineGetIV(): byte[]
            protected engineGetParameters(): java.security.AlgorithmParameters
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            protected engineGetKeySize(arg0: java.security.Key): int
            public static class: java.lang.Class<any>
        }
        class CryptoAllPermission extends javax.crypto.CryptoPermission {
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public newPermissionCollection(): java.security.PermissionCollection
            public static class: java.lang.Class<any>
        }
        class JceSecurityManager extends java.lang.SecurityManager {
            public static class: java.lang.Class<any>
        }
        class JceSecurityManager$1 implements java.security.PrivilegedAction<javax.crypto.JceSecurityManager> {
            public run(): javax.crypto.JceSecurityManager
            public run(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class CryptoPolicyParser {
            public static class: java.lang.Class<any>
        }
        class CryptoPolicyParser$ParsingException extends java.security.GeneralSecurityException {
            public static class: java.lang.Class<any>
        }
        class CryptoPolicyParser$CryptoPermissionEntry {
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
        class CryptoPolicyParser$GrantEntry {
            public static class: java.lang.Class<any>
        }
        class CryptoPermissions extends java.security.PermissionCollection implements java.io.Serializable {
            public add(arg0: java.security.Permission): void
            public implies(arg0: java.security.Permission): boolean
            public elements(): java.util.Enumeration<java.security.Permission>
            public static class: java.lang.Class<any>
        }
        class JarVerifier {
            public static class: java.lang.Class<any>
        }
        class JarVerifier$1 implements java.security.PrivilegedExceptionAction<java.util.jar.JarFile> {
            public run(): java.util.jar.JarFile
            public run(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class KeyGenerator {
            protected constructor(arg0: javax.crypto.KeyGeneratorSpi, arg1: java.security.Provider, arg2: string)
            public getAlgorithm(): string
            public static getInstance(arg0: string): javax.crypto.KeyGenerator
            public static getInstance(arg0: string, arg1: string): javax.crypto.KeyGenerator
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.KeyGenerator
            public getProvider(): java.security.Provider
            public init(arg0: java.security.SecureRandom): void
            public init(arg0: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
            public init(arg0: int): void
            public init(arg0: int, arg1: java.security.SecureRandom): void
            public generateKey(): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        class KeyAgreement {
            protected constructor(arg0: javax.crypto.KeyAgreementSpi, arg1: java.security.Provider, arg2: string)
            public getAlgorithm(): string
            public static getInstance(arg0: string): javax.crypto.KeyAgreement
            public static getInstance(arg0: string, arg1: string): javax.crypto.KeyAgreement
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.KeyAgreement
            public getProvider(): java.security.Provider
            public init(arg0: java.security.Key): void
            public init(arg0: java.security.Key, arg1: java.security.SecureRandom): void
            public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
            public doPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
            public generateSecret(): byte[]
            public generateSecret(arg0: byte[], arg1: int): int
            public generateSecret(arg0: string): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        class ExemptionMechanismException extends java.security.GeneralSecurityException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        abstract class ExemptionMechanismSpi {
            public constructor()
            protected engineGetOutputSize(arg0: int): int
            protected engineInit(arg0: java.security.Key): void
            protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            protected engineInit(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
            protected engineGenExemptionBlob(): byte[]
            protected engineGenExemptionBlob(arg0: byte[], arg1: int): int
            public static class: java.lang.Class<any>
        }
        class NoSuchPaddingException extends java.security.GeneralSecurityException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        class ExemptionMechanism {
            protected constructor(arg0: javax.crypto.ExemptionMechanismSpi, arg1: java.security.Provider, arg2: string)
            public getName(): string
            public static getInstance(arg0: string): javax.crypto.ExemptionMechanism
            public static getInstance(arg0: string, arg1: string): javax.crypto.ExemptionMechanism
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.ExemptionMechanism
            public getProvider(): java.security.Provider
            public isCryptoAllowed(arg0: java.security.Key): boolean
            public getOutputSize(arg0: int): int
            public init(arg0: java.security.Key): void
            public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: java.security.Key, arg1: java.security.AlgorithmParameters): void
            public genExemptionBlob(): byte[]
            public genExemptionBlob(arg0: byte[]): int
            public genExemptionBlob(arg0: byte[], arg1: int): int
            protected finalize(): void
            public static class: java.lang.Class<any>
        }
        class CryptoPermission extends java.security.Permission {
            public implies(arg0: java.security.Permission): boolean
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public getActions(): string
            public newPermissionCollection(): java.security.PermissionCollection
            public toString(): string
            public static class: java.lang.Class<any>
        }
        abstract class CipherSpi {
            public constructor()
            protected engineSetMode(arg0: string): void
            protected engineSetPadding(arg0: string): void
            protected engineGetBlockSize(): int
            protected engineGetOutputSize(arg0: int): int
            protected engineGetIV(): byte[]
            protected engineGetParameters(): java.security.AlgorithmParameters
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
            protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            protected engineUpdate(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
            protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            protected engineDoFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            protected engineWrap(arg0: java.security.Key): byte[]
            protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
            protected engineGetKeySize(arg0: java.security.Key): int
            protected engineUpdateAAD(arg0: byte[], arg1: int, arg2: int): void
            protected engineUpdateAAD(arg0: java.nio.ByteBuffer): void
            public static class: java.lang.Class<any>
        }
        class Cipher {
            public static ENCRYPT_MODE: int
            public static DECRYPT_MODE: int
            public static WRAP_MODE: int
            public static UNWRAP_MODE: int
            public static PUBLIC_KEY: int
            public static PRIVATE_KEY: int
            public static SECRET_KEY: int
            protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: string)
            public static getInstance(arg0: string): javax.crypto.Cipher
            public static getInstance(arg0: string, arg1: string): javax.crypto.Cipher
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.Cipher
            public getProvider(): java.security.Provider
            public getAlgorithm(): string
            public getBlockSize(): int
            public getOutputSize(arg0: int): int
            public getIV(): byte[]
            public getParameters(): java.security.AlgorithmParameters
            public getExemptionMechanism(): javax.crypto.ExemptionMechanism
            public init(arg0: int, arg1: java.security.Key): void
            public init(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
            public init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec): void
            public init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
            public init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters): void
            public init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
            public init(arg0: int, arg1: java.security.cert.Certificate): void
            public init(arg0: int, arg1: java.security.cert.Certificate, arg2: java.security.SecureRandom): void
            public update(arg0: byte[]): byte[]
            public update(arg0: byte[], arg1: int, arg2: int): byte[]
            public update(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
            public update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            public update(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            public doFinal(): byte[]
            public doFinal(arg0: byte[], arg1: int): int
            public doFinal(arg0: byte[]): byte[]
            public doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
            public doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[]): int
            public doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
            public doFinal(arg0: java.nio.ByteBuffer, arg1: java.nio.ByteBuffer): int
            public wrap(arg0: java.security.Key): byte[]
            public unwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
            public static getMaxAllowedKeyLength(arg0: string): int
            public static getMaxAllowedParameterSpec(arg0: string): java.security.spec.AlgorithmParameterSpec
            public updateAAD(arg0: byte[]): void
            public updateAAD(arg0: byte[], arg1: int, arg2: int): void
            public updateAAD(arg0: java.nio.ByteBuffer): void
            public static class: java.lang.Class<any>
        }
        class Cipher$Transform {
            public static class: java.lang.Class<any>
        }
        class SealedObject implements java.io.Serializable {
            protected encodedParams: byte[]
            public constructor(arg0: java.io.Serializable, arg1: javax.crypto.Cipher)
            protected constructor(arg0: javax.crypto.SealedObject)
            public getAlgorithm(): string
            public getObject(arg0: java.security.Key): java.lang.Object
            public getObject(arg0: javax.crypto.Cipher): java.lang.Object
            public getObject(arg0: java.security.Key, arg1: string): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class Mac implements java.lang.Cloneable {
            protected constructor(arg0: javax.crypto.MacSpi, arg1: java.security.Provider, arg2: string)
            public getAlgorithm(): string
            public static getInstance(arg0: string): javax.crypto.Mac
            public static getInstance(arg0: string, arg1: string): javax.crypto.Mac
            public static getInstance(arg0: string, arg1: java.security.Provider): javax.crypto.Mac
            public getProvider(): java.security.Provider
            public getMacLength(): int
            public init(arg0: java.security.Key): void
            public init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            public update(arg0: byte): void
            public update(arg0: byte[]): void
            public update(arg0: byte[], arg1: int, arg2: int): void
            public update(arg0: java.nio.ByteBuffer): void
            public doFinal(): byte[]
            public doFinal(arg0: byte[], arg1: int): void
            public doFinal(arg0: byte[]): byte[]
            public reset(): void
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        namespace interfaces {
            interface DHPrivateKey extends javax.crypto.interfaces.DHKey , java.security.PrivateKey {
                serialVersionUID: long
                getX(): java.math.BigInteger
            }
            interface DHKey {
                getParams(): javax.crypto.spec.DHParameterSpec
            }
            interface DHKey$$Lambda {
                (): javax.crypto.spec.DHParameterSpec
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
            protected engineInit(arg0: java.security.SecureRandom): void
            protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
            protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
            protected engineGenerateKey(): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        namespace spec {
            class GCMParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: int, arg1: byte[], arg2: int, arg3: int)
                public getTLen(): int
                public getIV(): byte[]
                public static class: java.lang.Class<any>
            }
            class SecretKeySpec implements java.security.spec.KeySpec , javax.crypto.SecretKey {
                public constructor(arg0: byte[], arg1: string)
                public constructor(arg0: byte[], arg1: int, arg2: int, arg3: string)
                public getAlgorithm(): string
                public getFormat(): string
                public getEncoded(): byte[]
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class DHPrivateKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getX(): java.math.BigInteger
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
                public static class: java.lang.Class<any>
            }
            class DESedeKeySpec implements java.security.spec.KeySpec {
                public static DES_EDE_KEY_LEN: int
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int)
                public getKey(): byte[]
                public static isParityAdjusted(arg0: byte[], arg1: int): boolean
                public static class: java.lang.Class<any>
            }
            class RC2ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: byte[])
                public constructor(arg0: int, arg1: byte[], arg2: int)
                public getEffectiveKeyBits(): int
                public getIV(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class DHGenParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: int, arg1: int)
                public getPrimeSize(): int
                public getExponentSize(): int
                public static class: java.lang.Class<any>
            }
            class RC5ParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: int, arg1: int, arg2: int)
                public constructor(arg0: int, arg1: int, arg2: int, arg3: byte[])
                public constructor(arg0: int, arg1: int, arg2: int, arg3: byte[], arg4: int)
                public getVersion(): int
                public getRounds(): int
                public getWordSize(): int
                public getIV(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class DESKeySpec implements java.security.spec.KeySpec {
                public static DES_KEY_LEN: int
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int)
                public getKey(): byte[]
                public static isParityAdjusted(arg0: byte[], arg1: int): boolean
                public static isWeak(arg0: byte[], arg1: int): boolean
                public static class: java.lang.Class<any>
            }
            class PBEParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: byte[], arg1: int)
                public constructor(arg0: byte[], arg1: int, arg2: java.security.spec.AlgorithmParameterSpec)
                public getSalt(): byte[]
                public getIterationCount(): int
                public getParameterSpec(): java.security.spec.AlgorithmParameterSpec
                public static class: java.lang.Class<any>
            }
            class PSource {
                protected constructor(arg0: string)
                public getAlgorithm(): string
                public static class: java.lang.Class<any>
            }
            class PSource$PSpecified extends javax.crypto.spec.PSource {
                public static DEFAULT: javax.crypto.spec.PSource$PSpecified
                public constructor(arg0: byte[])
                public getValue(): byte[]
                public static class: java.lang.Class<any>
            }
            class OAEPParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public static DEFAULT: javax.crypto.spec.OAEPParameterSpec
                public constructor(arg0: string, arg1: string, arg2: java.security.spec.AlgorithmParameterSpec, arg3: javax.crypto.spec.PSource)
                public getDigestAlgorithm(): string
                public getMGFAlgorithm(): string
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec
                public getPSource(): javax.crypto.spec.PSource
                public static class: java.lang.Class<any>
            }
            class DHPublicKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                public getY(): java.math.BigInteger
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
                public static class: java.lang.Class<any>
            }
            class IvParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: byte[])
                public constructor(arg0: byte[], arg1: int, arg2: int)
                public getIV(): byte[]
                public static class: java.lang.Class<any>
            }
            class DHParameterSpec implements java.security.spec.AlgorithmParameterSpec {
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger)
                public constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: int)
                public getP(): java.math.BigInteger
                public getG(): java.math.BigInteger
                public getL(): int
                public static class: java.lang.Class<any>
            }
            class PBEKeySpec implements java.security.spec.KeySpec {
                public constructor(arg0: char[])
                public constructor(arg0: char[], arg1: byte[], arg2: int, arg3: int)
                public constructor(arg0: char[], arg1: byte[], arg2: int)
                public clearPassword(): void
                public getPassword(): char[]
                public getSalt(): byte[]
                public getIterationCount(): int
                public getKeyLength(): int
                public static class: java.lang.Class<any>
            }
        }
        abstract class KeyAgreementSpi {
            public constructor()
            protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
            protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
            protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
            protected engineGenerateSecret(): byte[]
            protected engineGenerateSecret(arg0: byte[], arg1: int): int
            protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        abstract class SecretKeyFactorySpi {
            public constructor()
            protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
            protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
            protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
            public static class: java.lang.Class<any>
        }
        interface SecretKey extends java.security.Key , javax.security.auth.Destroyable {
            serialVersionUID: long
        }
        class BadPaddingException extends java.security.GeneralSecurityException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        class AEADBadTagException extends javax.crypto.BadPaddingException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        class ShortBufferException extends java.security.GeneralSecurityException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        class IllegalBlockSizeException extends java.security.GeneralSecurityException {
            public constructor()
            public constructor(arg0: string)
            public static class: java.lang.Class<any>
        }
        abstract class MacSpi {
            public constructor()
            protected engineGetMacLength(): int
            protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
            protected engineUpdate(arg0: byte): void
            protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
            protected engineUpdate(arg0: java.nio.ByteBuffer): void
            protected engineDoFinal(): byte[]
            protected engineReset(): void
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}
