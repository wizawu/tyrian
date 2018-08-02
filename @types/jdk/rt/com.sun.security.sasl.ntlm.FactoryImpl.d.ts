declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace ntlm {
class FactoryImpl implements javax.security.sasl.SaslClientFactory , javax.security.sasl.SaslServerFactory {
    public constructor()
    public createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
    public createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
    public getMechanismNames(arg0: java.util.Map<java.lang.String, any>): java.lang.String[]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}