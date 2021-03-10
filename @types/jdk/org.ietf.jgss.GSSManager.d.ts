declare namespace org {
  namespace ietf {
    namespace jgss {

      abstract class GSSManager {
        public constructor()
        public static getInstance(): org.ietf.jgss.GSSManager
        public abstract getMechs(): org.ietf.jgss.Oid[]
        public abstract getNamesForMech(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
        public abstract getMechsForName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
        public abstract createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        public abstract createName(arg0: number[] | java.lang.Byte[], arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        public abstract createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        public abstract createName(arg0: number[] | java.lang.Byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
        public abstract createCredential(arg0: number | java.lang.Integer): org.ietf.jgss.GSSCredential
        public abstract createCredential(arg0: org.ietf.jgss.GSSName, arg1: number | java.lang.Integer, arg2: org.ietf.jgss.Oid, arg3: number | java.lang.Integer): org.ietf.jgss.GSSCredential
        public abstract createCredential(arg0: org.ietf.jgss.GSSName, arg1: number | java.lang.Integer, arg2: org.ietf.jgss.Oid[], arg3: number | java.lang.Integer): org.ietf.jgss.GSSCredential
        public abstract createContext(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.GSSCredential, arg3: number | java.lang.Integer): org.ietf.jgss.GSSContext
        public abstract createContext(arg0: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSContext
        public abstract createContext(arg0: number[] | java.lang.Byte[]): org.ietf.jgss.GSSContext
        public abstract addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
        public abstract addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
      }

    }
  }
}
