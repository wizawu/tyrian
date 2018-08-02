declare namespace java {
    namespace security {
abstract class KeyStore$Builder {
    protected constructor()
    public getKeyStore(): java.security.KeyStore
    public getProtectionParameter(arg0: java.lang.String | string): java.security.KeyStore$ProtectionParameter
    public static newInstance(arg0: java.security.KeyStore, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
    public static newInstance(arg0: java.lang.String | string, arg1: java.security.Provider, arg2: java.io.File, arg3: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
    public static newInstance(arg0: java.lang.String | string, arg1: java.security.Provider, arg2: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
    public static class: java.lang.Class<any>
}

    }
}