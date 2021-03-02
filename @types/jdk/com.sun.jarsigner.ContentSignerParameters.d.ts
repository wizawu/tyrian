declare namespace com {
  namespace sun {
    namespace jarsigner {

      interface ContentSignerParameters {
        getCommandLine(): java.lang.String[]
        getTimestampingAuthority(): java.net.URI
        getTimestampingAuthorityCertificate(): java.security.cert.X509Certificate
        getTSAPolicyID(): java.lang.String
        getTSADigestAlg(): java.lang.String
        getSignature(): byte[]
        getSignatureAlgorithm(): java.lang.String
        getSignerCertificateChain(): java.security.cert.X509Certificate[]
        getContent(): byte[]
        getSource(): java.util.zip.ZipFile
      }

    }
  }
}
