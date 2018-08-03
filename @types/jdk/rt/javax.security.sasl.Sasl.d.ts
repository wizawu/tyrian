declare namespace javax {
    namespace security {
        namespace sasl {
            class Sasl {
                public static readonly QOP: string
                public static readonly STRENGTH: string
                public static readonly SERVER_AUTH: string
                public static readonly BOUND_SERVER_NAME: string
                public static readonly MAX_BUFFER: string
                public static readonly RAW_SEND_SIZE: string
                public static readonly REUSE: string
                public static readonly POLICY_NOPLAINTEXT: string
                public static readonly POLICY_NOACTIVE: string
                public static readonly POLICY_NODICTIONARY: string
                public static readonly POLICY_NOANONYMOUS: string
                public static readonly POLICY_FORWARD_SECRECY: string
                public static readonly POLICY_PASS_CREDENTIALS: string
                public static readonly CREDENTIALS: string
                public static createSaslClient(arg0: java.lang.String[], arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.util.Map<java.lang.String, any>, arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslClient
                public static createSaslServer(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Map<java.lang.String, any>, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda): javax.security.sasl.SaslServer
                public static getSaslClientFactories(): java.util.Enumeration<javax.security.sasl.SaslClientFactory>
                public static getSaslServerFactories(): java.util.Enumeration<javax.security.sasl.SaslServerFactory>
                public static class: java.lang.Class<any>
            }
        }
    }
}