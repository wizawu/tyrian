declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class DESedeKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    public getEncoded(): byte[]
                    public getAlgorithm(): java.lang.String
                    public getFormat(): java.lang.String
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                class DESedeWrapCipher extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class HmacMD5 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class GCMParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class RC2Cipher extends javax.crypto.CipherSpi {
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
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class TlsKeyMaterialGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
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
                    public engineGetKey(arg0: java.lang.String, arg1: char[]): java.security.Key
                    public engineGetCertificateChain(arg0: java.lang.String): java.security.cert.Certificate[]
                    public engineGetCertificate(arg0: java.lang.String): java.security.cert.Certificate
                    public engineGetCreationDate(arg0: java.lang.String): java.util.Date
                    engineSetKeyEntry<T>(...args: any[]): any
                    public engineSetCertificateEntry(arg0: java.lang.String, arg1: java.security.cert.Certificate): void
                    public engineDeleteEntry(arg0: java.lang.String): void
                    public engineAliases(): java.util.Enumeration<java.lang.String>
                    public engineContainsAlias(arg0: java.lang.String): boolean
                    public engineSize(): int
                    public engineIsKeyEntry(arg0: java.lang.String): boolean
                    public engineIsCertificateEntry(arg0: java.lang.String): boolean
                    public engineGetCertificateAlias(arg0: java.security.cert.Certificate): java.lang.String
                    public engineStore(arg0: java.io.OutputStream, arg1: char[]): void
                    public engineLoad(arg0: java.io.InputStream, arg1: char[]): void
                }
                class DESedeKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class DESKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                    static setParityBit(arg0: byte[], arg1: int): void
                }
                class DHParameterGenerator extends java.security.AlgorithmParameterGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateParameters(): java.security.AlgorithmParameters
                }
                class SslMacCore {
                    constructor(arg0: java.lang.String, arg1: byte[], arg2: byte[])
                    getDigestLength(): int
                    init(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    update<T>(...args: any[]): any
                    doFinal(): byte[]
                    reset(): void
                }
                class KeyGeneratorCore {
                    constructor(arg0: java.lang.String, arg1: int)
                    implInit<T>(...args: any[]): any
                    implGenerateKey(): javax.crypto.SecretKey
                }
                class OAEPParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class TlsRsaPremasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class BlowfishParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                abstract class CipherWithWrappingSpi extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class SunJCE extends java.security.Provider {
                    static debug: boolean
                    static getRandom(): java.security.SecureRandom
                    public constructor()
                    static getInstance(): com.sun.crypto.provider.SunJCE
                }
                class RC2Crypt extends com.sun.crypto.provider.SymmetricCipher {
                    constructor()
                    getBlockSize(): int
                    getEffectiveKeyBits(): int
                    initEffectiveKeyBits(arg0: int): void
                    static checkKey(arg0: java.lang.String, arg1: int): void
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class CounterMode extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): java.lang.String
                    reset(): void
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class BlowfishCipher extends javax.crypto.CipherSpi {
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
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class RSACipher extends javax.crypto.CipherSpi {
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
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                    protected engineGetKeySize(arg0: java.security.Key): int
                }
                class DESCipher extends javax.crypto.CipherSpi {
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
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                abstract class PBEKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                    constructor(arg0: java.lang.String, arg1: com.sun.crypto.provider.PBEKeyFactory$1)
                }
                class DHParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class ElectronicCodeBook extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): java.lang.String
                    reset(): void
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
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
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                    engineUpdateAAD<T>(...args: any[]): any
                }
                class RC2Parameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
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
                    getFeedback(): java.lang.String
                    reset(): void
                    save(): void
                    restore(): void
                    init<T>(...args: any[]): any
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
                    engineInit<T>(...args: any[]): any
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
                    engineInit<T>(...args: any[]): any
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
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class HmacSHA1KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class AESParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class DESedeKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                }
                class ARCFOURCipher extends javax.crypto.CipherSpi {
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
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                    protected engineGetKeySize(arg0: java.security.Key): int
                }
                class PKCS12PBECipherCore {
                    static CIPHER_KEY: int
                    static CIPHER_IV: int
                    static MAC_KEY: int
                    static derive<T>(...args: any[]): any
                    constructor(arg0: java.lang.String, arg1: int)
                    implSetMode(arg0: java.lang.String): void
                    implSetPadding(arg0: java.lang.String): void
                    implGetBlockSize(): int
                    implGetOutputSize(arg0: int): int
                    implGetIV(): byte[]
                    implGetParameters(): java.security.AlgorithmParameters
                    implInit<T>(...args: any[]): any
                    implUpdate<T>(...args: any[]): any
                    implDoFinal<T>(...args: any[]): any
                    implGetKeySize(arg0: java.security.Key): int
                    implWrap(arg0: java.security.Key): byte[]
                    implUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class CipherBlockChaining extends com.sun.crypto.provider.FeedbackCipher {
                    protected r: byte[]
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): java.lang.String
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class CipherTextStealing extends com.sun.crypto.provider.CipherBlockChaining {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher)
                    getFeedback(): java.lang.String
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
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class TlsMasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class DHKeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                    public constructor()
                    initialize<T>(...args: any[]): any
                    public generateKeyPair(): java.security.KeyPair
                }
                class PBECipherCore {
                    constructor(arg0: java.lang.String)
                    setMode(arg0: java.lang.String): void
                    setPadding(arg0: java.lang.String): void
                    getBlockSize(): int
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(): java.security.AlgorithmParameters
                    init<T>(...args: any[]): any
                    update<T>(...args: any[]): any
                    doFinal<T>(...args: any[]): any
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class DHPrivateKey implements java.security.PrivateKey , javax.crypto.interfaces.DHPrivateKey , java.io.Serializable {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    public getFormat(): java.lang.String
                    public getAlgorithm(): java.lang.String
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
                    engineInit<T>(...args: any[]): any
                    engineGenerateKey0(arg0: boolean): javax.crypto.SecretKey
                    static doTLS12PRF<T>(...args: any[]): any
                    static doTLS10PRF<T>(...args: any[]): any
                }
                abstract class PBES2Core extends javax.crypto.CipherSpi {
                    constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                interface BlowfishConstants {
                    BLOWFISH_BLOCK_SIZE: int
                    BLOWFISH_MAX_KEYSIZE: int
                }
                class BlowfishCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.BlowfishConstants {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                class PBES1Core {
                    constructor(arg0: java.lang.String)
                    setMode(arg0: java.lang.String): void
                    setPadding(arg0: java.lang.String): void
                    getBlockSize(): int
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(): java.security.AlgorithmParameters
                    init<T>(...args: any[]): any
                    update<T>(...args: any[]): any
                    doFinal<T>(...args: any[]): any
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class PBEWithMD5AndTripleDESCipher extends javax.crypto.CipherSpi {
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
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class CipherCore {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: int)
                    setMode(arg0: java.lang.String): void
                    setPadding(arg0: java.lang.String): void
                    getOutputSize(arg0: int): int
                    getIV(): byte[]
                    getParameters(arg0: java.lang.String): java.security.AlgorithmParameters
                    init<T>(...args: any[]): any
                    static getKeyBytes(arg0: java.security.Key): byte[]
                    update<T>(...args: any[]): any
                    doFinal<T>(...args: any[]): any
                    wrap(arg0: java.security.Key): byte[]
                    unwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                    updateAAD(arg0: byte[], arg1: int, arg2: int): void
                }
                class DESedeCipher extends javax.crypto.CipherSpi {
                    public constructor()
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class GHASH {
                    constructor(arg0: byte[])
                    reset(): void
                    save(): void
                    restore(): void
                    update<T>(...args: any[]): any
                    digest(): byte[]
                }
                interface AESConstants {
                    AES_BLOCK_SIZE: int
                    AES_KEYSIZES: int[]
                }
                class AESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.AESConstants {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
                    static isKeySizeValid(arg0: int): boolean
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                }
                abstract class AESWrapCipher extends javax.crypto.CipherSpi {
                    public constructor(arg0: int)
                    protected engineSetMode(arg0: java.lang.String): void
                    protected engineSetPadding(arg0: java.lang.String): void
                    protected engineGetBlockSize(): int
                    protected engineGetOutputSize(arg0: int): int
                    protected engineGetIV(): byte[]
                    engineInit<T>(...args: any[]): any
                    engineUpdate<T>(...args: any[]): any
                    engineDoFinal<T>(...args: any[]): any
                    protected engineGetParameters(): java.security.AlgorithmParameters
                    protected engineGetKeySize(arg0: java.security.Key): int
                    protected engineWrap(arg0: java.security.Key): byte[]
                    protected engineUnwrap(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class CipherFeedback extends com.sun.crypto.provider.FeedbackCipher {
                    constructor(arg0: com.sun.crypto.provider.SymmetricCipher, arg1: int)
                    getFeedback(): java.lang.String
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class DESedeParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class CipherForKeyProtector extends javax.crypto.Cipher {
                    protected constructor(arg0: javax.crypto.CipherSpi, arg1: java.security.Provider, arg2: java.lang.String)
                }
                class EncryptedPrivateKeyInfo {
                    constructor(...args: any[])
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
                    getFeedback(): java.lang.String
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                class PBEParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class SealedObjectForKeyProtector extends javax.crypto.SealedObject {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    getParameters(): java.security.AlgorithmParameters
                }
                class ConstructKeys {
                    constructor()
                    static constructKey(arg0: byte[], arg1: java.lang.String, arg2: int): java.security.Key
                }
                class HmacSHA1 extends com.sun.crypto.provider.HmacCore {
                    public constructor()
                    public clone(): java.lang.Object
                }
                class DHPublicKey implements java.security.PublicKey , javax.crypto.interfaces.DHPublicKey , java.io.Serializable {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    public getFormat(): java.lang.String
                    public getAlgorithm(): java.lang.String
                    public getEncoded(): byte[]
                    public getY(): java.math.BigInteger
                    public getParams(): javax.crypto.spec.DHParameterSpec
                    toString<T>(...args: any[]): any
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                }
                class PBKDF2KeyImpl implements javax.crypto.interfaces.PBEKey {
                    static serialVersionUID: long
                    constructor(arg0: javax.crypto.spec.PBEKeySpec, arg1: java.lang.String)
                    public getEncoded(): byte[]
                    public getAlgorithm(): java.lang.String
                    public getIterationCount(): int
                    public getPassword(): char[]
                    public getSalt(): byte[]
                    public getFormat(): java.lang.String
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                abstract class PBKDF2Core extends javax.crypto.SecretKeyFactorySpi {
                    constructor(arg0: java.lang.String)
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                }
                abstract class PBMAC1Core extends com.sun.crypto.provider.HmacCore {
                    constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                }
                interface DESConstants {
                    DES_BLOCK_SIZE: int
                }
                class DESCrypt extends com.sun.crypto.provider.SymmetricCipher implements com.sun.crypto.provider.DESConstants {
                    expandedKey: byte[]
                    decrypting: boolean
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
                    encryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    decryptBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    cipherBlock(arg0: byte[], arg1: int, arg2: byte[], arg3: int): void
                    expandKey(arg0: byte[]): void
                }
                class BlowfishKeyGenerator extends javax.crypto.KeyGeneratorSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGenerateKey(): javax.crypto.SecretKey
                }
                class PBEKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(arg0: javax.crypto.spec.PBEKeySpec, arg1: java.lang.String)
                    public getEncoded(): byte[]
                    public getAlgorithm(): java.lang.String
                    public getFormat(): java.lang.String
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
                    engineInit<T>(...args: any[]): any
                    protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                    engineGenerateSecret<T>(...args: any[]): any
                }
                class PBKDF2HmacSHA1Factory extends javax.crypto.SecretKeyFactorySpi {
                    public constructor()
                    protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                    protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                    protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                }
                class BlockCipherParamsCore {
                    constructor(arg0: int)
                    init<T>(...args: any[]): any
                    getParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    getEncoded<T>(...args: any[]): any
                    toString<T>(...args: any[]): any
                }
                class DESParameters extends java.security.AlgorithmParametersSpi {
                    public constructor()
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                class DESKey implements javax.crypto.SecretKey {
                    static serialVersionUID: long
                    constructor(...args: any[])
                    public getEncoded(): byte[]
                    public getAlgorithm(): java.lang.String
                    public getFormat(): java.lang.String
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    protected finalize(): void
                }
                abstract class PBES2Parameters extends java.security.AlgorithmParametersSpi {
                    constructor(...args: any[])
                    engineInit<T>(...args: any[]): any
                    protected engineGetParameterSpec<T extends java.security.spec.AlgorithmParameterSpec>(arg0: java.lang.Class<T>): T
                    engineGetEncoded<T>(...args: any[]): any
                    protected engineToString<T extends java.security.spec.AlgorithmParameterSpec>(): java.lang.String
                }
                abstract class SymmetricCipher {
                    constructor()
                    getBlockSize(): int
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[]): void
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
                    getFeedback(): java.lang.String
                    save(): void
                    restore(): void
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
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
                    getFeedback(): java.lang.String
                    init(arg0: boolean, arg1: java.lang.String, arg2: byte[], arg3: byte[]): void
                    reset(): void
                    save(): void
                    restore(): void
                    encrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                    decrypt(arg0: byte[], arg1: int, arg2: int, arg3: byte[], arg4: int): int
                }
                abstract class HmacCore extends javax.crypto.MacSpi implements java.lang.Cloneable {
                    constructor(...args: any[])
                    protected engineGetMacLength(): int
                    protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                    engineUpdate<T>(...args: any[]): any
                    protected engineDoFinal(): byte[]
                    protected engineReset(): void
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
