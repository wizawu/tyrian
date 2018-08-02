declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                abstract class UserPrincipalLookupService {
                    protected constructor()
                    public lookupPrincipalByName(arg0: java.lang.String | string): java.nio.file.attribute.UserPrincipal
                    public lookupPrincipalByGroupName(arg0: java.lang.String | string): java.nio.file.attribute.GroupPrincipal
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}