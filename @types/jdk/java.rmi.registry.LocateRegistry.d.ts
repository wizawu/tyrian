declare namespace java {
  namespace rmi {
    namespace registry {

      class LocateRegistry {

        public static getRegistry(): java.rmi.registry.Registry
        public static getRegistry(arg0: int): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String, arg1: int): java.rmi.registry.Registry
        public static getRegistry(arg0: java.lang.String, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory): java.rmi.registry.Registry
        public static createRegistry(arg0: int): java.rmi.registry.Registry
        public static createRegistry(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory, arg2: java.rmi.server.RMIServerSocketFactory): java.rmi.registry.Registry
      }

    }
  }
}
