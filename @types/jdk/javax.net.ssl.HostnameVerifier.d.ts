declare namespace javax {
  namespace net {
    namespace ssl {

      interface HostnameVerifier$$lambda {
        (arg0: java.lang.String, arg1: javax.net.ssl.SSLSession): boolean
      }

      interface HostnameVerifier {
        verify(arg0: java.lang.String, arg1: javax.net.ssl.SSLSession): boolean
      }

    }
  }
}
