declare namespace javax {
  namespace security {
    namespace sasl {

      interface SaslClientFactory {
        createSaslClient(arg0: java.lang.String[], arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.util.Map<java.lang.String,unknown>, arg5: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslClient
        getMechanismNames(arg0: java.util.Map<java.lang.String,unknown>): java.lang.String[]
      }

    }
  }
}
