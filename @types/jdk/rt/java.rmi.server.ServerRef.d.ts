declare namespace java {
    namespace rmi {
        namespace server {
interface ServerRef extends java.rmi.server.RemoteRef {
    serialVersionUID: long
    exportObject(arg0: java.rmi.Remote, arg1: java.lang.Object): java.rmi.server.RemoteStub
    getClientHost(): string
}

        }
    }
}