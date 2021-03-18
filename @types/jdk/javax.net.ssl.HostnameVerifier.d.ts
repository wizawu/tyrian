declare namespace javax {
  namespace net {
    namespace ssl {

      interface HostnameVerifier$$lambda {
        (arg0: java.lang.String | string, arg1: javax.net.ssl.SSLSession): boolean | java.lang.Boolean
      }

      interface HostnameVerifier {
        verify(arg0: java.lang.String | string, arg1: javax.net.ssl.SSLSession): boolean
      }

    }
  }
}
