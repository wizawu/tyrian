declare namespace java {
  namespace rmi {
    namespace activation {

      class ActivationGroup_Stub extends java.rmi.server.RemoteStub implements java.rmi.activation.ActivationInstantiator, java.rmi.Remote {
        static class$java$rmi$activation$ActivationInstantiator: java.lang.Class
        static class$java$rmi$activation$ActivationID: java.lang.Class
        static class$java$rmi$activation$ActivationDesc: java.lang.Class
        public constructor(arg0: java.rmi.server.RemoteRef)
        static class$(arg0: java.lang.String): java.lang.Class
        public newInstance(arg0: java.rmi.activation.ActivationID, arg1: java.rmi.activation.ActivationDesc): java.rmi.MarshalledObject
      }

    }
  }
}
