declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {

        class AclEntryFlag extends java.lang.Enum<java.nio.file.attribute.AclEntryFlag> {
          public static readonly FILE_INHERIT: java.nio.file.attribute.AclEntryFlag
          public static readonly DIRECTORY_INHERIT: java.nio.file.attribute.AclEntryFlag
          public static readonly NO_PROPAGATE_INHERIT: java.nio.file.attribute.AclEntryFlag
          public static readonly INHERIT_ONLY: java.nio.file.attribute.AclEntryFlag
          public static values(): java.nio.file.attribute.AclEntryFlag[]
          public static valueOf(arg0: java.lang.String | string): java.nio.file.attribute.AclEntryFlag
        }

      }
    }
  }
}
