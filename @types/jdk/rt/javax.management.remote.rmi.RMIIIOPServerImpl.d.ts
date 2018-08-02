declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                class RMIIIOPServerImpl extends javax.management.remote.rmi.RMIServerImpl {
                    public constructor(arg0: java.util.Map<java.lang.String, any>)
                    protected export(): void
                    protected getProtocol(): string
                    public toStub(): java.rmi.Remote
                    protected makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    protected closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
                    protected closeServer(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}