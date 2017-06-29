declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class DESedeKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(arg0: byte[])
                    constructor(arg0: byte[], arg1: int)
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
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
                }
                class HmacMD5 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
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
                }
                class TlsKeyMaterialGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class DESKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
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
                }
                class JceKeyStore$1 {
                }
                class JceKeyStore$TrustedCertEntry {
                    date: java.util.Date
                    cert: java.security.cert.Certificate
                    constructor(arg0: com.sun.crypto.provider.JceKeyStore$1)
                }
                class JceKeyStore$SecretKeyEntry {
                    date: java.util.Date
                    sealedKey: javax.crypto.SealedObject
                    constructor(arg0: com.sun.crypto.provider.JceKeyStore$1)
                }
                class JceKeyStore$PrivateKeyEntry {
                    date: java.util.Date
                    protectedKey: byte[]
                    chain: java.security.cert.Certificate[]
                    constructor(arg0: com.sun.crypto.provider.JceKeyStore$1)
                }
                class DESedeKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class DESKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    static setParityBit(arg0: byte[], arg1: int): void
                }
                class DHParameterGenerator extends java.security.AlgorithmParameterGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineGenerateParameters(): java.security.AlgorithmParameters
                }
                class SslMacCore {
                    constructor(arg0: string, arg1: byte[], arg2: byte[])
                    getDigestLength(): int
                    init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    update(arg0: byte): void
                    update(arg0: byte[], arg1: int, arg2: int): void
                    update(arg0: java.nio.ByteBuffer): void
                    doFinal(): byte[]
                    reset(): void
                }
                class SslMacCore$SslMacSHA1 extends javax.crypto.MacSpi {
                    static shaPad1: byte[]
                    static shaPad2: byte[]
                    public constructor()
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                }
                class SslMacCore$SslMacMD5 extends javax.crypto.MacSpi {
                    static md5Pad1: byte[]
                    static md5Pad2: byte[]
                    public constructor()
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                }
                class KeyGeneratorCore {
                    constructor(arg0: string, arg1: int)
                    implInit(arg0: java.security.SecureRandom): void
                    implInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    implInit(arg0: int, arg1: java.security.SecureRandom): void
                    implGenerateKey(): javax.crypto.SecretKey
                }
                class KeyGeneratorCore$ARCFOURKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class KeyGeneratorCore$RC2KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                abstract class KeyGeneratorCore$HmacSHA2KG extends javax.crypto.KeyGeneratorSpi {
                    protected constructor(arg0: string, arg1: int)
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA512 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA384 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA256 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
                }
                class KeyGeneratorCore$HmacSHA2KG$SHA224 extends com.sun.crypto.provider.KeyGeneratorCore$HmacSHA2KG {
                    public constructor()
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
                }
                class TlsRsaPremasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
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
                }
                abstract class CipherWithWrappingSpi extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                }
                class SunJCE extends java.security.Provider {
                    static debug: boolean
                    static getRandom(): java.security.SecureRandom
                    public constructor()
                    static getInstance(): com.sun.crypto.provider.SunJCE
                }
                class SunJCE$1 implements java.security.PrivilegedAction<java.lang.Object> {
                    this$0: com.sun.crypto.provider.SunJCE
                    constructor(arg0: com.sun.crypto.provider.SunJCE)
                    public run(): java.lang.Object
                }
                class SunJCE$SecureRandomHolder {
                    static RANDOM: java.security.SecureRandom
                }
                class RC2Crypt extends com.sun.crypto.provider.SymmetricCipher {
                    constructor()
                    getBlockSize(): int
                    getEffectiveKeyBits(): int
                    initEffectiveKeyBits(arg0: int): void
                    static checkKey(arg0: string, arg1: int): void
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class CounterMode extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    reset(): void
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
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
                }
                abstract class PBEKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    constructor(arg0: string, arg1: com.sun.crypto.provider.PBEKeyFactory$1)
                }
                class PBEKeyFactory$1 {
                }
                class PBEKeyFactory$PBEWithHmacSHA512AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA384AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA256AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA224AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA1AndAES_256 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA512AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA384AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA256AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA224AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithHmacSHA1AndAES_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithMD5AndTripleDES extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithSHA1AndRC4_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithSHA1AndRC4_40 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithSHA1AndRC2_128 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithSHA1AndRC2_40 extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithSHA1AndDESede extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
                }
                class PBEKeyFactory$PBEWithMD5AndDES extends com.sun.crypto.provider.PBEKeyFactory {
                    public constructor()
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
                }
                class ElectronicCodeBook extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    reset(): void
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class PrivateKeyInfo {
                    constructor(arg0: byte[])
                    getAlgorithm(): sun.security.x509.AlgorithmId
                }
                abstract class AESCipher extends javax.crypto.CipherSpi {
                    static checkKeySize(arg0: java.security.Key, arg1: int): void
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
                }
                class AESCipher$AES256_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES192_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES128_GCM_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES256_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES192_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES128_CFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES256_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES192_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES128_OFB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES256_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES192_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES128_CBC_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES256_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES192_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                class AESCipher$AES128_ECB_NoPadding extends com.sun.crypto.provider.AESCipher$OidImpl {
                    public constructor()
                }
                abstract class AESCipher$OidImpl extends com.sun.crypto.provider.AESCipher {
                    protected constructor(arg0: int, arg1: string, arg2: string)
                }
                class AESCipher$General extends com.sun.crypto.provider.AESCipher {
                    public constructor()
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
                }
                class GCTR {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: byte[])
                    update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    protected doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    reset(): void
                    save(): void
                    restore(): void
                }
                class GaloisCounterMode extends com.sun.crypto.provider.FeedbackCipher {
                    static DEFAULT_TAG_LEN: int
                    static DEFAULT_IV_LEN: int
                    static increment32(arg0: byte[]): void
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    reset(): void
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[], arg4: int): void
                    updateAAD(arg0: byte[], arg1: int, arg2: int): void
                    processAAD(): void
                    doLastBlock(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: boolean): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    encryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    getTagLen(): int
                    getBufferedLength(): int
                }
                class AESKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class ISO10126Padding implements com.sun.crypto.provider.Padding {
                    constructor(arg0: int)
                    public padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    public unpad(arg0: byte[], arg1: int, arg2: int): int
                    public padLength(arg0: int): int
                }
                class HmacMD5KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class DHKeyFactory extends java.security.KeyFactorySpi {
                    public constructor()
                    protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                    protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                    protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                    protected engineTranslateKey<T extends java.security.spec.KeySpec>(arg0: java.security.Key): java.security.Key
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
                }
                class HmacSHA1KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
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
                }
                class DESedeKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
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
                }
                class PKCS12PBECipherCore {
                    static CIPHER_KEY: int
                    static CIPHER_IV: int
                    static MAC_KEY: int
                    static derive(arg0: char[], arg1: byte[], arg2: int, arg3: int, arg4: int): byte[]
                    static derive(arg0: char[], arg1: byte[], arg2: int, arg3: int, arg4: int, arg5: string, arg6: int): byte[]
                    constructor(arg0: string, arg1: int)
                    implSetMode(arg0: string): void
                    implSetPadding(arg0: string): void
                    implGetBlockSize(): int
                    implGetOutputSize(arg0: int): int
                    implGetIV(): byte[]
                    implGetParameters(): java.security.AlgorithmParameters
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom, arg4: javax.crypto.CipherSpi): void
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom, arg4: javax.crypto.CipherSpi): void
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    implInit(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom, arg3: javax.crypto.CipherSpi): void
                    implUpdate(arg0: byte[], arg1: int, arg2: int): byte[]
                    implUpdate(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    implDoFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    implDoFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    implGetKeySize(arg0: java.security.Key): int
                    implWrap(arg0: java.security.Key): byte[]
                    implUnwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
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
                }
                class CipherBlockChaining extends com.sun.crypto.provider.FeedbackCipher {
                    protected r: byte[]
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class CipherTextStealing extends com.sun.crypto.provider.CipherBlockChaining {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    encryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class ai extends javax.crypto.SealedObject {
                    static serialVersionUID: long
                    constructor(arg0: javax.crypto.SealedObject)
                    readResolve(): java.lang.Object
                }
                class DESedeCrypt extends com.sun.crypto.provider.DESCrypt implements com.sun.crypto.provider.DESConstants {
                    constructor()
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class TlsMasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class TlsMasterSecretGenerator$TlsMasterSecretKey implements sun.security.internal.interfaces.TlsMasterSecret {
                    constructor(arg0: byte[], arg1: int, arg2: int)
                    public getMajorVersion(): int
                    public getMinorVersion(): int
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                }
                class DHKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                    public constructor()
                    public initialize(arg0: int, arg1: java.security.SecureRandom): void
                    public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    public generateKeyPair(): java.security.KeyPair
                }
                class PBECipherCore {
                    constructor(arg0: string)
                    setMode(arg0: string): void
                    setPadding(arg0: string): void
                    getBlockSize(): int
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(): java.security.AlgorithmParameters
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    update(arg0: byte[], arg1: int, arg2: int): byte[]
                    update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                }
                class DHPrivateKey implements java.security.PrivateKey , javax.crypto.interfaces.DHPrivateKey , java.io.Serializable {
                    static serialVersionUID: long
                    constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                    constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: int)
                    constructor(arg0: byte[])
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getX(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                abstract class TlsPrfGenerator extends javax.crypto.KeyGeneratorSpi {
                    static LABEL_MASTER_SECRET: byte[]
                    static LABEL_KEY_EXPANSION: byte[]
                    static LABEL_CLIENT_WRITE_KEY: byte[]
                    static LABEL_SERVER_WRITE_KEY: byte[]
                    static LABEL_IV_BLOCK: byte[]
                    static SSL3_CONST: byte[][]
                    static genPad(arg0: byte, arg1: int): byte[]
                    static concat(arg0: byte[], arg1: byte[]): byte[]
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    engineGenerateKey0(arg0: boolean): javax.crypto.SecretKey
                    static doTLS12PRF(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int, arg4: string, arg5: int, arg6: int): byte[]
                    static doTLS12PRF(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int, arg4: java.security.MessageDigest, arg5: int, arg6: int): byte[]
                    static doTLS10PRF(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int): byte[]
                    static doTLS10PRF(arg0: byte[], arg1: byte[], arg2: byte[], arg3: int, arg4: java.security.MessageDigest, arg5: java.security.MessageDigest): byte[]
                }
                class TlsPrfGenerator$V10 extends com.sun.crypto.provider.TlsPrfGenerator {
                    public constructor()
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class TlsPrfGenerator$V12 extends com.sun.crypto.provider.TlsPrfGenerator {
                    public constructor()
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                abstract class PBES2Core extends javax.crypto.CipherSpi {
                    constructor(arg0: string, arg1: string, arg2: int)
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
                }
                class PBES2Core$HmacSHA512AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA384AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA256AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA224AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA1AndAES_256 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA512AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA384AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA256AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA224AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                class PBES2Core$HmacSHA1AndAES_128 extends com.sun.crypto.provider.PBES2Core {
                    public constructor()
                }
                interface BlowfishConstants {
                    BLOWFISH_BLOCK_SIZE: int
                    BLOWFISH_MAX_KEYSIZE: int
                }
                class BlowfishCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.BlowfishConstants {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class PBES1Core {
                    constructor(arg0: string)
                    setMode(arg0: string): void
                    setPadding(arg0: string): void
                    getBlockSize(): int
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(): java.security.AlgorithmParameters
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    update(arg0: byte[], arg1: int, arg2: int): byte[]
                    update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
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
                }
                class CipherCore {
                    static GCM_MODE: int
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: int)
                    setMode(arg0: string): void
                    getMode(): int
                    setPadding(arg0: string): void
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(arg0: string): java.security.AlgorithmParameters
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.SecureRandom): void
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.spec.AlgorithmParameterSpec, arg3: java.security.SecureRandom): void
                    init(arg0: int, arg1: java.security.Key, arg2: java.security.AlgorithmParameters, arg3: java.security.SecureRandom): void
                    static getKeyBytes(arg0: java.security.Key): byte[]
                    update(arg0: byte[], arg1: int, arg2: int): byte[]
                    update(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    doFinal(arg0: byte[], arg1: int, arg2: int): byte[]
                    doFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: string, arg2: int): java.security.Key
                    updateAAD(arg0: byte[], arg1: int, arg2: int): void
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
                }
                class GHASH {
                    constructor(arg0: byte[])
                    reset(): void
                    save(): void
                    restore(): void
                    update(arg0: byte[]): void
                    update(arg0: byte[], arg1: int, arg2: int): void
                    digest(): byte[]
                }
                interface AESConstants {
                    AES_BLOCK_SIZE: int
                    AES_KEYSIZES: int[]
                }
                class AESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.AESConstants {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    static isKeySizeValid(arg0: int): boolean
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
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
                }
                class AESWrapCipher$AES256 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                }
                class AESWrapCipher$AES192 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                }
                class AESWrapCipher$AES128 extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                }
                class AESWrapCipher$General extends com.sun.crypto.provider.AESWrapCipher {
                    public constructor()
                }
                class CipherFeedback extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: int)
                    getFeedback(): string
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    encryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
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
                }
                class CipherForKeyProtector extends javax.crypto.Cipher {
                    protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: string)
                }
                class EncryptedPrivateKeyInfo {
                    constructor(arg0: byte[])
                    constructor(arg0: sun.security.x509.AlgorithmId, arg1: byte[])
                    getAlgorithm(): sun.security.x509.AlgorithmId
                    getEncryptedData(): byte[]
                    getEncoded(): byte[]
                }
                class KeyProtector {
                    constructor(arg0: char[])
                    protect(arg0: java.security.PrivateKey): byte[]
                    recover(arg0: com.sun.crypto.provider.EncryptedPrivateKeyInfo): java.security.Key
                    seal(arg0: java.security.Key): javax.crypto.SealedObject
                    unseal(arg0: javax.crypto.SealedObject): java.security.Key
                }
                class OutputFeedback extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: int)
                    getFeedback(): string
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    encryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
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
                }
                class SealedObjectForKeyProtector extends javax.crypto.SealedObject {
                    static serialVersionUID: long
                    constructor(arg0: java.io.Serializable, arg1: javax.crypto.Cipher)
                    constructor(arg0: javax.crypto.SealedObject)
                    getParameters(): java.security.AlgorithmParameters
                }
                class ConstructKeys {
                    constructor()
                    static constructKey(arg0: byte[], arg1: string, arg2: int): java.security.Key
                }
                class HmacSHA1 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class DHPublicKey implements java.security.PublicKey , javax.crypto.interfaces.DHPublicKey , java.io.Serializable {
                    static serialVersionUID: long
                    constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger)
                    constructor(arg0: java.math.BigInteger, arg1: java.math.BigInteger, arg2: java.math.BigInteger, arg3: int)
                    constructor(arg0: byte[])
                    public getFormat(): string
                    public getAlgorithm(): string
                    public getEncoded(): byte[]
                    public getY(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    public toString(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                class PBKDF2KeyImpl implements javax.crypto.interfaces.PBEKey {
                    static serialVersionUID: long
                    constructor(arg0: javax.crypto.spec.PBEKeySpec, arg1: string)
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
                    val$prf: javax.crypto.Mac
                    val$password: byte[]
                    constructor(arg0: javax.crypto.Mac, arg1: byte[])
                    public getAlgorithm(): string
                    public getFormat(): string
                    public getEncoded(): byte[]
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                abstract class PBKDF2Core extends javax.crypto.SecretKeyFactorySpi {
                    constructor(arg0: string)
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                }
                class PBKDF2Core$HmacSHA512 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                }
                class PBKDF2Core$HmacSHA384 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                }
                class PBKDF2Core$HmacSHA256 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                }
                class PBKDF2Core$HmacSHA224 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                }
                class PBKDF2Core$HmacSHA1 extends com.sun.crypto.provider.PBKDF2Core {
                    public constructor()
                }
                abstract class PBMAC1Core extends com.sun.crypto.provider.HmacCore {
                    constructor(arg0: string, arg1: string, arg2: int)
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                }
                class PBMAC1Core$HmacSHA512 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class PBMAC1Core$HmacSHA384 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class PBMAC1Core$HmacSHA256 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class PBMAC1Core$HmacSHA224 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class PBMAC1Core$HmacSHA1 extends com.sun.crypto.provider.PBMAC1Core {
                    public constructor()
                    public clone(): java.lang.Object
                }
                interface DESConstants {
                    DES_BLOCK_SIZE: int
                }
                class DESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.DESConstants {
                    expandedKey: byte[]
                    decrypting: boolean
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    cipherBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    expandKey(arg0: byte[]): void
                }
                class BlowfishKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class PBEKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(arg0: javax.crypto.spec.PBEKeySpec, arg1: string)
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                interface Padding {
                    padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    unpad(arg0: byte[], arg1: int, arg2: int): int
                    padLength(arg0: int): int
                }
                class PKCS5Padding implements com.sun.crypto.provider.Padding {
                    constructor(arg0: int)
                    public padWithLen(arg0: byte[], arg1: int, arg2: int): void
                    public unpad(arg0: byte[], arg1: int, arg2: int): int
                    public padLength(arg0: int): int
                }
                class DHKeyAgreement extends javax.crypto.KeyAgreementSpi {
                    public constructor()
                    protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
                    protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                    protected engineGenerateSecret(): byte[]
                    protected engineGenerateSecret(arg0: byte[], arg1: int): int
                    protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
                }
                class PBKDF2HmacSHA1Factory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                }
                class BlockCipherParamsCore {
                    constructor(arg0: int)
                    init(arg0: java.security.spec.AlgorithmParameterSpec): void
                    init(arg0: byte[]): void
                    init(arg0: byte[], arg1: string): void
                    getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    getEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
                    getEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: string): byte[]
                    public toString<T extends java.security.spec.AlgorithmParameterSpec>(): string
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
                }
                class DESKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(arg0: byte[])
                    constructor(arg0: byte[], arg1: int)
                    public getEncoded(): byte[]
                    public getAlgorithm(): string
                    public getFormat(): string
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                abstract class PBES2Parameters extends java.security.AlgorithmParametersSpi {
                    constructor()
                    constructor(arg0: string)
                    protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec): void
                    protected engineInit(arg0: byte[]): void
                    protected engineInit(arg0: byte[], arg1: string): void
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(): byte[]
                    protected engineGetEncoded<T extends java.security.spec.AlgorithmParameterSpec>(arg0: string): byte[]
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): string
                }
                class PBES2Parameters$HmacSHA512AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA384AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA256AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA224AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA1AndAES_256 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA512AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA384AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA256AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA224AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$HmacSHA1AndAES_128 extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                class PBES2Parameters$General extends com.sun.crypto.provider.PBES2Parameters {
                    public constructor()
                }
                abstract class SymmetricCipher {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: string, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                abstract class FeedbackCipher {
                    embeddedCipher: com.sun.crypto.provider.SymmetricCipher
                    blockSize: int
                    iv: byte[]
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getEmbeddedCipher(): com.sun.crypto.provider.SymmetricCipher
                    getBlockSize(): int
                    getFeedback(): string
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    getIV(): byte[]
                    reset(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    encryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decryptFinal(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    updateAAD(arg0: byte[], arg1: int, arg2: int): void
                    getBufferedLength(): int
                }
                class PCBC extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): string
                    init(arg0: boolean, arg1: string, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                abstract class HmacCore extends javax.crypto.MacSpi implements java.lang.Cloneable {
                    constructor(arg0: java.security.MessageDigest, arg1: int)
                    constructor(arg0: string, arg1: int)
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    protected engineUpdate(arg0: byte): void
                    protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                    protected engineUpdate(arg0: java.nio.ByteBuffer): void
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
                    public clone(): java.lang.Object
                }
                class HmacCore$HmacSHA512 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class HmacCore$HmacSHA384 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class HmacCore$HmacSHA256 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class HmacCore$HmacSHA224 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class HmacPKCS12PBESHA1 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    public clone(): java.lang.Object
                }
            }
        }
    }
}
