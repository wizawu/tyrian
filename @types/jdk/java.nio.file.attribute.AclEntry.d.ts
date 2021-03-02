declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        class AclEntry {
          public static newBuilder(): java.nio.file.attribute.AclEntry$Builder
          public static newBuilder(arg0: java.nio.file.attribute.AclEntry): java.nio.file.attribute.AclEntry$Builder
          public type(): java.nio.file.attribute.AclEntryType
          public principal(): java.nio.file.attribute.UserPrincipal
          public permissions(): java.util.Set<java.nio.file.attribute.AclEntryPermission>
          public flags(): java.util.Set<java.nio.file.attribute.AclEntryFlag>
          public equals(arg0: java.lang.Object): boolean
          public hashCode(): int
          public toString(): java.lang.String
        }

      }
    }
  }
}
