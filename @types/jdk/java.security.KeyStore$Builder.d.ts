declare namespace java {
  namespace security {

    abstract class KeyStore$Builder {
      static readonly MAX_CALLBACK_TRIES: int
      protected constructor()
      public abstract getKeyStore(): java.security.KeyStore
      public abstract getProtectionParameter(arg0: java.lang.String): java.security.KeyStore$ProtectionParameter
      public static newInstance(arg0: java.security.KeyStore, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
      public static newInstance(arg0: java.lang.String, arg1: java.security.Provider, arg2: java.io.File, arg3: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
      public static newInstance(arg0: java.io.File, arg1: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
      public static newInstance(arg0: java.lang.String, arg1: java.security.Provider, arg2: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Builder
    }

  }
}
