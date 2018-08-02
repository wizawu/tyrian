declare namespace org {
    namespace ietf {
        namespace jgss {
abstract class GSSManager {
    public constructor()
    public static getInstance(): org.ietf.jgss.GSSManager
    public getMechs(): org.ietf.jgss.Oid[]
    public getNamesForMech(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
    public getMechsForName(arg0: org.ietf.jgss.Oid): org.ietf.jgss.Oid[]
    public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    public createName(arg0: byte[], arg1: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    public createName(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    public createName(arg0: byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): org.ietf.jgss.GSSName
    public createCredential(arg0: int): org.ietf.jgss.GSSCredential
    public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid, arg3: int): org.ietf.jgss.GSSCredential
    public createCredential(arg0: org.ietf.jgss.GSSName, arg1: int, arg2: org.ietf.jgss.Oid[], arg3: int): org.ietf.jgss.GSSCredential
    public createContext(arg0: org.ietf.jgss.GSSName, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.GSSCredential, arg3: int): org.ietf.jgss.GSSContext
    public createContext(arg0: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSContext
    public createContext(arg0: byte[]): org.ietf.jgss.GSSContext
    public addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
    public addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
    public static class: java.lang.Class<any>
}

        }
    }
}