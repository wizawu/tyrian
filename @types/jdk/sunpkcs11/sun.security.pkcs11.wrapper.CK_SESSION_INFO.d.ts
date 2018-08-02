declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
class CK_SESSION_INFO {
    public slotID: long
    public state: long
    public flags: long
    public ulDeviceError: long
    public constructor(arg0: long, arg1: long, arg2: long, arg3: long)
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}