declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
                class CK_TOKEN_INFO {
                    public label: char[]
                    public manufacturerID: char[]
                    public model: char[]
                    public serialNumber: char[]
                    public flags: long
                    public ulMaxSessionCount: long
                    public ulSessionCount: long
                    public ulMaxRwSessionCount: long
                    public ulRwSessionCount: long
                    public ulMaxPinLen: long
                    public ulMinPinLen: long
                    public ulTotalPublicMemory: long
                    public ulFreePublicMemory: long
                    public ulTotalPrivateMemory: long
                    public ulFreePrivateMemory: long
                    public hardwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public firmwareVersion: sun.security.pkcs11.wrapper.CK_VERSION
                    public utcTime: char[]
                    public constructor(arg0: char[], arg1: char[], arg2: char[], arg3: char[], arg4: long, arg5: long, arg6: long, arg7: long, arg8: long, arg9: long, arg10: long, arg11: long, arg12: long, arg13: long, arg14: long, arg15: sun.security.pkcs11.wrapper.CK_VERSION, arg16: sun.security.pkcs11.wrapper.CK_VERSION, arg17: char[])
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}