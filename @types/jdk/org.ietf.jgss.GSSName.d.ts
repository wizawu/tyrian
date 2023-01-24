declare namespace org {
  namespace ietf {
    namespace jgss {
      interface GSSName {
        readonly NT_HOSTBASED_SERVICE: org.ietf.jgss.Oid
        readonly NT_USER_NAME: org.ietf.jgss.Oid
        readonly NT_MACHINE_UID_NAME: org.ietf.jgss.Oid
        readonly NT_STRING_UID_NAME: org.ietf.jgss.Oid
        readonly NT_ANONYMOUS: org.ietf.jgss.Oid
        readonly NT_EXPORT_NAME: org.ietf.jgss.Oid
        equals(arg0: org.ietf.jgss.GSSName): boolean
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
        canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        export(): number[]
        toString(): java.lang.String
        getStringNameType(): org.ietf.jgss.Oid
        isAnonymous(): boolean
        isMN(): boolean
      }
    }
  }
}
