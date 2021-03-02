declare namespace javax {
  namespace naming {
    namespace ldap {

      interface ExtendedRequest extends java.io.Serializable {
        getID(): java.lang.String
        getEncodedValue(): number[]
        createExtendedResponse(arg0: java.lang.String | string, arg1: byte[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): javax.naming.ldap.ExtendedResponse
      }

    }
  }
}
