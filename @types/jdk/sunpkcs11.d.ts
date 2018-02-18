declare namespace sun {
    namespace security {
        namespace pkcs11 {
            class P11Key$P11ECPrivateKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.ECPrivateKey {
                public getFormat(): string
                public getS(): java.math.BigInteger
                public getParams(): java.security.spec.ECParameterSpec
            }
            class SunPKCS11 extends java.security.AuthProvider {
                public constructor()
                public constructor(arg0: string)
                public constructor(arg0: java.io.InputStream)
                public constructor(arg0: string, arg1: java.io.InputStream)
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public login(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
                public logout(): void
                public setCallbackHandler(arg0: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): void
                public static class: java.lang.Class<any>
            }
            abstract class P11Key implements java.security.Key , sun.security.util.Length {
                public getAlgorithm(): string
                public getEncoded(): byte[]
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                protected writeReplace(): java.lang.Object
                public toString(): string
                public length(): int
                public static class: java.lang.Class<any>
            }
            abstract class P11Key$$Lambda implements java.security.Key , sun.security.util.Length {
                public (): string
            }
            class KeyCache {
                public static class: java.lang.Class<any>
            }
            abstract class P11KeyFactory extends java.security.KeyFactorySpi {
                protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
                protected engineTranslateKey(arg0: java.security.Key): java.security.Key
                public static class: java.lang.Class<any>
            }
            class P11Mac extends javax.crypto.MacSpi {
                protected engineGetMacLength(): int
                protected engineReset(): void
                protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec): void
                protected engineDoFinal(): byte[]
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                public static class: java.lang.Class<any>
            }
            class P11SecretKeyFactory extends javax.crypto.SecretKeyFactorySpi {
                protected engineGenerateSecret(arg0: java.security.spec.KeySpec): javax.crypto.SecretKey
                protected engineGetKeySpec(arg0: javax.crypto.SecretKey, arg1: java.lang.Class<any>): java.security.spec.KeySpec
                protected engineTranslateKey(arg0: javax.crypto.SecretKey): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class Secmod$KeyStoreLoadParameter implements java.security.KeyStore$LoadStoreParameter {
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: char[])
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: java.security.KeyStore$ProtectionParameter)
                public getProtectionParameter(): java.security.KeyStore$ProtectionParameter
                public getTrustType(): sun.security.pkcs11.Secmod$TrustType
                public static class: java.lang.Class<any>
            }
            class Secmod$KeyStoreLoadParameter$$Lambda implements java.security.KeyStore$LoadStoreParameter {
                public constructor(arg0: sun.security.pkcs11.Secmod$TrustType, arg1: char[])
            }
            class ConfigurationException extends java.io.IOException {
                public static class: java.lang.Class<any>
            }
            class SessionManager$Pool {
                public static class: java.lang.Class<any>
            }
            class P11Key$P11DSAPrivateKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.DSAPrivateKey {
                public getFormat(): string
                public getX(): java.math.BigInteger
                public getParams(): java.security.interfaces.DSAParams
            }
            class P11Key$P11DSAPublicKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.DSAPublicKey {
                public getFormat(): string
                public getY(): java.math.BigInteger
                public getParams(): java.security.interfaces.DSAParams
                public toString(): string
            }
            class P11Key$P11DHPrivateKey extends sun.security.pkcs11.P11Key implements javax.crypto.interfaces.DHPrivateKey {
                public getFormat(): string
                public getX(): java.math.BigInteger
                public getParams(): javax.crypto.spec.DHParameterSpec
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
            }
            class P11TlsKeyMaterialGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class P11KeyGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class Secmod$Module {
                public getConfiguration(): string
                public setConfiguration(arg0: string): void
                public getLibraryName(): string
                public getType(): sun.security.pkcs11.Secmod$ModuleType
                public getProvider(): java.security.Provider
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class P11KeyStore$PasswordCallbackHandler implements javax.security.auth.callback.CallbackHandler {
                public handle(arg0: javax.security.auth.callback.Callback[]): void
                protected finalize(): void
                public static class: java.lang.Class<any>
            }
            class P11KeyStore$PasswordCallbackHandler$$Lambda implements javax.security.auth.callback.CallbackHandler {
                public (arg0: javax.security.auth.callback.Callback[]): void
            }
            class Config {
                public getNssNetscapeDbWorkaround(): boolean
                public static class: java.lang.Class<any>
            }
            class Token implements java.io.Serializable {
                public static class: java.lang.Class<any>
            }
            class Secmod$TrustType extends java.lang.Enum<sun.security.pkcs11.Secmod$TrustType> {
                public static ALL: sun.security.pkcs11.Secmod$TrustType
                public static CLIENT_AUTH: sun.security.pkcs11.Secmod$TrustType
                public static SERVER_AUTH: sun.security.pkcs11.Secmod$TrustType
                public static CODE_SIGNING: sun.security.pkcs11.Secmod$TrustType
                public static EMAIL_PROTECTION: sun.security.pkcs11.Secmod$TrustType
                public static values(): sun.security.pkcs11.Secmod$TrustType[]
                public static valueOf(arg0: string): sun.security.pkcs11.Secmod$TrustType
                public static class: java.lang.Class<any>
            }
            class P11RSACipher extends javax.crypto.CipherSpi {
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
            class P11Digest extends java.security.MessageDigestSpi implements java.lang.Cloneable {
                protected engineGetDigestLength(): int
                protected engineReset(): void
                protected engineDigest(): byte[]
                protected engineDigest(arg0: byte[], arg1: int, arg2: int): int
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected implUpdate(arg0: javax.crypto.SecretKey): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SunPKCS11$TokenPoller implements java.lang.Runnable {
                public run(): void
                public static class: java.lang.Class<any>
            }
            class SunPKCS11$TokenPoller$$Lambda implements java.lang.Runnable {
                public (): void
            }
            class P11ECKeyFactory extends sun.security.pkcs11.P11KeyFactory {
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            namespace wrapper {
                interface CK_NOTIFY {
                    CK_NOTIFY(arg0: long, arg1: long, arg2: java.lang.Object): void
                }
                interface CK_NOTIFY$$Lambda {
                    (arg0: long, arg1: long, arg2: java.lang.Object): void
                }
                interface CK_UNLOCKMUTEX {
                    CK_UNLOCKMUTEX(arg0: java.lang.Object): void
                }
                interface CK_UNLOCKMUTEX$$Lambda {
                    (arg0: java.lang.Object): void
                }
                class CK_C_INITIALIZE_ARGS {
                    public CreateMutex: sun.security.pkcs11.wrapper.CK_CREATEMUTEX
                    public DestroyMutex: sun.security.pkcs11.wrapper.CK_DESTROYMUTEX
                    public LockMutex: sun.security.pkcs11.wrapper.CK_LOCKMUTEX
                    public UnlockMutex: sun.security.pkcs11.wrapper.CK_UNLOCKMUTEX
                    public flags: long
                    public pReserved: java.lang.Object
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class CK_SSL3_RANDOM_DATA {
                    public pClientRandom: byte[]
                    public pServerRandom: byte[]
                    public constructor(arg0: byte[], arg1: byte[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface CK_LOCKMUTEX {
                    CK_LOCKMUTEX(arg0: java.lang.Object): void
                }
                interface CK_LOCKMUTEX$$Lambda {
                    (arg0: java.lang.Object): void
                }
                class CK_ECDH2_DERIVE_PARAMS {
                    public kdf: long
                    public pSharedData: byte[]
                    public pPublicData: byte[]
                    public ulPrivateDataLen: long
                    public hPrivateData: long
                    public pPublicData2: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_ECDH1_DERIVE_PARAMS {
                    public kdf: long
                    public pSharedData: byte[]
                    public pPublicData: byte[]
                    public constructor(arg0: long, arg1: byte[], arg2: byte[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Constants {
                    public static NEWLINE: string
                    public static INDENT: string
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class CK_X9_42_DH2_DERIVE_PARAMS {
                    public kdf: long
                    public pOtherInfo: byte[]
                    public pPublicData: byte[]
                    public ulPrivateDataLen: long
                    public hPrivateData: long
                    public pPublicData2: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Functions$Flags {
                    public static class: java.lang.Class<any>
                }
                class CK_SSL3_KEY_MAT_OUT {
                    public hClientMacSecret: long
                    public hServerMacSecret: long
                    public hClientKey: long
                    public hServerKey: long
                    public pIVClient: byte[]
                    public pIVServer: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_MECHANISM_INFO {
                    public ulMinKeySize: long
                    public ulMaxKeySize: long
                    public flags: long
                    public constructor(arg0: long, arg1: long, arg2: long)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_PKCS5_PBKD2_PARAMS {
                    public saltSource: long
                    public pSaltSourceData: byte[]
                    public iterations: long
                    public prf: long
                    public pPrfData: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_SSL3_KEY_MAT_PARAMS {
                    public ulMacSizeInBits: long
                    public ulKeySizeInBits: long
                    public ulIVSizeInBits: long
                    public bIsExport: boolean
                    public RandomInfo: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA
                    public pReturnedKeyMaterial: sun.security.pkcs11.wrapper.CK_SSL3_KEY_MAT_OUT
                    public constructor(arg0: int, arg1: int, arg2: int, arg3: boolean, arg4: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class PKCS11$SynchronizedPKCS11 extends sun.security.pkcs11.wrapper.PKCS11 {
                    public C_Finalize(arg0: java.lang.Object): void
                    public C_GetInfo(): sun.security.pkcs11.wrapper.CK_INFO
                    public C_GetSlotList(arg0: boolean): long[]
                    public C_GetSlotInfo(arg0: long): sun.security.pkcs11.wrapper.CK_SLOT_INFO
                    public C_GetTokenInfo(arg0: long): sun.security.pkcs11.wrapper.CK_TOKEN_INFO
                    public C_GetMechanismList(arg0: long): long[]
                    public C_GetMechanismInfo(arg0: long, arg1: long): sun.security.pkcs11.wrapper.CK_MECHANISM_INFO
                    public C_OpenSession(arg0: long, arg1: long, arg2: java.lang.Object, arg3: sun.security.pkcs11.wrapper.CK_NOTIFY | sun.security.pkcs11.wrapper.CK_NOTIFY$$Lambda): long
                    public C_CloseSession(arg0: long): void
                    public C_GetSessionInfo(arg0: long): sun.security.pkcs11.wrapper.CK_SESSION_INFO
                    public C_Login(arg0: long, arg1: long, arg2: char[]): void
                    public C_Logout(arg0: long): void
                    public C_CreateObject(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_CopyObject(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_DestroyObject(arg0: long, arg1: long): void
                    public C_GetAttributeValue(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_SetAttributeValue(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_FindObjectsInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_FindObjects(arg0: long, arg1: long): long[]
                    public C_FindObjectsFinal(arg0: long): void
                    public C_EncryptInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Encrypt(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_EncryptUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: long, arg6: byte[], arg7: int, arg8: int): int
                    public C_EncryptFinal(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): int
                    public C_DecryptInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Decrypt(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_DecryptUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: long, arg6: byte[], arg7: int, arg8: int): int
                    public C_DecryptFinal(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): int
                    public C_DigestInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM): void
                    public C_DigestSingle(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: byte[], arg3: int, arg4: int, arg5: byte[], arg6: int, arg7: int): int
                    public C_DigestUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_DigestKey(arg0: long, arg1: long): void
                    public C_DigestFinal(arg0: long, arg1: byte[], arg2: int, arg3: int): int
                    public C_SignInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Sign(arg0: long, arg1: byte[]): byte[]
                    public C_SignUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_SignFinal(arg0: long, arg1: int): byte[]
                    public C_SignRecoverInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_SignRecover(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_VerifyInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Verify(arg0: long, arg1: byte[], arg2: byte[]): void
                    public C_VerifyUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_VerifyFinal(arg0: long, arg1: byte[]): void
                    public C_VerifyRecoverInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_VerifyRecover(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_GenerateKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_GenerateKeyPair(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[], arg3: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long[]
                    public C_WrapKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: long): byte[]
                    public C_UnwrapKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: byte[], arg4: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_DeriveKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_SeedRandom(arg0: long, arg1: byte[]): void
                    public C_GenerateRandom(arg0: long, arg1: byte[]): void
                    public static class: java.lang.Class<any>
                }
                class CK_PBE_PARAMS {
                    public pInitVector: char[]
                    public pPassword: char[]
                    public pSalt: char[]
                    public ulIteration: long
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class PKCS11 {
                    public static loadNative(): void
                    public static getInstance(arg0: string, arg1: string, arg2: sun.security.pkcs11.wrapper.CK_C_INITIALIZE_ARGS, arg3: boolean): sun.security.pkcs11.wrapper.PKCS11
                    public C_Finalize(arg0: java.lang.Object): void
                    public C_GetInfo(): sun.security.pkcs11.wrapper.CK_INFO
                    public C_GetSlotList(arg0: boolean): long[]
                    public C_GetSlotInfo(arg0: long): sun.security.pkcs11.wrapper.CK_SLOT_INFO
                    public C_GetTokenInfo(arg0: long): sun.security.pkcs11.wrapper.CK_TOKEN_INFO
                    public C_GetMechanismList(arg0: long): long[]
                    public C_GetMechanismInfo(arg0: long, arg1: long): sun.security.pkcs11.wrapper.CK_MECHANISM_INFO
                    public C_OpenSession(arg0: long, arg1: long, arg2: java.lang.Object, arg3: sun.security.pkcs11.wrapper.CK_NOTIFY | sun.security.pkcs11.wrapper.CK_NOTIFY$$Lambda): long
                    public C_CloseSession(arg0: long): void
                    public C_GetSessionInfo(arg0: long): sun.security.pkcs11.wrapper.CK_SESSION_INFO
                    public C_GetOperationState(arg0: long): byte[]
                    public C_SetOperationState(arg0: long, arg1: byte[], arg2: long, arg3: long): void
                    public C_Login(arg0: long, arg1: long, arg2: char[]): void
                    public C_Logout(arg0: long): void
                    public C_CreateObject(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_CopyObject(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_DestroyObject(arg0: long, arg1: long): void
                    public C_GetAttributeValue(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_SetAttributeValue(arg0: long, arg1: long, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_FindObjectsInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): void
                    public C_FindObjects(arg0: long, arg1: long): long[]
                    public C_FindObjectsFinal(arg0: long): void
                    public C_EncryptInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Encrypt(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_EncryptUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: long, arg6: byte[], arg7: int, arg8: int): int
                    public C_EncryptFinal(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): int
                    public C_DecryptInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Decrypt(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_DecryptUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int, arg5: long, arg6: byte[], arg7: int, arg8: int): int
                    public C_DecryptFinal(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): int
                    public C_DigestInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM): void
                    public C_DigestSingle(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: byte[], arg3: int, arg4: int, arg5: byte[], arg6: int, arg7: int): int
                    public C_DigestUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_DigestKey(arg0: long, arg1: long): void
                    public C_DigestFinal(arg0: long, arg1: byte[], arg2: int, arg3: int): int
                    public C_SignInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Sign(arg0: long, arg1: byte[]): byte[]
                    public C_SignUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_SignFinal(arg0: long, arg1: int): byte[]
                    public C_SignRecoverInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_SignRecover(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_VerifyInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_Verify(arg0: long, arg1: byte[], arg2: byte[]): void
                    public C_VerifyUpdate(arg0: long, arg1: long, arg2: byte[], arg3: int, arg4: int): void
                    public C_VerifyFinal(arg0: long, arg1: byte[]): void
                    public C_VerifyRecoverInit(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long): void
                    public C_VerifyRecover(arg0: long, arg1: byte[], arg2: int, arg3: int, arg4: byte[], arg5: int, arg6: int): int
                    public C_GenerateKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_GenerateKeyPair(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[], arg3: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long[]
                    public C_WrapKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: long): byte[]
                    public C_UnwrapKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: byte[], arg4: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_DeriveKey(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_MECHANISM, arg2: long, arg3: sun.security.pkcs11.wrapper.CK_ATTRIBUTE[]): long
                    public C_SeedRandom(arg0: long, arg1: byte[]): void
                    public C_GenerateRandom(arg0: long, arg1: byte[]): void
                    public toString(): string
                    protected finalize(): void
                    public static class: java.lang.Class<any>
                }
                class CK_VERSION {
                    public major: byte
                    public minor: byte
                    public constructor(arg0: int, arg1: int)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface PKCS11Constants {
                    TRUE: boolean
                    FALSE: boolean
                    NULL_PTR: java.lang.Object
                    CK_UNAVAILABLE_INFORMATION: long
                    CK_EFFECTIVELY_INFINITE: long
                    CK_INVALID_HANDLE: long
                    CKN_SURRENDER: long
                    CKF_TOKEN_PRESENT: long
                    CKF_REMOVABLE_DEVICE: long
                    CKF_HW_SLOT: long
                    CKF_RNG: long
                    CKF_WRITE_PROTECTED: long
                    CKF_LOGIN_REQUIRED: long
                    CKF_USER_PIN_INITIALIZED: long
                    CKF_RESTORE_KEY_NOT_NEEDED: long
                    CKF_CLOCK_ON_TOKEN: long
                    CKF_PROTECTED_AUTHENTICATION_PATH: long
                    CKF_DUAL_CRYPTO_OPERATIONS: long
                    CKF_TOKEN_INITIALIZED: long
                    CKF_SECONDARY_AUTHENTICATION: long
                    CKF_USER_PIN_COUNT_LOW: long
                    CKF_USER_PIN_FINAL_TRY: long
                    CKF_USER_PIN_LOCKED: long
                    CKF_USER_PIN_TO_BE_CHANGED: long
                    CKF_SO_PIN_COUNT_LOW: long
                    CKF_SO_PIN_FINAL_TRY: long
                    CKF_SO_PIN_LOCKED: long
                    CKF_SO_PIN_TO_BE_CHANGED: long
                    CKU_SO: long
                    CKU_USER: long
                    CKS_RO_PUBLIC_SESSION: long
                    CKS_RO_USER_FUNCTIONS: long
                    CKS_RW_PUBLIC_SESSION: long
                    CKS_RW_USER_FUNCTIONS: long
                    CKS_RW_SO_FUNCTIONS: long
                    CKF_RW_SESSION: long
                    CKF_SERIAL_SESSION: long
                    CKO_DATA: long
                    CKO_CERTIFICATE: long
                    CKO_PUBLIC_KEY: long
                    CKO_PRIVATE_KEY: long
                    CKO_SECRET_KEY: long
                    CKO_HW_FEATURE: long
                    CKO_DOMAIN_PARAMETERS: long
                    CKO_VENDOR_DEFINED: long
                    PCKO_ANY: long
                    CKH_MONOTONIC_COUNTER: long
                    CKH_CLOCK: long
                    CKH_VENDOR_DEFINED: long
                    CKK_RSA: long
                    CKK_DSA: long
                    CKK_DH: long
                    CKK_ECDSA: long
                    CKK_EC: long
                    CKK_X9_42_DH: long
                    CKK_KEA: long
                    CKK_GENERIC_SECRET: long
                    CKK_RC2: long
                    CKK_RC4: long
                    CKK_DES: long
                    CKK_DES2: long
                    CKK_DES3: long
                    CKK_CAST: long
                    CKK_CAST3: long
                    CKK_CAST5: long
                    CKK_CAST128: long
                    CKK_RC5: long
                    CKK_IDEA: long
                    CKK_SKIPJACK: long
                    CKK_BATON: long
                    CKK_JUNIPER: long
                    CKK_CDMF: long
                    CKK_AES: long
                    CKK_BLOWFISH: long
                    CKK_VENDOR_DEFINED: long
                    PCKK_ANY: long
                    PCKK_HMAC: long
                    PCKK_SSLMAC: long
                    PCKK_TLSPREMASTER: long
                    PCKK_TLSRSAPREMASTER: long
                    PCKK_TLSMASTER: long
                    CKC_X_509: long
                    CKC_X_509_ATTR_CERT: long
                    CKC_VENDOR_DEFINED: long
                    CKA_CLASS: long
                    CKA_TOKEN: long
                    CKA_PRIVATE: long
                    CKA_LABEL: long
                    CKA_APPLICATION: long
                    CKA_VALUE: long
                    CKA_OBJECT_ID: long
                    CKA_CERTIFICATE_TYPE: long
                    CKA_ISSUER: long
                    CKA_SERIAL_NUMBER: long
                    CKA_AC_ISSUER: long
                    CKA_OWNER: long
                    CKA_ATTR_TYPES: long
                    CKA_TRUSTED: long
                    CKA_KEY_TYPE: long
                    CKA_SUBJECT: long
                    CKA_ID: long
                    CKA_SENSITIVE: long
                    CKA_ENCRYPT: long
                    CKA_DECRYPT: long
                    CKA_WRAP: long
                    CKA_UNWRAP: long
                    CKA_SIGN: long
                    CKA_SIGN_RECOVER: long
                    CKA_VERIFY: long
                    CKA_VERIFY_RECOVER: long
                    CKA_DERIVE: long
                    CKA_START_DATE: long
                    CKA_END_DATE: long
                    CKA_MODULUS: long
                    CKA_MODULUS_BITS: long
                    CKA_PUBLIC_EXPONENT: long
                    CKA_PRIVATE_EXPONENT: long
                    CKA_PRIME_1: long
                    CKA_PRIME_2: long
                    CKA_EXPONENT_1: long
                    CKA_EXPONENT_2: long
                    CKA_COEFFICIENT: long
                    CKA_PRIME: long
                    CKA_SUBPRIME: long
                    CKA_BASE: long
                    CKA_PRIME_BITS: long
                    CKA_SUB_PRIME_BITS: long
                    CKA_VALUE_BITS: long
                    CKA_VALUE_LEN: long
                    CKA_EXTRACTABLE: long
                    CKA_LOCAL: long
                    CKA_NEVER_EXTRACTABLE: long
                    CKA_ALWAYS_SENSITIVE: long
                    CKA_KEY_GEN_MECHANISM: long
                    CKA_MODIFIABLE: long
                    CKA_ECDSA_PARAMS: long
                    CKA_EC_PARAMS: long
                    CKA_EC_POINT: long
                    CKA_SECONDARY_AUTH: long
                    CKA_AUTH_PIN_FLAGS: long
                    CKA_HW_FEATURE_TYPE: long
                    CKA_RESET_ON_INIT: long
                    CKA_HAS_RESET: long
                    CKA_VENDOR_DEFINED: long
                    CKM_RSA_PKCS_KEY_PAIR_GEN: long
                    CKM_RSA_PKCS: long
                    CKM_RSA_9796: long
                    CKM_RSA_X_509: long
                    CKM_MD2_RSA_PKCS: long
                    CKM_MD5_RSA_PKCS: long
                    CKM_SHA1_RSA_PKCS: long
                    CKM_RIPEMD128_RSA_PKCS: long
                    CKM_RIPEMD160_RSA_PKCS: long
                    CKM_RSA_PKCS_OAEP: long
                    CKM_RSA_X9_31_KEY_PAIR_GEN: long
                    CKM_RSA_X9_31: long
                    CKM_SHA1_RSA_X9_31: long
                    CKM_RSA_PKCS_PSS: long
                    CKM_SHA1_RSA_PKCS_PSS: long
                    CKM_DSA_KEY_PAIR_GEN: long
                    CKM_DSA: long
                    CKM_DSA_SHA1: long
                    CKM_DH_PKCS_KEY_PAIR_GEN: long
                    CKM_DH_PKCS_DERIVE: long
                    CKM_X9_42_DH_KEY_PAIR_GEN: long
                    CKM_X9_42_DH_DERIVE: long
                    CKM_X9_42_DH_HYBRID_DERIVE: long
                    CKM_X9_42_MQV_DERIVE: long
                    CKM_SHA256_RSA_PKCS: long
                    CKM_SHA384_RSA_PKCS: long
                    CKM_SHA512_RSA_PKCS: long
                    CKM_RC2_KEY_GEN: long
                    CKM_RC2_ECB: long
                    CKM_RC2_CBC: long
                    CKM_RC2_MAC: long
                    CKM_RC2_MAC_GENERAL: long
                    CKM_RC2_CBC_PAD: long
                    CKM_RC4_KEY_GEN: long
                    CKM_RC4: long
                    CKM_DES_KEY_GEN: long
                    CKM_DES_ECB: long
                    CKM_DES_CBC: long
                    CKM_DES_MAC: long
                    CKM_DES_MAC_GENERAL: long
                    CKM_DES_CBC_PAD: long
                    CKM_DES2_KEY_GEN: long
                    CKM_DES3_KEY_GEN: long
                    CKM_DES3_ECB: long
                    CKM_DES3_CBC: long
                    CKM_DES3_MAC: long
                    CKM_DES3_MAC_GENERAL: long
                    CKM_DES3_CBC_PAD: long
                    CKM_CDMF_KEY_GEN: long
                    CKM_CDMF_ECB: long
                    CKM_CDMF_CBC: long
                    CKM_CDMF_MAC: long
                    CKM_CDMF_MAC_GENERAL: long
                    CKM_CDMF_CBC_PAD: long
                    CKM_MD2: long
                    CKM_MD2_HMAC: long
                    CKM_MD2_HMAC_GENERAL: long
                    CKM_MD5: long
                    CKM_MD5_HMAC: long
                    CKM_MD5_HMAC_GENERAL: long
                    CKM_SHA_1: long
                    CKM_SHA_1_HMAC: long
                    CKM_SHA_1_HMAC_GENERAL: long
                    CKM_RIPEMD128: long
                    CKM_RIPEMD128_HMAC: long
                    CKM_RIPEMD128_HMAC_GENERAL: long
                    CKM_RIPEMD160: long
                    CKM_RIPEMD160_HMAC: long
                    CKM_RIPEMD160_HMAC_GENERAL: long
                    CKM_SHA256: long
                    CKM_SHA256_HMAC: long
                    CKM_SHA256_HMAC_GENERAL: long
                    CKM_SHA384: long
                    CKM_SHA384_HMAC: long
                    CKM_SHA384_HMAC_GENERAL: long
                    CKM_SHA512: long
                    CKM_SHA512_HMAC: long
                    CKM_SHA512_HMAC_GENERAL: long
                    CKM_CAST_KEY_GEN: long
                    CKM_CAST_ECB: long
                    CKM_CAST_CBC: long
                    CKM_CAST_MAC: long
                    CKM_CAST_MAC_GENERAL: long
                    CKM_CAST_CBC_PAD: long
                    CKM_CAST3_KEY_GEN: long
                    CKM_CAST3_ECB: long
                    CKM_CAST3_CBC: long
                    CKM_CAST3_MAC: long
                    CKM_CAST3_MAC_GENERAL: long
                    CKM_CAST3_CBC_PAD: long
                    CKM_CAST5_KEY_GEN: long
                    CKM_CAST128_KEY_GEN: long
                    CKM_CAST5_ECB: long
                    CKM_CAST128_ECB: long
                    CKM_CAST5_CBC: long
                    CKM_CAST128_CBC: long
                    CKM_CAST5_MAC: long
                    CKM_CAST128_MAC: long
                    CKM_CAST5_MAC_GENERAL: long
                    CKM_CAST128_MAC_GENERAL: long
                    CKM_CAST5_CBC_PAD: long
                    CKM_CAST128_CBC_PAD: long
                    CKM_RC5_KEY_GEN: long
                    CKM_RC5_ECB: long
                    CKM_RC5_CBC: long
                    CKM_RC5_MAC: long
                    CKM_RC5_MAC_GENERAL: long
                    CKM_RC5_CBC_PAD: long
                    CKM_IDEA_KEY_GEN: long
                    CKM_IDEA_ECB: long
                    CKM_IDEA_CBC: long
                    CKM_IDEA_MAC: long
                    CKM_IDEA_MAC_GENERAL: long
                    CKM_IDEA_CBC_PAD: long
                    CKM_GENERIC_SECRET_KEY_GEN: long
                    CKM_CONCATENATE_BASE_AND_KEY: long
                    CKM_CONCATENATE_BASE_AND_DATA: long
                    CKM_CONCATENATE_DATA_AND_BASE: long
                    CKM_XOR_BASE_AND_DATA: long
                    CKM_EXTRACT_KEY_FROM_KEY: long
                    CKM_SSL3_PRE_MASTER_KEY_GEN: long
                    CKM_SSL3_MASTER_KEY_DERIVE: long
                    CKM_SSL3_KEY_AND_MAC_DERIVE: long
                    CKM_SSL3_MASTER_KEY_DERIVE_DH: long
                    CKM_TLS_PRE_MASTER_KEY_GEN: long
                    CKM_TLS_MASTER_KEY_DERIVE: long
                    CKM_TLS_KEY_AND_MAC_DERIVE: long
                    CKM_TLS_MASTER_KEY_DERIVE_DH: long
                    CKM_TLS_PRF: long
                    CKM_SSL3_MD5_MAC: long
                    CKM_SSL3_SHA1_MAC: long
                    CKM_MD5_KEY_DERIVATION: long
                    CKM_MD2_KEY_DERIVATION: long
                    CKM_SHA1_KEY_DERIVATION: long
                    CKM_SHA256_KEY_DERIVATION: long
                    CKM_SHA384_KEY_DERIVATION: long
                    CKM_SHA512_KEY_DERIVATION: long
                    CKM_PBE_MD2_DES_CBC: long
                    CKM_PBE_MD5_DES_CBC: long
                    CKM_PBE_MD5_CAST_CBC: long
                    CKM_PBE_MD5_CAST3_CBC: long
                    CKM_PBE_MD5_CAST5_CBC: long
                    CKM_PBE_MD5_CAST128_CBC: long
                    CKM_PBE_SHA1_CAST5_CBC: long
                    CKM_PBE_SHA1_CAST128_CBC: long
                    CKM_PBE_SHA1_RC4_128: long
                    CKM_PBE_SHA1_RC4_40: long
                    CKM_PBE_SHA1_DES3_EDE_CBC: long
                    CKM_PBE_SHA1_DES2_EDE_CBC: long
                    CKM_PBE_SHA1_RC2_128_CBC: long
                    CKM_PBE_SHA1_RC2_40_CBC: long
                    CKM_PKCS5_PBKD2: long
                    CKM_PBA_SHA1_WITH_SHA1_HMAC: long
                    CKM_KEY_WRAP_LYNKS: long
                    CKM_KEY_WRAP_SET_OAEP: long
                    CKM_SKIPJACK_KEY_GEN: long
                    CKM_SKIPJACK_ECB64: long
                    CKM_SKIPJACK_CBC64: long
                    CKM_SKIPJACK_OFB64: long
                    CKM_SKIPJACK_CFB64: long
                    CKM_SKIPJACK_CFB32: long
                    CKM_SKIPJACK_CFB16: long
                    CKM_SKIPJACK_CFB8: long
                    CKM_SKIPJACK_WRAP: long
                    CKM_SKIPJACK_PRIVATE_WRAP: long
                    CKM_SKIPJACK_RELAYX: long
                    CKM_KEA_KEY_PAIR_GEN: long
                    CKM_KEA_KEY_DERIVE: long
                    CKM_FORTEZZA_TIMESTAMP: long
                    CKM_BATON_KEY_GEN: long
                    CKM_BATON_ECB128: long
                    CKM_BATON_ECB96: long
                    CKM_BATON_CBC128: long
                    CKM_BATON_COUNTER: long
                    CKM_BATON_SHUFFLE: long
                    CKM_BATON_WRAP: long
                    CKM_ECDSA_KEY_PAIR_GEN: long
                    CKM_EC_KEY_PAIR_GEN: long
                    CKM_ECDSA: long
                    CKM_ECDSA_SHA1: long
                    CKM_ECDH1_DERIVE: long
                    CKM_ECDH1_COFACTOR_DERIVE: long
                    CKM_ECMQV_DERIVE: long
                    CKM_JUNIPER_KEY_GEN: long
                    CKM_JUNIPER_ECB128: long
                    CKM_JUNIPER_CBC128: long
                    CKM_JUNIPER_COUNTER: long
                    CKM_JUNIPER_SHUFFLE: long
                    CKM_JUNIPER_WRAP: long
                    CKM_FASTHASH: long
                    CKM_AES_KEY_GEN: long
                    CKM_AES_ECB: long
                    CKM_AES_CBC: long
                    CKM_AES_MAC: long
                    CKM_AES_MAC_GENERAL: long
                    CKM_AES_CBC_PAD: long
                    CKM_BLOWFISH_KEY_GEN: long
                    CKM_BLOWFISH_CBC: long
                    CKM_DSA_PARAMETER_GEN: long
                    CKM_DH_PKCS_PARAMETER_GEN: long
                    CKM_X9_42_DH_PARAMETER_GEN: long
                    CKM_VENDOR_DEFINED: long
                    CKM_SHA224: long
                    CKM_SHA224_HMAC: long
                    CKM_SHA224_HMAC_GENERAL: long
                    CKM_SHA224_KEY_DERIVATION: long
                    CKM_SHA224_RSA_PKCS: long
                    CKM_SHA224_RSA_PKCS_PSS: long
                    CKM_AES_CTR: long
                    CKM_NSS_TLS_PRF_GENERAL: long
                    PCKM_SECURERANDOM: long
                    PCKM_KEYSTORE: long
                    CKF_HW: long
                    CKF_ENCRYPT: long
                    CKF_DECRYPT: long
                    CKF_DIGEST: long
                    CKF_SIGN: long
                    CKF_SIGN_RECOVER: long
                    CKF_VERIFY: long
                    CKF_VERIFY_RECOVER: long
                    CKF_GENERATE: long
                    CKF_GENERATE_KEY_PAIR: long
                    CKF_WRAP: long
                    CKF_UNWRAP: long
                    CKF_DERIVE: long
                    CKF_EC_F_P: long
                    CKF_EC_F_2M: long
                    CKF_EC_ECPARAMETERS: long
                    CKF_EC_NAMEDCURVE: long
                    CKF_EC_UNCOMPRESS: long
                    CKF_EC_COMPRESS: long
                    CKF_EXTENSION: long
                    CKR_OK: long
                    CKR_CANCEL: long
                    CKR_HOST_MEMORY: long
                    CKR_SLOT_ID_INVALID: long
                    CKR_GENERAL_ERROR: long
                    CKR_FUNCTION_FAILED: long
                    CKR_ARGUMENTS_BAD: long
                    CKR_NO_EVENT: long
                    CKR_NEED_TO_CREATE_THREADS: long
                    CKR_CANT_LOCK: long
                    CKR_ATTRIBUTE_READ_ONLY: long
                    CKR_ATTRIBUTE_SENSITIVE: long
                    CKR_ATTRIBUTE_TYPE_INVALID: long
                    CKR_ATTRIBUTE_VALUE_INVALID: long
                    CKR_DATA_INVALID: long
                    CKR_DATA_LEN_RANGE: long
                    CKR_DEVICE_ERROR: long
                    CKR_DEVICE_MEMORY: long
                    CKR_DEVICE_REMOVED: long
                    CKR_ENCRYPTED_DATA_INVALID: long
                    CKR_ENCRYPTED_DATA_LEN_RANGE: long
                    CKR_FUNCTION_CANCELED: long
                    CKR_FUNCTION_NOT_PARALLEL: long
                    CKR_FUNCTION_NOT_SUPPORTED: long
                    CKR_KEY_HANDLE_INVALID: long
                    CKR_KEY_SIZE_RANGE: long
                    CKR_KEY_TYPE_INCONSISTENT: long
                    CKR_KEY_NOT_NEEDED: long
                    CKR_KEY_CHANGED: long
                    CKR_KEY_NEEDED: long
                    CKR_KEY_INDIGESTIBLE: long
                    CKR_KEY_FUNCTION_NOT_PERMITTED: long
                    CKR_KEY_NOT_WRAPPABLE: long
                    CKR_KEY_UNEXTRACTABLE: long
                    CKR_MECHANISM_INVALID: long
                    CKR_MECHANISM_PARAM_INVALID: long
                    CKR_OBJECT_HANDLE_INVALID: long
                    CKR_OPERATION_ACTIVE: long
                    CKR_OPERATION_NOT_INITIALIZED: long
                    CKR_PIN_INCORRECT: long
                    CKR_PIN_INVALID: long
                    CKR_PIN_LEN_RANGE: long
                    CKR_PIN_EXPIRED: long
                    CKR_PIN_LOCKED: long
                    CKR_SESSION_CLOSED: long
                    CKR_SESSION_COUNT: long
                    CKR_SESSION_HANDLE_INVALID: long
                    CKR_SESSION_PARALLEL_NOT_SUPPORTED: long
                    CKR_SESSION_READ_ONLY: long
                    CKR_SESSION_EXISTS: long
                    CKR_SESSION_READ_ONLY_EXISTS: long
                    CKR_SESSION_READ_WRITE_SO_EXISTS: long
                    CKR_SIGNATURE_INVALID: long
                    CKR_SIGNATURE_LEN_RANGE: long
                    CKR_TEMPLATE_INCOMPLETE: long
                    CKR_TEMPLATE_INCONSISTENT: long
                    CKR_TOKEN_NOT_PRESENT: long
                    CKR_TOKEN_NOT_RECOGNIZED: long
                    CKR_TOKEN_WRITE_PROTECTED: long
                    CKR_UNWRAPPING_KEY_HANDLE_INVALID: long
                    CKR_UNWRAPPING_KEY_SIZE_RANGE: long
                    CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT: long
                    CKR_USER_ALREADY_LOGGED_IN: long
                    CKR_USER_NOT_LOGGED_IN: long
                    CKR_USER_PIN_NOT_INITIALIZED: long
                    CKR_USER_TYPE_INVALID: long
                    CKR_USER_ANOTHER_ALREADY_LOGGED_IN: long
                    CKR_USER_TOO_MANY_TYPES: long
                    CKR_WRAPPED_KEY_INVALID: long
                    CKR_WRAPPED_KEY_LEN_RANGE: long
                    CKR_WRAPPING_KEY_HANDLE_INVALID: long
                    CKR_WRAPPING_KEY_SIZE_RANGE: long
                    CKR_WRAPPING_KEY_TYPE_INCONSISTENT: long
                    CKR_RANDOM_SEED_NOT_SUPPORTED: long
                    CKR_RANDOM_NO_RNG: long
                    CKR_DOMAIN_PARAMS_INVALID: long
                    CKR_BUFFER_TOO_SMALL: long
                    CKR_SAVED_STATE_INVALID: long
                    CKR_INFORMATION_SENSITIVE: long
                    CKR_STATE_UNSAVEABLE: long
                    CKR_CRYPTOKI_NOT_INITIALIZED: long
                    CKR_CRYPTOKI_ALREADY_INITIALIZED: long
                    CKR_MUTEX_BAD: long
                    CKR_MUTEX_NOT_LOCKED: long
                    CKR_VENDOR_DEFINED: long
                    CKF_LIBRARY_CANT_CREATE_OS_THREADS: long
                    CKF_OS_LOCKING_OK: long
                    CKF_DONT_BLOCK: long
                    CKG_MGF1_SHA1: long
                    CKG_MGF1_SHA224: long
                    CKZ_DATA_SPECIFIED: long
                    CKP_PKCS5_PBKD2_HMAC_SHA1: long
                    CKZ_SALT_SPECIFIED: long
                    CKD_NULL: long
                    CKD_SHA1_KDF: long
                    CKD_SHA1_KDF_ASN1: long
                    CKD_SHA1_KDF_CONCATENATE: long
                    CKA_NETSCAPE_DB: long
                    CKA_NETSCAPE_BASE: long
                    CKO_NETSCAPE_TRUST: long
                    CKA_NETSCAPE_TRUST_BASE: long
                    CKA_NETSCAPE_TRUST_SERVER_AUTH: long
                    CKA_NETSCAPE_TRUST_CLIENT_AUTH: long
                    CKA_NETSCAPE_TRUST_CODE_SIGNING: long
                    CKA_NETSCAPE_TRUST_EMAIL_PROTECTION: long
                    CKA_NETSCAPE_CERT_SHA1_HASH: long
                    CKA_NETSCAPE_CERT_MD5_HASH: long
                    CKT_NETSCAPE_TRUSTED: long
                    CKT_NETSCAPE_TRUSTED_DELEGATOR: long
                    CKT_NETSCAPE_UNTRUSTED: long
                    CKT_NETSCAPE_MUST_VERIFY: long
                    CKT_NETSCAPE_TRUST_UNKNOWN: long
                    CKT_NETSCAPE_VALID: long
                    CKT_NETSCAPE_VALID_DELEGATOR: long
                }
                class CK_SESSION_INFO {
                    public slotID: long
                    public state: long
                    public flags: long
                    public ulDeviceError: long
                    public constructor(arg0: long, arg1: long, arg2: long, arg3: long)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_RSA_PKCS_PSS_PARAMS {
                    public hashAlg: long
                    public mgf: long
                    public sLen: long
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface CK_CREATEMUTEX {
                    CK_CREATEMUTEX(): java.lang.Object
                }
                interface CK_CREATEMUTEX$$Lambda {
                    (): java.lang.Object
                }
                class PKCS11$1 implements java.security.PrivilegedAction<java.lang.Object> {
                    public run(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class CK_SLOT_INFO {
                    public slotDescription: char[]
                    public manufacturerID: char[]
                    public flags: long
                    public hardwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public firmwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public constructor(arg0: char[], arg1: char[], arg2: long, arg3: sun.security.pkcs11.wrapper.CK_VERSION, arg4: sun.security.pkcs11.wrapper.CK_VERSION)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class PKCS11RuntimeException extends java.lang.RuntimeException {
                    public constructor()
                    public constructor(arg0: string)
                    public constructor(arg0: java.lang.Exception)
                    public constructor(arg0: string, arg1: java.lang.Exception)
                    public static class: java.lang.Class<any>
                }
                class CK_DATE implements java.lang.Cloneable {
                    public year: char[]
                    public month: char[]
                    public day: char[]
                    public constructor(arg0: char[], arg1: char[], arg2: char[])
                    public clone(): java.lang.Object
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_ATTRIBUTE {
                    public static TOKEN_FALSE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static SENSITIVE_FALSE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static EXTRACTABLE_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static ENCRYPT_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static DECRYPT_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static WRAP_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static UNWRAP_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static SIGN_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static VERIFY_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static SIGN_RECOVER_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static VERIFY_RECOVER_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static DERIVE_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static ENCRYPT_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static DECRYPT_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static WRAP_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static UNWRAP_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public type: long
                    public pValue: java.lang.Object
                    public constructor()
                    public constructor(arg0: long)
                    public constructor(arg0: long, arg1: java.lang.Object)
                    public constructor(arg0: long, arg1: boolean)
                    public constructor(arg0: long, arg1: long)
                    public constructor(arg0: long, arg1: java.math.BigInteger)
                    public getBigInteger(): java.math.BigInteger
                    public getBoolean(): boolean
                    public getCharArray(): char[]
                    public getByteArray(): byte[]
                    public getLong(): long
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_X9_42_DH1_DERIVE_PARAMS {
                    public kdf: long
                    public pOtherInfo: byte[]
                    public pPublicData: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_TLS_PRF_PARAMS {
                    public pSeed: byte[]
                    public pLabel: byte[]
                    public pOutput: byte[]
                    public constructor(arg0: byte[], arg1: byte[], arg2: byte[])
                    public static class: java.lang.Class<any>
                }
                class PKCS11Exception extends java.lang.Exception {
                    protected errorCode_: long
                    public constructor(arg0: long)
                    public getMessage(): string
                    public getErrorCode(): long
                    public static class: java.lang.Class<any>
                }
                class CK_RSA_PKCS_OAEP_PARAMS {
                    public hashAlg: long
                    public mgf: long
                    public source: long
                    public pSourceData: byte[]
                    public constructor()
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                interface CK_DESTROYMUTEX {
                    CK_DESTROYMUTEX(arg0: java.lang.Object): void
                }
                interface CK_DESTROYMUTEX$$Lambda {
                    (arg0: java.lang.Object): void
                }
                class CK_INFO {
                    public cryptokiVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public manufacturerID: char[]
                    public flags: long
                    public libraryDescription: char[]
                    public libraryVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public constructor(arg0: sun.security.pkcs11.wrapper.CK_VERSION, arg1: char[], arg2: long, arg3: char[], arg4: sun.security.pkcs11.wrapper.CK_VERSION)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Functions {
                    public constructor()
                    public static toFullHexString(arg0: long): string
                    public static toFullHexString(arg0: int): string
                    public static toHexString(arg0: long): string
                    public static toHexString(arg0: byte[]): string
                    public static toBinaryString(arg0: long): string
                    public static toBinaryString(arg0: byte[]): string
                    public static slotInfoFlagsToString(arg0: long): string
                    public static tokenInfoFlagsToString(arg0: long): string
                    public static sessionInfoFlagsToString(arg0: long): string
                    public static sessionStateToString(arg0: long): string
                    public static mechanismInfoFlagsToString(arg0: long): string
                    public static getId(arg0: java.util.Map<java.lang.String, java.lang.Integer>, arg1: string): long
                    public static getMechanismName(arg0: long): string
                    public static getMechanismId(arg0: string): long
                    public static getKeyName(arg0: long): string
                    public static getKeyId(arg0: string): long
                    public static getAttributeName(arg0: long): string
                    public static getAttributeId(arg0: string): long
                    public static getObjectClassName(arg0: long): string
                    public static getObjectClassId(arg0: string): long
                    public static equals(arg0: sun.security.pkcs11.wrapper.CK_DATE, arg1: sun.security.pkcs11.wrapper.CK_DATE): boolean
                    public static hashCode(arg0: byte[]): int
                    public static hashCode(arg0: char[]): int
                    public static hashCode(arg0: sun.security.pkcs11.wrapper.CK_DATE): int
                    public static class: java.lang.Class<any>
                }
                class CK_MECHANISM {
                    public mechanism: long
                    public pParameter: java.lang.Object
                    public constructor()
                    public constructor(arg0: long)
                    public constructor(arg0: long, arg1: byte[])
                    public constructor(arg0: long, arg1: java.math.BigInteger)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_VERSION)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_SSL3_MASTER_KEY_DERIVE_PARAMS)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_SSL3_KEY_MAT_PARAMS)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_TLS_PRF_PARAMS)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_ECDH1_DERIVE_PARAMS)
                    public constructor(arg0: long, arg1: java.lang.Long)
                    public constructor(arg0: long, arg1: sun.security.pkcs11.wrapper.CK_AES_CTR_PARAMS)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_AES_CTR_PARAMS {
                    public constructor(arg0: byte[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_TOKEN_INFO {
                    public label: char[]
                    public manufacturerID: char[]
                    public model: char[]
                    public serialNumber: char[]
                    public flags: long
                    public ulMaxSessionCount: long
                    public ulSessionCount: long
                    public ulMaxRwSessionCount: long
                    public ulRwSessionCount: long
                    public ulMaxPinLen: long
                    public ulMinPinLen: long
                    public ulTotalPublicMemory: long
                    public ulFreePublicMemory: long
                    public ulTotalPrivateMemory: long
                    public ulFreePrivateMemory: long
                    public hardwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public firmwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public utcTime: char[]
                    public constructor(arg0: char[], arg1: char[], arg2: char[], arg3: char[], arg4: long, arg5: long, arg6: long, arg7: long, arg8: long, arg9: long, arg10: long, arg11: long, arg12: long, arg13: long, arg14: long, arg15: sun.security.pkcs11.wrapper.CK_VERSION, arg16: sun.security.pkcs11.wrapper.CK_VERSION, arg17: char[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class CK_SSL3_MASTER_KEY_DERIVE_PARAMS {
                    public RandomInfo: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA
                    public pVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public constructor(arg0: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA, arg1: sun.security.pkcs11.wrapper.CK_VERSION)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
            class SunPKCS11$SunPKCS11Rep implements java.io.Serializable {
                public static class: java.lang.Class<any>
            }
            class P11KeyPairGenerator extends java.security.KeyPairGeneratorSpi {
                public initialize(arg0: int, arg1: java.security.SecureRandom): void
                public initialize(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                public generateKeyPair(): java.security.KeyPair
                public static class: java.lang.Class<any>
            }
            class P11KeyStore$THandle {
                public static class: java.lang.Class<any>
            }
            class P11Key$P11DHPublicKey extends sun.security.pkcs11.P11Key implements javax.crypto.interfaces.DHPublicKey {
                public getFormat(): string
                public getY(): java.math.BigInteger
                public getParams(): javax.crypto.spec.DHParameterSpec
                public toString(): string
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
            }
            class P11KeyStore extends java.security.KeyStoreSpi {
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
                public engineStore(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: char[]): void
                public engineStore(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter): void
                public engineLoad(arg0: java.io.InputStream, arg1: char[]): void
                public engineLoad(arg0: java.security.KeyStore$LoadStoreParameter | java.security.KeyStore$LoadStoreParameter): void
                public engineGetEntry(arg0: string, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry
                public engineSetEntry(arg0: string, arg1: java.security.KeyStore$Entry | java.security.KeyStore$Entry, arg2: java.security.KeyStore$ProtectionParameter): void
                public engineEntryInstanceOf(arg0: string, arg1: java.lang.Class<java.security.KeyStore$Entry>): boolean
                public static class: java.lang.Class<any>
            }
            class P11DHKeyFactory extends sun.security.pkcs11.P11KeyFactory {
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            class ConstructKeys {
                public static class: java.lang.Class<any>
            }
            class P11ECDHKeyAgreement extends javax.crypto.KeyAgreementSpi {
                protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
                protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                protected engineGenerateSecret(): byte[]
                protected engineGenerateSecret(arg0: byte[], arg1: int): int
                protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class Session implements java.lang.Comparable<sun.security.pkcs11.Session> {
                public compareTo(arg0: sun.security.pkcs11.Session): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class Secmod$DbMode extends java.lang.Enum<sun.security.pkcs11.Secmod$DbMode> {
                public static READ_WRITE: sun.security.pkcs11.Secmod$DbMode
                public static READ_ONLY: sun.security.pkcs11.Secmod$DbMode
                public static NO_DB: sun.security.pkcs11.Secmod$DbMode
                public static values(): sun.security.pkcs11.Secmod$DbMode[]
                public static valueOf(arg0: string): sun.security.pkcs11.Secmod$DbMode
                public static class: java.lang.Class<any>
            }
            class SunPKCS11$Descriptor {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class P11KeyStore$AliasInfo {
                public constructor(arg0: string)
                public constructor(arg0: string, arg1: byte[], arg2: boolean, arg3: java.security.cert.X509Certificate)
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class Secmod$Bytes {
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public static class: java.lang.Class<any>
            }
            class P11SecureRandom extends java.security.SecureRandomSpi {
                protected engineSetSeed(arg0: byte[]): void
                protected engineNextBytes(arg0: byte[]): void
                protected engineGenerateSeed(arg0: int): byte[]
                public static class: java.lang.Class<any>
            }
            class SessionKeyRef extends java.lang.ref.PhantomReference<sun.security.pkcs11.P11Key> implements java.lang.Comparable<sun.security.pkcs11.SessionKeyRef> {
                public compareTo(arg0: sun.security.pkcs11.SessionKeyRef): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class P11TlsMasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class SessionRef extends java.lang.ref.PhantomReference<sun.security.pkcs11.Session> implements java.lang.Comparable<sun.security.pkcs11.SessionRef> {
                public compareTo(arg0: sun.security.pkcs11.SessionRef): int
                public compareTo(arg0: java.lang.Object): int
                public static class: java.lang.Class<any>
            }
            class P11Key$P11RSAPrivateKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.RSAPrivateCrtKey {
                public getFormat(): string
                public getModulus(): java.math.BigInteger
                public getPublicExponent(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
                public getPrimeP(): java.math.BigInteger
                public getPrimeQ(): java.math.BigInteger
                public getPrimeExponentP(): java.math.BigInteger
                public getPrimeExponentQ(): java.math.BigInteger
                public getCrtCoefficient(): java.math.BigInteger
            }
            class P11Util {
                public static getMagnitude(arg0: java.math.BigInteger): byte[]
                public static class: java.lang.Class<any>
            }
            class P11Cipher$PKCS5Padding implements sun.security.pkcs11.P11Cipher$Padding {
                public setPaddingBytes(arg0: byte[], arg1: int): int
                public unpad(arg0: byte[], arg1: int): int
                public static class: java.lang.Class<any>
            }
            class P11KeyStore$1 {
                public static class: java.lang.Class<any>
            }
            class Secmod$ModuleType extends java.lang.Enum<sun.security.pkcs11.Secmod$ModuleType> {
                public static CRYPTO: sun.security.pkcs11.Secmod$ModuleType
                public static KEYSTORE: sun.security.pkcs11.Secmod$ModuleType
                public static FIPS: sun.security.pkcs11.Secmod$ModuleType
                public static TRUSTANCHOR: sun.security.pkcs11.Secmod$ModuleType
                public static EXTERNAL: sun.security.pkcs11.Secmod$ModuleType
                public static values(): sun.security.pkcs11.Secmod$ModuleType[]
                public static valueOf(arg0: string): sun.security.pkcs11.Secmod$ModuleType
                public static class: java.lang.Class<any>
            }
            class P11Key$P11TlsMasterSecretKey extends sun.security.pkcs11.P11Key$P11SecretKey implements sun.security.internal.interfaces.TlsMasterSecret {
                public getMajorVersion(): int
                public getMinorVersion(): int
            }
            class SunPKCS11$1 implements java.security.PrivilegedAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class SessionManager {
                public static class: java.lang.Class<any>
            }
            class P11Key$P11ECPublicKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.ECPublicKey {
                public getFormat(): string
                public getW(): java.security.spec.ECPoint
                public getParams(): java.security.spec.ECParameterSpec
                public toString(): string
            }
            class P11Key$P11SecretKey extends sun.security.pkcs11.P11Key implements javax.crypto.SecretKey {
                public getFormat(): string
                public static class: java.lang.Class<any>
            }
            class TemplateManager$Template {
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class P11ECUtil {
                public static class: java.lang.Class<any>
            }
            class TemplateManager$KeyAndTemplate {
                public static class: java.lang.Class<any>
            }
            class P11TlsPrfGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class P11Cipher extends javax.crypto.CipherSpi {
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
                public static class: java.lang.Class<any>
            }
            class TemplateManager$TemplateKey {
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class P11Key$P11PrivateKey extends sun.security.pkcs11.P11Key implements java.security.PrivateKey {
                public getFormat(): string
                public static class: java.lang.Class<any>
            }
            class Secmod$1 {
                public static class: java.lang.Class<any>
            }
            class KeyCache$IdentityWrapper {
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            class Token$TokenRep implements java.io.Serializable {
                public static class: java.lang.Class<any>
            }
            class P11DSAKeyFactory extends sun.security.pkcs11.P11KeyFactory {
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            class P11TlsPrfGenerator$1 implements javax.crypto.SecretKey {
                public getEncoded(): byte[]
                public getFormat(): string
                public getAlgorithm(): string
                public static class: java.lang.Class<any>
            }
            class SunPKCS11$3 implements java.security.PrivilegedExceptionAction<javax.security.auth.callback.CallbackHandler> {
                public run(): javax.security.auth.callback.CallbackHandler
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class P11KeyAgreement extends javax.crypto.KeyAgreementSpi {
                protected engineInit(arg0: java.security.Key, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.Key, arg1: java.security.spec.AlgorithmParameterSpec, arg2: java.security.SecureRandom): void
                protected engineDoPhase(arg0: java.security.Key, arg1: boolean): java.security.Key
                protected engineGenerateSecret(): byte[]
                protected engineGenerateSecret(arg0: byte[], arg1: int): int
                protected engineGenerateSecret(arg0: string): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class TemplateManager {
                public static class: java.lang.Class<any>
            }
            class P11Key$P11RSAPrivateNonCRTKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.RSAPrivateKey {
                public getFormat(): string
                public getModulus(): java.math.BigInteger
                public getPrivateExponent(): java.math.BigInteger
            }
            interface P11Cipher$Padding {
                setPaddingBytes(arg0: byte[], arg1: int): int
                unpad(arg0: byte[], arg1: int): int
            }
            class SunPKCS11$2 implements java.security.PrivilegedAction<java.lang.Object> {
                public run(): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class Secmod {
                public static getInstance(): sun.security.pkcs11.Secmod
                public isInitialized(): boolean
                public initialize(arg0: string, arg1: string): void
                public initialize(arg0: sun.security.pkcs11.Secmod$DbMode, arg1: string, arg2: string): void
                public initialize(arg0: sun.security.pkcs11.Secmod$DbMode, arg1: string, arg2: string, arg3: boolean): void
                public getModules(): java.util.List<sun.security.pkcs11.Secmod$Module>
                public getModule(arg0: sun.security.pkcs11.Secmod$ModuleType): sun.security.pkcs11.Secmod$Module
                public static class: java.lang.Class<any>
            }
            class Secmod$TrustAttributes {
                public static class: java.lang.Class<any>
            }
            class P11TlsRsaPremasterSecretGenerator extends javax.crypto.KeyGeneratorSpi {
                protected engineInit(arg0: java.security.SecureRandom): void
                protected engineInit(arg0: java.security.spec.AlgorithmParameterSpec, arg1: java.security.SecureRandom): void
                protected engineInit(arg0: int, arg1: java.security.SecureRandom): void
                protected engineGenerateKey(): javax.crypto.SecretKey
                public static class: java.lang.Class<any>
            }
            class SunPKCS11$P11Service extends java.security.Provider$Service {
                public newInstance(arg0: java.lang.Object): java.lang.Object
                public newInstance0(arg0: java.lang.Object): java.lang.Object
                public supportsParameter(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class P11Key$P11RSAPublicKey extends sun.security.pkcs11.P11Key implements java.security.interfaces.RSAPublicKey {
                public getFormat(): string
                public getModulus(): java.math.BigInteger
                public getPublicExponent(): java.math.BigInteger
                public toString(): string
            }
            class P11RSAKeyFactory extends sun.security.pkcs11.P11KeyFactory {
                protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
                protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
                public static class: java.lang.Class<any>
            }
            class P11Signature extends java.security.SignatureSpi {
                protected engineInitVerify(arg0: java.security.PublicKey): void
                protected engineInitSign(arg0: java.security.PrivateKey): void
                protected engineUpdate(arg0: byte): void
                protected engineUpdate(arg0: byte[], arg1: int, arg2: int): void
                protected engineUpdate(arg0: java.nio.ByteBuffer): void
                protected engineSign(): byte[]
                protected engineVerify(arg0: byte[]): boolean
                protected engineSetParameter(arg0: string, arg1: java.lang.Object): void
                protected engineGetParameter(arg0: string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}
