declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                abstract class ConfigurationSpi {
                    public constructor()
                    protected abstract engineGetAppConfigurationEntry(arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                    protected engineRefresh(): void
                    public static class: java.lang.Class<any>
                }
                interface ConfigurationSpi$$Lambda {
                    (arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                }
            }
        }
    }
}