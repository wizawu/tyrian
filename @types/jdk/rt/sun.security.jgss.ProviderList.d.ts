declare namespace sun {
    namespace security {
        namespace jgss {
            class ProviderList {
                public static readonly DEFAULT_MECH_OID: org.ietf.jgss.Oid
                public constructor(arg0: sun.security.jgss.GSSCaller, arg1: boolean)
                public getMechFactory(arg0: org.ietf.jgss.Oid): sun.security.jgss.spi.MechanismFactory
                public getMechFactory(arg0: org.ietf.jgss.Oid, arg1: java.security.Provider): sun.security.jgss.spi.MechanismFactory
                public getMechs(): org.ietf.jgss.Oid[]
                public addProviderAtFront(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public addProviderAtEnd(arg0: java.security.Provider, arg1: org.ietf.jgss.Oid): void
                public static class: java.lang.Class<any>
            }
        }
    }
}