declare namespace javax {
  namespace naming {
    namespace ldap {

      interface Control extends java.io.Serializable {
        public static readonly CRITICAL: boolean
        public static readonly NONCRITICAL: boolean
        getID(): java.lang.String
        isCritical(): boolean
        getEncodedValue(): byte[]
      }

    }
  }
}
