declare namespace sun {
    namespace rmi {
        namespace registry {
class RegistryImpl_Stub extends java.rmi.server.RemoteStub implements java.rmi.registry.Registry , java.rmi.Remote {
    public constructor()
    public constructor(arg0: java.rmi.server.RemoteRef)
    public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    public list(): java.lang.String[]
    public lookup(arg0: java.lang.String | string): java.rmi.Remote
    public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    public unbind(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

        }
    }
}