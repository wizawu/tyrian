declare namespace java {
  namespace rmi {
    namespace server {

      class UnicastRemoteObject extends java.rmi.server.RemoteServer {
        protected constructor()
        protected constructor(arg0: number | java.lang.Integer)
        protected constructor(arg0: number | java.lang.Integer, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda)
        public clone(): java.lang.Object
        public static exportObject(arg0: java.rmi.Remote): java.rmi.server.RemoteStub
        public static exportObject(arg0: java.rmi.Remote, arg1: number | java.lang.Integer): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: number | java.lang.Integer, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: number | java.lang.Integer, arg2: java.io.ObjectInputFilter | java.io.ObjectInputFilter$$lambda): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: number | java.lang.Integer, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda, arg4: java.io.ObjectInputFilter | java.io.ObjectInputFilter$$lambda): java.rmi.Remote
        public static unexportObject(arg0: java.rmi.Remote, arg1: boolean | java.lang.Boolean): boolean
      }

    }
  }
}
