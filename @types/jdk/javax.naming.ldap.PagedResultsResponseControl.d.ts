declare namespace javax {
  namespace naming {
    namespace ldap {

      class PagedResultsResponseControl extends javax.naming.ldap.BasicControl {

        public static readonly OID: java.lang.String
        public constructor(arg0: java.lang.String, arg1: boolean, arg2: byte[])
        public getResultSize(): int
        public getCookie(): byte[]
      }

    }
  }
}
