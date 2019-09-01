declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_TLS_MAC_PARAMS {
                    public prfMechanism: long
                    public ulMacLength: long
                    public ulServerOrClient: long
                    public constructor(arg0: long, arg1: long, arg2: long)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}