declare namespace java {
  namespace security {

    abstract class AuthProvider extends java.security.Provider {

      protected constructor(arg0: java.lang.String, arg1: double, arg2: java.lang.String)
      protected constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
      public abstract login(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler): void
      public abstract logout(): void
      public abstract setCallbackHandler(arg0: javax.security.auth.callback.CallbackHandler): void
    }

  }
}
