declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace internal {
                    interface RMIExporter {
                        EXPORTER_ATTRIBUTE: string
                        exportObject(arg0: java.rmi.Remote, arg1: int, arg2: java.rmi.server.RMIClientSocketFactory | java.rmi.server.RMIClientSocketFactory$$Lambda, arg3: java.rmi.server.RMIServerSocketFactory | java.rmi.server.RMIServerSocketFactory$$Lambda, arg4: sun.misc.ObjectInputFilter | sun.misc.ObjectInputFilter$$Lambda): java.rmi.Remote
                        unexportObject(arg0: java.rmi.Remote, arg1: boolean): boolean
                    }
                }
            }
        }
    }
}