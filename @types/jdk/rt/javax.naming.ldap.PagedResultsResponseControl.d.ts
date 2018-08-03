declare namespace javax {
    namespace naming {
        namespace ldap {
            class PagedResultsResponseControl extends javax.naming.ldap.BasicControl {
                public static readonly OID: string
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                public getResultSize(): int
                public getCookie(): byte[]
                public static class: java.lang.Class<any>
            }
        }
    }
}