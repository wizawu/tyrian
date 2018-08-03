declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class PersistentSearchControl extends com.sun.jndi.ldap.BasicControl {
                    public static readonly OID: string
                    public static readonly ADD: int
                    public static readonly DELETE: int
                    public static readonly MODIFY: int
                    public static readonly RENAME: int
                    public static readonly ANY: int
                    public constructor()
                    public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: boolean)
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}