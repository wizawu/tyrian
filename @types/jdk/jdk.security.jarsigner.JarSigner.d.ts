declare namespace jdk {
  namespace security {
    namespace jarsigner {

      class JarSigner {
        public sign(arg0: java.util.zip.ZipFile, arg1: java.io.OutputStream): void
        public getDigestAlgorithm(): java.lang.String
        public getSignatureAlgorithm(): java.lang.String
        public getTsa(): java.net.URI
        public getSignerName(): java.lang.String
        public getProperty(arg0: java.lang.String | string): java.lang.String
      }

    }
  }
}
