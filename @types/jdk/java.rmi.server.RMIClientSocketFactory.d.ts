declare namespace java {
  namespace rmi {
    namespace server {

      interface RMIClientSocketFactory$$lambda {
        (arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.net.Socket
      }

      interface RMIClientSocketFactory {
        createSocket(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.net.Socket
      }

    }
  }
}
