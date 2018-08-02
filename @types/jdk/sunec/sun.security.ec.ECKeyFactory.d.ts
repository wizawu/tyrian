declare namespace sun {
    namespace security {
        namespace ec {
class ECKeyFactory extends java.security.KeyFactorySpi {
    public constructor()
    public static toECKey(arg0: java.security.Key): java.security.interfaces.ECKey
    protected engineTranslateKey(arg0: java.security.Key): java.security.Key
    protected engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
    protected engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
    protected engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
    public static class: java.lang.Class<any>
}

        }
    }
}