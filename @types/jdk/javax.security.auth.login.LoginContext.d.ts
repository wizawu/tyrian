declare namespace javax {
  namespace security {
    namespace auth {
      namespace login {
        class LoginContext {
          public constructor(arg0: java.lang.String | string)
          public constructor(arg0: java.lang.String | string, arg1: javax.security.auth.Subject)
          public constructor(
            arg0: java.lang.String | string,
            arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda
          )
          public constructor(
            arg0: java.lang.String | string,
            arg1: javax.security.auth.Subject,
            arg2: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda
          )
          public constructor(
            arg0: java.lang.String | string,
            arg1: javax.security.auth.Subject,
            arg2: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda,
            arg3: javax.security.auth.login.Configuration
          )
          public login(): void
          public logout(): void
          public getSubject(): javax.security.auth.Subject
        }
      }
    }
  }
}
