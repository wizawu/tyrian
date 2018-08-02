declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_ECDH1_DERIVE_PARAMS {
                    public kdf: long
                    public pSharedData: byte[]
                    public pPublicData: byte[]
                    public constructor(arg0: long, arg1: byte[], arg2: byte[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}