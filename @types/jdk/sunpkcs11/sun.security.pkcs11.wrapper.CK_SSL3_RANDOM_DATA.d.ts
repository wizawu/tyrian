declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_SSL3_RANDOM_DATA {
                    public pClientRandom: byte[]
                    public pServerRandom: byte[]
                    public constructor(arg0: byte[], arg1: byte[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}