declare namespace org {
    namespace ietf {
        namespace jgss {
            interface GSSCredential extends java.lang.Cloneable {
                INITIATE_AND_ACCEPT: int
                INITIATE_ONLY: int
                ACCEPT_ONLY: int
                DEFAULT_LIFETIME: int
                INDEFINITE_LIFETIME: int
                dispose(): void
                getName(): org.ietf.jgss.GSSName
                getName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
                getRemainingLifetime(): int
                getRemainingInitLifetime(arg0: org.ietf.jgss.Oid): int
                getRemainingAcceptLifetime(arg0: org.ietf.jgss.Oid): int
                getUsage(): int
                getUsage(arg0: org.ietf.jgss.Oid): int
                getMechs(): org.ietf.jgss.Oid[]
                add(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): void
                equals(arg0: java.lang.Object): boolean
                hashCode(): int
            }
        }
    }
}