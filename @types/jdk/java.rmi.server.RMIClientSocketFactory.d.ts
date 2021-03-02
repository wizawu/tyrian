declare namespace java {
  namespace rmi {
    namespace server {

      interface RMIClientSocketFactory$$lambda {
        (arg0: java.lang.String, arg1: int): java.net.Socket
      }

      interface RMIClientSocketFactory {
        createSocket(arg0: java.lang.String, arg1: int): java.net.Socket
      }

    }
  }
}
