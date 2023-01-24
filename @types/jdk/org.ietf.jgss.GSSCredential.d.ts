declare namespace org {
  namespace ietf {
    namespace jgss {
      interface GSSCredential extends java.lang.Cloneable {
        readonly INITIATE_AND_ACCEPT: int
        readonly INITIATE_ONLY: int
        readonly ACCEPT_ONLY: int
        readonly DEFAULT_LIFETIME: int
        readonly INDEFINITE_LIFETIME: int
        dispose(): void
        getName(): org.ietf.jgss.GSSName
        getName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        getRemainingLifetime(): number
        getRemainingInitLifetime(arg0: org.ietf.jgss.Oid): number
        getRemainingAcceptLifetime(arg0: org.ietf.jgss.Oid): number
        getUsage(): number
        getUsage(arg0: org.ietf.jgss.Oid): number
        getMechs(): org.ietf.jgss.Oid[]
        add(
          arg0: org.ietf.jgss.GSSName,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: org.ietf.jgss.Oid,
          arg4: number | java.lang.Integer
        ): void
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }
    }
  }
}
