declare namespace sun {
    namespace rmi {
        namespace registry {
class RegistryImpl extends java.rmi.server.RemoteServer implements java.rmi.registry.Registry {
    public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
    public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg3: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda)
    public constructor(arg0: int)
    public lookup(arg0: java.lang.String | string): java.rmi.Remote
    public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    public unbind(arg0: java.lang.String | string): void
    public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    public list(): java.lang.String[]
    public static checkAccess(arg0: java.lang.String | string): void
    public static getID(): java.rmi.server.ObjID
    public static main(arg0: java.lang.String[]): void
    public static class: java.lang.Class<any>
}

        }
    }
}