declare namespace javax {
  namespace security {
    namespace sasl {

      interface SaslServerFactory {
        createSaslServer(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.util.Map<java.lang.String,unknown>, arg4: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslServer
        getMechanismNames(arg0: java.util.Map<java.lang.String,unknown>): java.lang.String[]
      }

    }
  }
}
