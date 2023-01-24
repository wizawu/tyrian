declare namespace java {
  namespace rmi {
    namespace server {
      abstract class RemoteServer extends java.rmi.server.RemoteObject {
        protected constructor()
        protected constructor(arg0: java.rmi.server.RemoteRef)
        public static getClientHost(): java.lang.String
        public static setLog(arg0: java.io.OutputStream): void
        public static getLog(): java.io.PrintStream
      }
    }
  }
}
