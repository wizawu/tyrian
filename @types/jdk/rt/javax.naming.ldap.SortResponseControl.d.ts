declare namespace javax {
    namespace naming {
        namespace ldap {
            class SortResponseControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                public isSorted(): boolean
                public getResultCode(): int
                public getAttributeID(): string
                public getException(): javax.naming.NamingException
                public static class: java.lang.Class<any>
            }
        }
    }
}