declare namespace sun {
    namespace rmi {
        namespace transport {
            abstract class Transport {
                public constructor()
                public abstract getChannel(arg0: sun.rmi.transport.Endpoint): sun.rmi.transport.Channel
                public abstract free(arg0: sun.rmi.transport.Endpoint): void
                public exportObject(arg0: sun.rmi.transport.Target): void
                protected targetUnexported(): void
                protected abstract checkAcceptPermission(arg0: java.security.AccessControlContext): void
                public serviceCall(arg0: java.rmi.server.RemoteCall): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}