declare namespace javax {
  namespace naming {
    namespace ldap {
      interface Control extends java.io.Serializable {
        readonly CRITICAL: boolean
        readonly NONCRITICAL: boolean
        getID(): java.lang.String
        isCritical(): boolean
        getEncodedValue(): number[]
      }
    }
  }
}
