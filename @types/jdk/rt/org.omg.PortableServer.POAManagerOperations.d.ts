declare namespace org {
    namespace omg {
        namespace PortableServer {
            interface POAManagerOperations {
                activate(): void
                hold_requests(arg0: boolean): void
                discard_requests(arg0: boolean): void
                deactivate(arg0: boolean, arg1: boolean): void
                get_state(): org.omg.PortableServer.POAManagerPackage.State
            }
        }
    }
}