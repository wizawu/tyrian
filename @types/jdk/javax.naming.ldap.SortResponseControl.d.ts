declare namespace javax {
  namespace naming {
    namespace ldap {
      class SortResponseControl extends javax.naming.ldap.BasicControl {
        public static readonly OID: java.lang.String
        public constructor(
          arg0: java.lang.String | string,
          arg1: boolean | java.lang.Boolean,
          arg2: number[] | java.lang.Byte[]
        )
        public isSorted(): boolean
        public getResultCode(): number
        public getAttributeID(): java.lang.String
        public getException(): javax.naming.NamingException
      }
    }
  }
}
