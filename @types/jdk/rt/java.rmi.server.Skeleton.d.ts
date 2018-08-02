declare namespace java {
    namespace rmi {
        namespace server {
            interface Skeleton {
                dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall, arg2: int, arg3: long): void
                getOperations(): java.rmi.server.Operation[]
            }
        }
    }
}