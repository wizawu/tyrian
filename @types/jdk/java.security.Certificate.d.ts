declare namespace java {
  namespace security {

    interface Certificate {

      getGuarantor(): java.security.Principal
      getPrincipal(): java.security.Principal
      getPublicKey(): java.security.PublicKey
      encode(arg0: java.io.OutputStream): void
      decode(arg0: java.io.InputStream): void
      getFormat(): java.lang.String
      toString(arg0: boolean): java.lang.String
    }

  }
}
