declare namespace java {
  namespace rmi {
    namespace server {
      interface ServerRef extends java.rmi.server.RemoteRef {
        readonly serialVersionUID: long
        exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object | any): java.rmi.server.RemoteStub
        getClientHost(): java.lang.String
      }
    }
  }
}
