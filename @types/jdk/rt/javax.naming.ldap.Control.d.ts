declare namespace javax {
    namespace naming {
        namespace ldap {
            interface Control extends java.io.Serializable {
                CRITICAL: boolean
                NONCRITICAL: boolean
                getID(): string
                isCritical(): boolean
                getEncodedValue(): byte[]
            }
        }
    }
}