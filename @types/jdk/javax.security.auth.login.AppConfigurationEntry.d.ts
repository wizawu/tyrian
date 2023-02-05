declare namespace javax {
  namespace security {
    namespace auth {
      namespace login {
        class AppConfigurationEntry {
          public constructor(
            arg0: java.lang.String | string,
            arg1: javax.security.auth.login.AppConfigurationEntry$LoginModuleControlFlag,
            arg2: java.util.Map<java.lang.String, unknown>
          )
          public getLoginModuleName(): java.lang.String
          public getControlFlag(): javax.security.auth.login.AppConfigurationEntry$LoginModuleControlFlag
          public getOptions(): java.util.Map<java.lang.String, unknown>
        }
      }
    }
  }
}
