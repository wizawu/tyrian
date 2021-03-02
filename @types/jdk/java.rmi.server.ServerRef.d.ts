declare namespace java {
  namespace rmi {
    namespace server {

      interface ServerRef extends java.rmi.server.RemoteRef {
        public static readonly serialVersionUID: long
        exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object): java.rmi.server.RemoteStub
        getClientHost(): java.lang.String
      }

    }
  }
}
