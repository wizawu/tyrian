declare namespace javax {
  namespace naming {
    namespace ldap {

      class SortControl extends javax.naming.ldap.BasicControl {
        public static readonly OID: java.lang.String
        public constructor(arg0: java.lang.String, arg1: boolean)
        public constructor(arg0: java.lang.String[], arg1: boolean)
        public constructor(arg0: javax.naming.ldap.SortKey[], arg1: boolean)
      }

    }
  }
}
