declare namespace java {
  namespace rmi {
    namespace server {

      interface Skeleton {
        dispatch(arg0: java.rmi.Remote, arg1: java.rmi.server.RemoteCall, arg2: number | java.lang.Integer, arg3: number | java.lang.Long): void
        getOperations(): java.rmi.server.Operation[]
      }

    }
  }
}
