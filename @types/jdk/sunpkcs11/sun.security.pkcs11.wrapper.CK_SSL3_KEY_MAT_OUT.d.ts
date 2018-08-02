declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
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
            }
        }
    }
}