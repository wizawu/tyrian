declare namespace java {
  namespace util {
    namespace jar {

      class JarEntry extends java.util.zip.ZipEntry {
        attr: java.util.jar.Attributes
        certs: java.security.cert.Certificate[]
        signers: java.security.CodeSigner[]
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.util.zip.ZipEntry)
        public constructor(arg0: java.util.jar.JarEntry)
        public getAttributes(): java.util.jar.Attributes
        public getCertificates(): java.security.cert.Certificate[]
        public getCodeSigners(): java.security.CodeSigner[]
        public getRealName(): java.lang.String
      }

    }
  }
}
