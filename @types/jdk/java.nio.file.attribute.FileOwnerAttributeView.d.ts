declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        interface FileOwnerAttributeView extends java.nio.file.attribute.FileAttributeView {

          name(): java.lang.String
          getOwner(): java.nio.file.attribute.UserPrincipal
          setOwner(arg0: java.nio.file.attribute.UserPrincipal): void
        }

      }
    }
  }
}
