declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_TLS12_MASTER_KEY_DERIVE_PARAMS {
                    public RandomInfo: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA
                    public pVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public prfHashMechanism: long
                    public constructor(arg0: sun.security.pkcs11.wrapper.CK_SSL3_RANDOM_DATA, arg1: sun.security.pkcs11.wrapper.CK_VERSION, arg2: long)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}