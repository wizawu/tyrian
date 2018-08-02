declare namespace javax {
    namespace security {
        namespace sasl {
            interface SaslServerFactory {
                createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
            }
        }
    }
}