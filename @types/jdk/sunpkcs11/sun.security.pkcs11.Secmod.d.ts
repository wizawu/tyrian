declare namespace sun {
    namespace security {
        namespace pkcs11 {
class Secmod {
    public static getInstance(): sun.security.pkcs11.Secmod
    public isInitialized(): boolean
    public initialize(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public initialize(arg0: sun.security.pkcs11.Secmod$DbMode, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public initialize(arg0: sun.security.pkcs11.Secmod$DbMode, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean): void
    public getModules(): java.util.List<sun.security.pkcs11.Secmod$Module>
    public getModule(arg0: sun.security.pkcs11.Secmod$ModuleType): sun.security.pkcs11.Secmod$Module
    public static class: java.lang.Class<any>
}

        }
    }
}