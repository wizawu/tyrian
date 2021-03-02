declare namespace javax {
  namespace security {
    namespace auth {
      namespace login {

        abstract class ConfigurationSpi {
          public constructor()
          protected abstract engineGetAppConfigurationEntry(arg0: java.lang.String): javax.security.auth.login.AppConfigurationEntry[]
          protected engineRefresh(): void
        }

      }
    }
  }
}
