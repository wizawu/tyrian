declare namespace javax {
  namespace security {
    namespace auth {
      namespace login {

        class LoginContext {

          public constructor(arg0: java.lang.String)
          public constructor(arg0: java.lang.String, arg1: javax.security.auth.Subject)
          public constructor(arg0: java.lang.String, arg1: javax.security.auth.callback.CallbackHandler)
          public constructor(arg0: java.lang.String, arg1: javax.security.auth.Subject, arg2: javax.security.auth.callback.CallbackHandler)
          public constructor(arg0: java.lang.String, arg1: javax.security.auth.Subject, arg2: javax.security.auth.callback.CallbackHandler, arg3: javax.security.auth.login.Configuration)
          public login(): void
          public logout(): void
          public getSubject(): javax.security.auth.Subject
        }

      }
    }
  }
}
