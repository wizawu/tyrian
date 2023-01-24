declare namespace jdk {
  namespace security {
    namespace jarsigner {
      class JarSigner$Builder {
        readonly privateKey: java.security.PrivateKey
        readonly certChain: java.security.cert.X509Certificate[]
        digestalg: java.lang.String[]
        sigalg: java.lang.String
        digestProvider: java.security.Provider
        sigProvider: java.security.Provider
        tsaUrl: java.net.URI
        signerName: java.lang.String
        handler: java.util.function$.BiConsumer<java.lang.String, java.lang.String>
        tSAPolicyID: java.lang.String
        tSADigestAlg: java.lang.String
        signManifest: boolean
        externalSF: boolean
        altSignerPath: java.lang.String
        altSigner: java.lang.String
        public constructor(arg0: java.security.KeyStore$PrivateKeyEntry)
        public constructor(arg0: java.security.PrivateKey, arg1: java.security.cert.CertPath)
        public digestAlgorithm(arg0: java.lang.String | string): jdk.security.jarsigner.JarSigner$Builder
        public digestAlgorithm(
          arg0: java.lang.String | string,
          arg1: java.security.Provider
        ): jdk.security.jarsigner.JarSigner$Builder
        public signatureAlgorithm(arg0: java.lang.String | string): jdk.security.jarsigner.JarSigner$Builder
        public signatureAlgorithm(
          arg0: java.lang.String | string,
          arg1: java.security.Provider
        ): jdk.security.jarsigner.JarSigner$Builder
        public tsa(arg0: java.net.URI): jdk.security.jarsigner.JarSigner$Builder
        public signerName(arg0: java.lang.String | string): jdk.security.jarsigner.JarSigner$Builder
        public eventHandler(
          arg0: java.util.function$.BiConsumer<java.lang.String, java.lang.String>
        ): jdk.security.jarsigner.JarSigner$Builder
        public setProperty(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): jdk.security.jarsigner.JarSigner$Builder
        public static getDefaultDigestAlgorithm(): java.lang.String
        public static getDefaultSignatureAlgorithm(arg0: java.security.PrivateKey): java.lang.String
        public build(): jdk.security.jarsigner.JarSigner
      }
    }
  }
}
