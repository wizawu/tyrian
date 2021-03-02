declare namespace java {
  namespace rmi {
    namespace activation {

      abstract class Activatable extends java.rmi.server.RemoteServer {
        protected constructor(arg0: java.lang.String, arg1: java.rmi.MarshalledObject<unknown>, arg2: boolean, arg3: int)
        protected constructor(arg0: java.lang.String, arg1: java.rmi.MarshalledObject<unknown>, arg2: boolean, arg3: int, arg4: java.rmi.server.RMIClientSocketFactory, arg5: java.rmi.server.RMIServerSocketFactory)
        protected constructor(arg0: java.rmi.activation.ActivationID, arg1: int)
        protected constructor(arg0: java.rmi.activation.ActivationID, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory, arg3: java.rmi.server.RMIServerSocketFactory)
        protected getID(): java.rmi.activation.ActivationID
        public static register(arg0: java.rmi.activation.ActivationDesc): java.rmi.Remote
        public static inactive(arg0: java.rmi.activation.ActivationID): boolean
        public static unregister(arg0: java.rmi.activation.ActivationID): void
        public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String, arg2: java.rmi.MarshalledObject<unknown>, arg3: boolean, arg4: int): java.rmi.activation.ActivationID
        public static exportObject(arg0: java.rmi.Remote, arg1: java.lang.String, arg2: java.rmi.MarshalledObject<unknown>, arg3: boolean, arg4: int, arg5: java.rmi.server.RMIClientSocketFactory, arg6: java.rmi.server.RMIServerSocketFactory): java.rmi.activation.ActivationID
        public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: int): java.rmi.Remote
        public static exportObject(arg0: java.rmi.Remote, arg1: java.rmi.activation.ActivationID, arg2: int, arg3: java.rmi.server.RMIClientSocketFactory, arg4: java.rmi.server.RMIServerSocketFactory): java.rmi.Remote
        public static unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
      }

    }
  }
}
