declare namespace javax {
    namespace management {
        namespace remote {
            namespace rmi {
                interface RMIServer extends java.rmi.Remote {
                    getVersion(): string
                    newClient(arg0: java.lang.Object): javax.management.remote.rmi.RMIConnection
                }
            }
        }
    }
}