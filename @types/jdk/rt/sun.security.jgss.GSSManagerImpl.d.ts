declare namespace sun {
    namespace security {
        namespace jgss {
class GSSManagerImpl extends org.ietf.jgss.GSSManager {
    public constructor(arg0: sun.security.jgss.GSSCaller, arg1: boolean)
    public constructor(arg0: sun.security.jgss.GSSCaller)
    public constructor()
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
    public getCredentialElement(arg0: sun.security.jgss.spi.GSSNameSpi, arg1: int, arg2: int, arg3: org.ietf.jgss.Oid, arg4: int): sun.security.jgss.spi.GSSCredentialSpi
    public getNameElement(arg0: java.lang.String | string, arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
    public getNameElement(arg0: byte[], arg1: org.ietf.jgss.Oid, arg2: org.ietf.jgss.Oid): sun.security.jgss.spi.GSSNameSpi
    public static class: java.lang.Class<any>
}

        }
    }
}