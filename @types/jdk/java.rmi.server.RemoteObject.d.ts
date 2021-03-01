declare namespace java {
  namespace rmi {
    namespace server {

      abstract class RemoteObject implements java.rmi.Remote, java.io.Serializable {

        protected ref: java.rmi.server.RemoteRef
        protected constructor()
        protected constructor(arg0: java.rmi.server.RemoteRef)
        public getRef(): java.rmi.server.RemoteRef
        public static toStub(arg0: java.rmi.Remote): java.rmi.Remote
        public hashCode(): int
        public equals(arg0: java.lang.Object): boolean
        public toString(): java.lang.String
      }

    }
  }
}
