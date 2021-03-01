declare namespace javax {
  namespace naming {
    namespace ldap {

      class Rdn implements java.io.Serializable, java.lang.Comparable<java.lang.Object> {

        public constructor(arg0: javax.naming.directory.Attributes)
        public constructor(arg0: java.lang.String)
        public constructor(arg0: javax.naming.ldap.Rdn)
        public constructor(arg0: java.lang.String, arg1: java.lang.Object)
        constructor()
        put(arg0: java.lang.String, arg1: java.lang.Object): javax.naming.ldap.Rdn
        sort(): void
        public getValue(): java.lang.Object
        public getType(): java.lang.String
        public toString(): java.lang.String
        public compareTo(arg0: java.lang.Object): int
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toAttributes(): javax.naming.directory.Attributes
        public size(): int
        public static escapeValue(arg0: java.lang.Object): java.lang.String
        public static unescapeValue(arg0: java.lang.String): java.lang.Object
      }

    }
  }
}
