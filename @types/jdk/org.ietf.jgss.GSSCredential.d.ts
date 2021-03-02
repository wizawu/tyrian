declare namespace org {
  namespace ietf {
    namespace jgss {

      interface GSSCredential extends java.lang.Cloneable {
        public static readonly INITIATE_AND_ACCEPT: int
        public static readonly INITIATE_ONLY: int
        public static readonly ACCEPT_ONLY: int
        public static readonly DEFAULT_LIFETIME: int
        public static readonly INDEFINITE_LIFETIME: int
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
