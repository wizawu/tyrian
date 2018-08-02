declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_TLS_PRF_PARAMS {
                    public pSeed: byte[]
                    public pLabel: byte[]
                    public pOutput: byte[]
                    public constructor(arg0: byte[], arg1: byte[], arg2: byte[])
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}