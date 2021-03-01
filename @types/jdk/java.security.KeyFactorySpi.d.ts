declare namespace java {
  namespace security {

    abstract class KeyFactorySpi {

      public constructor()
      protected abstract engineGeneratePublic(arg0: java.security.spec.KeySpec): java.security.PublicKey
      protected abstract engineGeneratePrivate(arg0: java.security.spec.KeySpec): java.security.PrivateKey
      protected abstract engineGetKeySpec<T extends java.security.spec.KeySpec>(arg0: java.security.Key, arg1: java.lang.Class<T>): T
      protected abstract engineTranslateKey(arg0: java.security.Key): java.security.Key
    }

  }
}
