declare namespace javax {
    namespace security {
        namespace auth {
            namespace kerberos {
                class KrbServicePermissionCollection extends java.security.PermissionCollection implements java.io.Serializable {
                    public constructor()
                    public implies(arg0: java.security.Permission): boolean
                    public add(arg0: java.security.Permission): void
                    public elements(): java.util.Enumeration<java.security.Permission>
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}