declare namespace javax {
    namespace security {
        namespace auth {
            abstract class Policy {
                protected constructor()
                public static getPolicy(): javax.security.auth.Policy
                public static setPolicy(arg0: javax.security.auth.Policy): void
                public getPermissions(arg0: javax.security.auth.Subject, arg1: java.security.CodeSource): java.security.PermissionCollection
                public refresh(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}