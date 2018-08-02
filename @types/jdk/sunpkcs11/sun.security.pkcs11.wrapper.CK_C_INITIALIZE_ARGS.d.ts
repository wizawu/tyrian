declare namespace sun {
    namespace security {
        namespace pkcs11 {
            namespace wrapper {
class CK_C_INITIALIZE_ARGS {
    public CreateMutex: sun.security.pkcs11.wrapper.CK_CREATEMUTEX
    public DestroyMutex: sun.security.pkcs11.wrapper.CK_DESTROYMUTEX
    public LockMutex: sun.security.pkcs11.wrapper.CK_LOCKMUTEX
    public UnlockMutex: sun.security.pkcs11.wrapper.CK_UNLOCKMUTEX
    public flags: long
    public pReserved: java.lang.Object
    public constructor()
    public static class: java.lang.Class<any>
}

            }
        }
    }
}