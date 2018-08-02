declare namespace sun {
    namespace rmi {
        namespace server {
class UnicastServerRef2 extends sun.rmi.server.UnicastServerRef {
    public constructor()
    public constructor(arg0: sun.rmi.transport.LiveRef)
    public constructor(arg0: sun.rmi.transport.LiveRef, arg1: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda)
    public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
    public constructor(arg0: int, arg1: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg2: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg3: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda)
    public getRefClass(arg0: java.io.ObjectOutput): string
    protected getClientRef(): java.rmi.server.RemoteRef
    public static class: java.lang.Class<any>
}

        }
    }
}