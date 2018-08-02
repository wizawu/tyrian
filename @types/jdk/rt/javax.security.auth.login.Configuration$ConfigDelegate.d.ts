declare namespace javax {
    namespace security {
        namespace auth {
            namespace login {
                class Configuration$ConfigDelegate extends javax.security.auth.login.Configuration {
                    public getType(): string
                    public getParameters(): javax.security.auth.login.Configuration$Parameters
                    public getProvider(): java.security.Provider
                    public getAppConfigurationEntry(arg0: java.lang.String | string): javax.security.auth.login.AppConfigurationEntry[]
                    public refresh(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}