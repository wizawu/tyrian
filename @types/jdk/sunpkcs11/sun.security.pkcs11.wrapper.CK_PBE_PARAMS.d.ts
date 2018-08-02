declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
class CK_PBE_PARAMS {
    public pInitVector: char[]
    public pPassword: char[]
    public pSalt: char[]
    public ulIteration: long
    public constructor()
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}