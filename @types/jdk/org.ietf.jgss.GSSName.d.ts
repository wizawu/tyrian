declare namespace org {
  namespace ietf {
    namespace jgss {

      interface GSSName {
        public static readonly NT_HOSTBASED_SERVICE: org.ietf.jgss.Oid
        public static readonly NT_USER_NAME: org.ietf.jgss.Oid
        public static readonly NT_MACHINE_UID_NAME: org.ietf.jgss.Oid
        public static readonly NT_STRING_UID_NAME: org.ietf.jgss.Oid
        public static readonly NT_ANONYMOUS: org.ietf.jgss.Oid
        public static readonly NT_EXPORT_NAME: org.ietf.jgss.Oid
        equals(arg0: org.ietf.jgss.GSSName): boolean
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
        canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        export(): byte[]
        toString(): java.lang.String
        getStringNameType(): org.ietf.jgss.Oid
        isAnonymous(): boolean
        isMN(): boolean
      }

    }
  }
}
