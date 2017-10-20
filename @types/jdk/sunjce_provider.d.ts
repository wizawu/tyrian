declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class CipherFeedback extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class HmacMD5 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class TlsKeyMaterialGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class OAEPParameters extends java.security.AlgorithmParametersSpi {
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
                class RC2Cipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class PBECipherCore {
                    public static class: java.lang.Class<any>
                }
                class DESedeKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class DHPublicKey implements java.security.PublicKey , javax.crypto.interfaces.DHPublicKey , java.io.Serializable {
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getY(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                class PBEParameters extends java.security.AlgorithmParametersSpi {
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
                class PBEKey implements javax.crypto.SecretKey {
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class DESKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                abstract class PBMAC1Core extends com.sun.crypto.provider.HmacCore {
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    public static class: java.lang.Class<any>
                }
                class PBMAC1Core$HmacSHA512 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PBMAC1Core$HmacSHA384 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PBMAC1Core$HmacSHA256 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PBMAC1Core$HmacSHA224 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PBMAC1Core$HmacSHA1 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SslMacCore {
                    public static class: java.lang.Class<any>
                }
                class SslMacCore$SslMacSHA1 extends javax.crypto.MacSpi {
                    public constructor()
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                    public static class: java.lang.Class<any>
                }
                class SslMacCore$SslMacMD5 extends javax.crypto.MacSpi {
                    public constructor()
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                    public static class: java.lang.Class<any>
                }
                class RC2Crypt extends com.sun.crypto.provider.SymmetricCipher {
                    public static class: java.lang.Class<any>
                }
                class BlowfishKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class JceKeyStore extends java.security.KeyStoreSpi {
                    public constructor()
                    public engineGetKey(arg0: string, arg1: char[]): java.security.Key
                    public engineGetCertificateChain(arg0: string): java.security.cert.Certificate[]
                    public engineGetCertificate(arg0: string): java.security.cert.Certificate
                    public engineGetCreationDate(arg0: string): java.util.Date
                    public engineSetKeyEntry(arg0: string, arg1: java.security.Key, arg2: char[], arg3: java.security.cert.Certificate[]): void
                    public engineSetKeyEntry(arg0: string, arg1: byte[], arg2: java.security.cert.Certificate[]): void
                    public engineSetCertificateEntry(arg0: string, arg1: java.security.cert.Certificate): void
                    public engineDeleteEntry(arg0: string): void
                    public engineAliases(): java.util.Enumeration<java.lang.String>
                    public engineContainsAlias(arg0: string): boolean
                    public engineSize(): int
                    public engineIsKeyEntry(arg0: string): boolean
                    public engineIsCertificateEntry(arg0: string): boolean
                    public engineGetCertificateAlias(arg0: java.security.cert.Certificate): string
                    public engineStore(arg0: java.io.OutputStream, arg1: char[]): void
                    public engineLoad(arg0: java.io.InputStream, arg1: char[]): void
                    public static class: java.lang.Class<any>
                }
                class JceKeyStore$1 {
                    public static class: java.lang.Class<any>
                }
                class JceKeyStore$TrustedCertEntry {
                    public static class: java.lang.Class<any>
                }
                class JceKeyStore$SecretKeyEntry {
                    public static class: java.lang.Class<any>
                }
                class JceKeyStore$PrivateKeyEntry {
                    public static class: java.lang.Class<any>
                }
                class DHParameterGenerator extends java.security.AlgorithmParameterGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineGenerateParameters(): java.security.AlgorithmParameters
                    public static class: java.lang.Class<any>
                }
                class GCMParameters extends java.security.AlgorithmParametersSpi {
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
                class RSACipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineGetKeySize(arg0: java.security.Key): int
                    public static class: java.lang.Class<any>
                }
                class GCTR {
                    protected doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    public static class: java.lang.Class<any>
                }
                class GaloisCounterMode extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class ConstructKeys {
                    public static class: java.lang.Class<any>
                }
                class DHKeyFactory extends java.security.KeyFactorySpi {
                    public constructor()
                    protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                    protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                    protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                    protected engineTranslateKey<T extends java.security.spec.KeySpec>(arg0: java.security.Key): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class BlowfishCipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                abstract class PBEKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$1 {
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA512AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA384AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA256AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA224AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA1AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA512AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA384AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA256AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA224AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithHmacSHA1AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithMD5AndTripleDES extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithSHA1AndRC4_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithSHA1AndRC4_40 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithSHA1AndRC2_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithSHA1AndRC2_40 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithSHA1AndDESede extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEKeyFactory$PBEWithMD5AndDES extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class DESedeWrapCipher extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                abstract class CipherWithWrappingSpi extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                abstract class AESWrapCipher extends javax.crypto.CipherSpi {
                    public constructor(arg0: int)
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class AESWrapCipher$AES256 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESWrapCipher$AES192 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESWrapCipher$AES128 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESWrapCipher$General extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class DESKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class TlsMasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class TlsMasterSecretGenerator$TlsMasterSecretKey implements sun.security.internal.interfaces.TlsMasterSecret {
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                }
                class DHPrivateKey implements java.security.PrivateKey , javax.crypto.interfaces.DHPrivateKey , java.io.Serializable {
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getX(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                class BlowfishParameters extends java.security.AlgorithmParametersSpi {
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
                class SealedObjectForKeyProtector extends javax.crypto.SealedObject {
                    public static class: java.lang.Class<any>
                }
                class BlowfishCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.BlowfishConstants {
                    public static class: java.lang.Class<any>
                }
                class HmacPKCS12PBESHA1 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class AESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.AESConstants {
                    public static class: java.lang.Class<any>
                }
                class HmacMD5KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class CipherForKeyProtector extends javax.crypto.Cipher {
                    protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: string)
                    public static class: java.lang.Class<any>
                }
                class KeyProtector {
                    public static class: java.lang.Class<any>
                }
                class ElectronicCodeBook extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class DESCipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class SunJCE extends java.security.Provider {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class SunJCE$1 implements java.security.PrivilegedAction<java.lang.Object> {
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class SunJCE$SecureRandomHolder {
                    public static class: java.lang.Class<any>
                }
                class AESParameters extends java.security.AlgorithmParametersSpi {
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
                class DHKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                    public constructor()
                    public initialize(arg0: int, arg1: java.security.SecureRandom): void
                    public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    public generateKeyPair(): java.security.KeyPair
                    public static class: java.lang.Class<any>
                }
                class PKCS5Padding implements com.sun.crypto.provider.Padding {
                    public padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    public unpad(arg0: byte[], arg1: int, arg2: int): int
                    public padLength(arg0: int): int
                    public static class: java.lang.Class<any>
                }
                class OutputFeedback extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class DESParameters extends java.security.AlgorithmParametersSpi {
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
                interface BlowfishConstants {
                    BLOWFISH_BLOCK_SIZE: int
                    BLOWFISH_MAX_KEYSIZE: int
                }
                class DESKey implements javax.crypto.SecretKey {
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class HmacSHA1KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                abstract class AESCipher extends javax.crypto.CipherSpi {
                    protected constructor(arg0: int)
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdateAAD(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdateAAD(arg0: java.nio.ByteBuffer): void
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES256_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES192_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES128_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES256_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES192_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES128_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES256_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES192_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES128_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES256_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES192_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES128_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES256_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES192_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class AESCipher$AES128_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                abstract class AESCipher$OidImpl extends com.sun.crypto.provider.AESCipher {
                    protected constructor(arg0: int, arg1: string, arg2: string)
                    public static class: java.lang.Class<any>
                }
                class AESCipher$General extends com.sun.crypto.provider.AESCipher {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class CounterMode extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore {
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$ARCFOURKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$RC2KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                abstract class KeyGeneratorCore$HmacSHA2KG extends javax.crypto.KeyGeneratorSpi {
                    protected constructor(arg0: string, arg1: int)
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA512 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA384 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA256 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA224 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBEWithMD5AndTripleDESCipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                abstract class PBES2Core extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA512AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA384AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA256AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA224AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA1AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA512AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA384AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA256AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA224AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Core$HmacSHA1AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class BlockCipherParamsCore {
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class DESedeParameters extends java.security.AlgorithmParametersSpi {
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
                class PBKDF2HmacSHA1Factory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                abstract class HmacCore extends javax.crypto.MacSpi implements java.lang.Cloneable {
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
                class HmacCore$HmacSHA512 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class HmacCore$HmacSHA384 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class HmacCore$HmacSHA256 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class HmacCore$HmacSHA224 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class HmacSHA1 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class PrivateKeyInfo {
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore {
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore$PBEWithSHA1AndRC4_128 extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetBlockSize(): int
                    protected engineGetIV(): byte[]
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore$PBEWithSHA1AndRC4_40 extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetBlockSize(): int
                    protected engineGetIV(): byte[]
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore$PBEWithSHA1AndRC2_128 extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetBlockSize(): int
                    protected engineGetIV(): byte[]
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore$PBEWithSHA1AndRC2_40 extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetBlockSize(): int
                    protected engineGetIV(): byte[]
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    public static class: java.lang.Class<any>
                }
                class PKCS12PBECipherCore$PBEWithSHA1AndDESede extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetBlockSize(): int
                    protected engineGetIV(): byte[]
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    public static class: java.lang.Class<any>
                }
                abstract class PBKDF2Core extends javax.crypto.SecretKeyFactorySpi {
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class PBKDF2Core$HmacSHA512 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBKDF2Core$HmacSHA384 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBKDF2Core$HmacSHA256 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBKDF2Core$HmacSHA224 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBKDF2Core$HmacSHA1 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class DHParameters extends java.security.AlgorithmParametersSpi {
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
                class DESedeCipher extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineSetMode(arg0: string): void
                    protected engineSetPadding(arg0: string): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
                class TlsRsaPremasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                interface DESConstants {
                    DES_BLOCK_SIZE: int
                }
                class DESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.DESConstants {
                    public static class: java.lang.Class<any>
                }
                class DESedeCrypt extends com.sun.crypto.provider.DESCrypt implements com.sun.crypto.provider.DESConstants {
                    public static class: java.lang.Class<any>
                }
                abstract class TlsPrfGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    public static class: java.lang.Class<any>
                }
                class TlsPrfGenerator$V10 extends com.sun.crypto.provider.TlsPrfGenerator {
                    public constructor()
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class TlsPrfGenerator$V12 extends com.sun.crypto.provider.TlsPrfGenerator {
                    public constructor()
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class RC2Parameters extends java.security.AlgorithmParametersSpi {
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
                class DESedeKey implements javax.crypto.SecretKey {
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class ISO10126Padding implements com.sun.crypto.provider.Padding {
                    public padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    public unpad(arg0: byte[], arg1: int, arg2: int): int
                    public padLength(arg0: int): int
                    public static class: java.lang.Class<any>
                }
                class AESKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class GHASH {
                    public static class: java.lang.Class<any>
                }
                class PCBC extends com.sun.crypto.provider.FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                class DHKeyAgreement extends javax.crypto.KeyAgreementSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
                    protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                    protected engineGenerateSecret(): byte[]
                    protected engineGenerateSecret(arg0: byte[], arg1: int): int
                    protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class CipherBlockChaining extends com.sun.crypto.provider.FeedbackCipher {
                    protected r: byte[]
                    public static class: java.lang.Class<any>
                }
                class CipherTextStealing extends com.sun.crypto.provider.CipherBlockChaining {
                    public static class: java.lang.Class<any>
                }
                class PBKDF2KeyImpl implements javax.crypto.interfaces.PBEKey {
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getIterationCount(): int
                    public getPassword(): char[]
                    public getSalt(): byte[]
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                class PBKDF2KeyImpl$1 implements javax.crypto.SecretKey {
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public static class: java.lang.Class<any>
                }
                interface AESConstants {
                    AES_BLOCK_SIZE: int
                    AES_KEYSIZES: int[]
                }
                abstract class PBES2Parameters extends java.security.AlgorithmParametersSpi {
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
                    protected engineInit(arg0: byte[]): void
                    protected engineInit(arg0: byte[], arg1: string): void
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
                    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: string): byte[]
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA512AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA384AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA256AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA224AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA1AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA512AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA384AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA256AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA224AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$HmacSHA1AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class PBES2Parameters$General extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class EncryptedPrivateKeyInfo {
                    public static class: java.lang.Class<any>
                }
                class DESedeKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    public static class: java.lang.Class<any>
                }
                class ARCFOURCipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    protected engineGetKeySize(arg0: java.security.Key): int
                    public static class: java.lang.Class<any>
                }
                class ai extends javax.crypto.SealedObject {
                    public static class: java.lang.Class<any>
                }
                abstract class SymmetricCipher {
                    public static class: java.lang.Class<any>
                }
                abstract class FeedbackCipher {
                    public static class: java.lang.Class<any>
                }
                interface Padding {
                    padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    unpad(arg0: byte[], arg1: int, arg2: int): int
                    padLength(arg0: int): int
                }
                class CipherCore {
                    public static class: java.lang.Class<any>
                }
                class PBES1Core {
                    public static class: java.lang.Class<any>
                }
                class PBEWithMD5AndDESCipher extends javax.crypto.CipherSpi {
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
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    protected engineDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
