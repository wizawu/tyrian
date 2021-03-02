declare namespace javax {
  namespace naming {
    namespace ldap {

      class StartTlsRequest implements javax.naming.ldap.ExtendedRequest {
        public static readonly OID: java.lang.String
        public constructor()
        public getID(): java.lang.String
        public getEncodedValue(): byte[]
        public createExtendedResponse(arg0: java.lang.String, arg1: byte[], arg2: int, arg3: int): javax.naming.ldap.ExtendedResponse
      }

    }
  }
}
