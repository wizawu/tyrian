declare namespace java {
  namespace rmi {
    namespace server {
      class UID implements java.io.Serializable {
        public constructor()
        public constructor(arg0: number | java.lang.Short)
        public hashCode(): number
        public equals(arg0: java.lang.Object | any): boolean
        public toString(): java.lang.String
        public write(arg0: java.io.DataOutput): void
        public static read(arg0: java.io.DataInput): java.rmi.server.UID
      }
    }
  }
}
