declare namespace javax {
    namespace naming {
        namespace ldap {
            interface ExtendedResponse extends java.io.Serializable {
                getID(): string
                getEncodedValue(): byte[]
            }
        }
    }
}