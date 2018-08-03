declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                abstract class RMIServerImpl implements java.io.Closeable , javax.management.remote.rmi.RMIServer {
                    public constructor(arg0: java.util.Map<java.lang.String, any>)
                    protected abstract export(): void
                    public abstract toStub(): java.rmi.Remote
                    public setDefaultClassLoader(arg0: java.lang.ClassLoader): void
                    public getDefaultClassLoader(): java.lang.ClassLoader
                    public setMBeanServer(arg0: javax.management.MBeanServer): void
                    public getMBeanServer(): javax.management.MBeanServer
                    public getVersion(): string
                    public newClient(arg0: java.lang.Object): javax.management.remote.rmi.RMIConnection
                    protected abstract makeClient(arg0: java.lang.String | string, arg1: javax.security.auth.Subject): javax.management.remote.rmi.RMIConnection
                    protected abstract closeClient(arg0: javax.management.remote.rmi.RMIConnection): void
                    protected abstract getProtocol(): string
                    protected clientClosed(arg0: javax.management.remote.rmi.RMIConnection): void
                    public close(): void
                    protected abstract closeServer(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}