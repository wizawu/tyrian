declare namespace javax {
    namespace naming {
        namespace ldap {
            interface ExtendedRequest extends java.io.Serializable {
                getID(): string
                getEncodedValue(): byte[]
                createExtendedResponse(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int): javax.naming.ldap.ExtendedResponse
            }
        }
    }
}