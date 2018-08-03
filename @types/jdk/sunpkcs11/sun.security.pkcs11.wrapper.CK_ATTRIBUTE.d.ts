declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_ATTRIBUTE {
                    public static readonly TOKEN_FALSE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly SENSITIVE_FALSE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly EXTRACTABLE_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly ENCRYPT_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly DECRYPT_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly WRAP_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly UNWRAP_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly SIGN_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly VERIFY_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly SIGN_RECOVER_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly VERIFY_RECOVER_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly DERIVE_TRUE: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly ENCRYPT_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly DECRYPT_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly WRAP_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
                    public static readonly UNWRAP_NULL: sun.security.pkcs11.wrapper.CK_ATTRIBUTE
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
            }
        }
    }
}