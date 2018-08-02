declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_INFO {
                    public cryptokiVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public manufacturerID: char[]
                    public flags: long
                    public libraryDescription: char[]
                    public libraryVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public constructor(arg0: sun.security.pkcs11.wrapper.CK_VERSION, arg1: char[], arg2: long, arg3: char[], arg4: sun.security.pkcs11.wrapper.CK_VERSION)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}