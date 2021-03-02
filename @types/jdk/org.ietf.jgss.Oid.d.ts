declare namespace org {
  namespace ietf {
    namespace jgss {

      class Oid {
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: byte[])
        static getInstance(arg0: java.lang.String): org.ietf.jgss.Oid
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object): boolean
        public getDER(): byte[]
        public containedIn(arg0: org.ietf.jgss.Oid[]): boolean
        public hashCode(): int
      }

    }
  }
}
