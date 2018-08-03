declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class EntryChangeResponseControl extends com.sun.jndi.ldap.BasicControl {
                    public static readonly OID: string
                    public static readonly ADD: int
                    public static readonly DELETE: int
                    public static readonly MODIFY: int
                    public static readonly RENAME: int
                    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                    public getChangeType(): int
                    public getPreviousDN(): string
                    public getChangeNumber(): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}