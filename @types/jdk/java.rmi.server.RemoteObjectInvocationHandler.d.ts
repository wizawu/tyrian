declare namespace java {
  namespace rmi {
    namespace server {

      class RemoteObjectInvocationHandler extends java.rmi.server.RemoteObject implements java.lang.reflect.InvocationHandler {
        public constructor(arg0: java.rmi.server.RemoteRef)
        public invoke(arg0: java.lang.Object | any, arg1: java.lang.reflect.Method, arg2: java.lang.Object[] | any[]): java.lang.Object
      }

    }
  }
}
