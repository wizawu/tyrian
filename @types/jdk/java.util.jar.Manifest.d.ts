declare namespace java {
  namespace util {
    namespace jar {

      class Manifest implements java.lang.Cloneable {
        public constructor()
        public constructor(arg0: java.io.InputStream)
        constructor(arg0: java.util.jar.JarVerifier, arg1: java.io.InputStream)
        public constructor(arg0: java.util.jar.Manifest)
        public getMainAttributes(): java.util.jar.Attributes
        public getEntries(): java.util.Map<java.lang.String,java.util.jar.Attributes>
        public getAttributes(arg0: java.lang.String | string): java.util.jar.Attributes
        getTrustedAttributes(arg0: java.lang.String | string): java.util.jar.Attributes
        public clear(): void
        public write(arg0: java.io.OutputStream): void
        static make72Safe(arg0: java.lang.StringBuffer): void
        public read(arg0: java.io.InputStream): void
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public clone(): java.lang.Object
      }

    }
  }
}
