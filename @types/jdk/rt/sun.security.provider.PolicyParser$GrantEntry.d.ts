declare namespace sun {
    namespace security {
        namespace provider {
            class PolicyParser$GrantEntry {
                public signedBy: string
                public codeBase: string
                public principals: java.util.LinkedList<sun.security.provider.PolicyParser$PrincipalEntry>
                public permissionEntries: java.util.Vector<sun.security.provider.PolicyParser$PermissionEntry>
                public constructor()
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public add(arg0: sun.security.provider.PolicyParser$PermissionEntry): void
                public remove(arg0: sun.security.provider.PolicyParser$PrincipalEntry): boolean
                public remove(arg0: sun.security.provider.PolicyParser$PermissionEntry): boolean
                public contains(arg0: sun.security.provider.PolicyParser$PrincipalEntry): boolean
                public contains(arg0: sun.security.provider.PolicyParser$PermissionEntry): boolean
                public permissionElements(): java.util.Enumeration<sun.security.provider.PolicyParser$PermissionEntry>
                public write(arg0: java.io.PrintWriter): void
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}