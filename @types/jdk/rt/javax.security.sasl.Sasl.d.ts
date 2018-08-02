declare namespace javax {
    namespace security {
        namespace sasl {
            class Sasl {
                public static QOP: string
                public static STRENGTH: string
                public static SERVER_AUTH: string
                public static BOUND_SERVER_NAME: string
                public static MAX_BUFFER: string
                public static RAW_SEND_SIZE: string
                public static REUSE: string
                public static POLICY_NOPLAINTEXT: string
                public static POLICY_NOACTIVE: string
                public static POLICY_NODICTIONARY: string
                public static POLICY_NOANONYMOUS: string
                public static POLICY_FORWARD_SECRECY: string
                public static POLICY_PASS_CREDENTIALS: string
                public static CREDENTIALS: string
                public static createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                public static createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                public static getSaslClientFactories(): java.util.Enumeration<javax.security.sasl.SaslClientFactory>
                public static getSaslServerFactories(): java.util.Enumeration<javax.security.sasl.SaslServerFactory>
                public static class: java.lang.Class<any>
            }
        }
    }
}