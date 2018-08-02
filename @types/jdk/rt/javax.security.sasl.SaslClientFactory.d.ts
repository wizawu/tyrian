declare namespace javax {
    namespace security {
        namespace sasl {
interface SaslClientFactory {
    createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
    getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
}

        }
    }
}