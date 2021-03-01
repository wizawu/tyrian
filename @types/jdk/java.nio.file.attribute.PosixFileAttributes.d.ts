declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        interface PosixFileAttributes extends java.nio.file.attribute.BasicFileAttributes {

          owner(): java.nio.file.attribute.UserPrincipal
          group(): java.nio.file.attribute.GroupPrincipal
          permissions(): java.util.Set<java.nio.file.attribute.PosixFilePermission>
        }

      }
    }
  }
}
