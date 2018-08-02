declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapURL extends com.sun.jndi.toolkit.url.Uri {
                    public constructor(arg0: java.lang.String | string)
                    public useSsl(): boolean
                    public getDN(): string
                    public getAttributes(): string
                    public getScope(): string
                    public getFilter(): string
                    public getExtensions(): string
                    public static fromList(arg0: java.lang.String | string): java.lang.String[]
                    public static hasQueryComponents(arg0: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}