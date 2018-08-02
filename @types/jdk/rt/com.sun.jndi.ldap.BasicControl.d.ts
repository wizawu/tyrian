declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class BasicControl implements javax.naming.ldap.Control {
                    protected id: string
                    protected criticality: boolean
                    protected value: byte[]
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                    public getID(): string
                    public isCritical(): boolean
                    public getEncodedValue(): byte[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}