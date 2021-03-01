declare namespace java {
  namespace security {
    namespace cert {

      interface Extension {

        getId(): java.lang.String
        isCritical(): boolean
        getValue(): byte[]
        encode(arg0: java.io.OutputStream): void
      }

    }
  }
}
