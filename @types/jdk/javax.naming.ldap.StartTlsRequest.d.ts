declare namespace javax {
  namespace naming {
    namespace ldap {

      class StartTlsRequest implements javax.naming.ldap.ExtendedRequest {
        public static readonly OID: java.lang.String
        public constructor()
        public getID(): java.lang.String
        public getEncodedValue(): number[]
        public createExtendedResponse(arg0: java.lang.String | string, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): javax.naming.ldap.ExtendedResponse
      }

    }
  }
}
