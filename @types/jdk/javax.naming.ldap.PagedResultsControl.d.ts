declare namespace javax {
  namespace naming {
    namespace ldap {
      class PagedResultsControl extends javax.naming.ldap.BasicControl {
        public static readonly OID: java.lang.String
        public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number[] | java.lang.Byte[],
          arg2: boolean | java.lang.Boolean
        )
      }
    }
  }
}
