declare namespace java {
  namespace rmi {
    namespace registry {

      class LocateRegistry {
        public static getRegistry(): java.rmi.registry.Registry
        public static getRegistry(arg0: number | java.lang.Integer): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String | string): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda): java.rmi.registry.Registry
        public static createRegistry(arg0: number | java.lang.Integer): java.rmi.registry.Registry
        public static createRegistry(arg0: number | java.lang.Integer, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda): java.rmi.registry.Registry
      }

    }
  }
}
