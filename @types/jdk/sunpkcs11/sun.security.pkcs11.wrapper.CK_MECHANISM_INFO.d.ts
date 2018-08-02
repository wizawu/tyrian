declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_MECHANISM_INFO {
                    public ulMinKeySize: long
                    public ulMaxKeySize: long
                    public flags: long
                    public constructor(arg0: long, arg1: long, arg2: long)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}