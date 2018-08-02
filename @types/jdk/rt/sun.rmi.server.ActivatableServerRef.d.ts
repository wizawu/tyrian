declare namespace sun {
    namespace rmi {
        namespace server {
class ActivatableServerRef extends sun.rmi.server.UnicastServerRef2 {
    public constructor(arg0: java.rmi.activation.ActivationID, arg1: int)
    public constructor(arg0: java.rmi.activation.ActivationID, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda)
    public getRefClass(arg0: java.io.ObjectOutput): string
    protected getClientRef(): java.rmi.server.RemoteRef
    public writeExternal(arg0: java.io.ObjectOutput): void
    public static class: java.lang.Class<any>
}

        }
    }
}