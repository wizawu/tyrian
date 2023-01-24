declare namespace javax {
  namespace security {
    namespace sasl {
      class Sasl {
        public static readonly QOP: java.lang.String
        public static readonly STRENGTH: java.lang.String
        public static readonly SERVER_AUTH: java.lang.String
        public static readonly BOUND_SERVER_NAME: java.lang.String
        public static readonly MAX_BUFFER: java.lang.String
        public static readonly RAW_SEND_SIZE: java.lang.String
        public static readonly REUSE: java.lang.String
        public static readonly POLICY_NOPLAINTEXT: java.lang.String
        public static readonly POLICY_NOACTIVE: java.lang.String
        public static readonly POLICY_NODICTIONARY: java.lang.String
        public static readonly POLICY_NOANONYMOUS: java.lang.String
        public static readonly POLICY_FORWARD_SECRECY: java.lang.String
        public static readonly POLICY_PASS_CREDENTIALS: java.lang.String
        public static readonly CREDENTIALS: java.lang.String
        public static createSaslClient(
          arg0: java.lang.String[] | string[],
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string,
          arg4: java.util.Map<java.lang.String, unknown>,
          arg5: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda
        ): javax.security.sasl.SaslClient
        public static createSaslServer(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.Map<java.lang.String, unknown>,
          arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$lambda
        ): javax.security.sasl.SaslServer
        public static getSaslClientFactories(): java.util.Enumeration<javax.security.sasl.SaslClientFactory>
        public static getSaslServerFactories(): java.util.Enumeration<javax.security.sasl.SaslServerFactory>
      }
    }
  }
}
