declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
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
            }
        }
    }
}