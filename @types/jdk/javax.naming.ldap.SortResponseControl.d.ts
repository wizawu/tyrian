declare namespace javax {
  namespace naming {
    namespace ldap {

      class SortResponseControl extends javax.naming.ldap.BasicControl {

        public static readonly OID: java.lang.String
        public constructor(arg0: java.lang.String, arg1: boolean, arg2: byte[])
        public isSorted(): boolean
        public getResultCode(): int
        public getAttributeID(): java.lang.String
        public getException(): javax.naming.NamingException
      }

    }
  }
}
