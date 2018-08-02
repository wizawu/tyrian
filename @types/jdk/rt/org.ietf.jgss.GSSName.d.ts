declare namespace org {
    namespace ietf {
        namespace jgss {
interface GSSName {
    NT_HOSTBASED_SERVICE: org.ietf.jgss.Oid
    NT_USER_NAME: org.ietf.jgss.Oid
    NT_MACHINE_UID_NAME: org.ietf.jgss.Oid
    NT_STRING_UID_NAME: org.ietf.jgss.Oid
    NT_ANONYMOUS: org.ietf.jgss.Oid
    NT_EXPORT_NAME: org.ietf.jgss.Oid
    equals(arg0: org.ietf.jgss.GSSName): boolean
    equals(arg0: java.lang.Object): boolean
    hashCode(): int
    canonicalize(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    export(): byte[]
    toString(): string
    getStringNameType(): org.ietf.jgss.Oid
    isAnonymous(): boolean
    isMN(): boolean
}

        }
    }
}