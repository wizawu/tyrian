declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_SLOT_INFO {
                    public slotDescription: char[]
                    public manufacturerID: char[]
                    public flags: long
                    public hardwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public firmwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public constructor(arg0: char[], arg1: char[], arg2: long, arg3: sun.security.pkcs11.wrapper.CK_VERSION, arg4: sun.security.pkcs11.wrapper.CK_VERSION)
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}