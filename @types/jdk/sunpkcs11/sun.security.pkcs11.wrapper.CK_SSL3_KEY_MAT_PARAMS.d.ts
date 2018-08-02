declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
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
            }
        }
    }
}