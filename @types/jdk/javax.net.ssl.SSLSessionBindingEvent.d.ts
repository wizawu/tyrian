declare namespace javax {
  namespace net {
    namespace ssl {

      class SSLSessionBindingEvent extends java.util.EventObject {
        public constructor(arg0: javax.net.ssl.SSLSession, arg1: java.lang.String | string)
        public getName(): java.lang.String
        public getSession(): javax.net.ssl.SSLSession
      }

    }
  }
}
