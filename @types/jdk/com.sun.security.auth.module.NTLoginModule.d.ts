declare namespace com {
  namespace sun {
    namespace security {
      namespace auth {
        namespace module {

          class NTLoginModule implements javax.security.auth.spi.LoginModule {
            public constructor()
            public initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda, arg2: java.util.Map<java.lang.String,unknown>, arg3: java.util.Map<java.lang.String,unknown>): void
            public login(): boolean
            public commit(): boolean
            public abort(): boolean
            public logout(): boolean
          }

        }
      }
    }
  }
}
