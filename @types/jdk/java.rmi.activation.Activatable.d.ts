declare namespace java {
  namespace rmi {
    namespace activation {

      abstract class Activatable extends java.rmi.server.RemoteServer {
        protected constructor(arg0: java.lang.String | string, arg1: java.rmi.MarshalledObject<unknown>, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer)
        protected constructor(arg0: java.lang.String | string, arg1: java.rmi.MarshalledObject<unknown>, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer, arg4: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg5: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda)
        protected constructor(arg0: java.rmi.activation.ActivationID, arg1: number | java.lang.Integer)
        protected constructor(arg0: java.rmi.activation.ActivationID, arg1: number | java.lang.Integer, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda)
        protected getID(): java.rmi.activation.ActivationID
        public static register(arg0: java.rmi.activation.ActivationDesc): java.rmi.Remote
        public static inactive(arg0: java.rmi.activation.ActivationID): boolean
        public static unregister(arg0: java.rmi.activation.ActivationID): void
        public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<unknown>, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer): java.rmi.activation.ActivationID
        public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String | string, arg2: java.rmi.MarshalledObject<unknown>, arg3: boolean | java.lang.Boolean, arg4: number | java.lang.Integer, arg5: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg6: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda): java.rmi.activation.ActivationID
        public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: number | java.lang.Integer): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: number | java.lang.Integer, arg3: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$lambda, arg4: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$lambda): java.rmi.Remote
        public static unexportObject(arg0: java.rmi.Remote, arg1: boolean | java.lang.Boolean): boolean
      }

    }
  }
}
