declare namespace org {
  namespace ietf {
    namespace jgss {

      class Oid {
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: java.io.InputStream)
        public constructor(arg0: number[] | java.lang.Byte[])
        static getInstance(arg0: java.lang.String | string): org.ietf.jgss.Oid
        public toString(): java.lang.String
        public equals(arg0: java.lang.Object | any): boolean
        public getDER(): number[]
        public containedIn(arg0: org.ietf.jgss.Oid[]): boolean
        public hashCode(): number
      }

    }
  }
}
