declare namespace javax {
  namespace naming {
    namespace ldap {

      class Rdn implements java.io.Serializable, java.lang.Comparable<java.lang.Object> {
        public constructor(arg0: javax.naming.directory.Attributes)
        public constructor(arg0: java.lang.String | string)
        public constructor(arg0: javax.naming.ldap.Rdn)
        public constructor(arg0: java.lang.String | string, arg1: java.lang.Object | any)
        constructor()
        put(arg0: java.lang.String | string, arg1: java.lang.Object | any): javax.naming.ldap.Rdn
        sort(): void
        public getValue(): java.lang.Object
        public getType(): java.lang.String
        public toString(): java.lang.String
        public compareTo(arg0: java.lang.Object | any): number
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toAttributes(): javax.naming.directory.Attributes
        public size(): number
        public static escapeValue(arg0: java.lang.Object | any): java.lang.String
        public static unescapeValue(arg0: java.lang.String | string): java.lang.Object
      }

    }
  }
}
