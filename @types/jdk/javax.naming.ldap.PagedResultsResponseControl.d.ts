declare namespace javax {
  namespace naming {
    namespace ldap {
      class PagedResultsResponseControl extends javax.naming.ldap.BasicControl {
        public static readonly OID: java.lang.String
        public constructor(
          arg0: java.lang.String | string,
          arg1: boolean | java.lang.Boolean,
          arg2: number[] | java.lang.Byte[]
        )
        public getResultSize(): number
        public getCookie(): number[]
      }
    }
  }
}
