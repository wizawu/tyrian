declare namespace javax {
    namespace security {
        namespace auth {
            namespace spi {
                interface LoginModule {
                    initialize(arg0: javax.security.auth.Subject, arg1: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda, arg2: java.util.Map<java.lang.String, any>, arg3: java.util.Map<java.lang.String, any>): void
                    login(): boolean
                    commit(): boolean
                    abort(): boolean
                    logout(): boolean
                }
            }
        }
    }
}