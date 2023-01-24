declare namespace java {
  namespace nio {
    namespace file {
      namespace attribute {
        abstract class UserPrincipalLookupService {
          protected constructor()
          public abstract lookupPrincipalByName(arg0: java.lang.String | string): java.nio.file.attribute.UserPrincipal
          public abstract lookupPrincipalByGroupName(
            arg0: java.lang.String | string
          ): java.nio.file.attribute.GroupPrincipal
        }
      }
    }
  }
}
