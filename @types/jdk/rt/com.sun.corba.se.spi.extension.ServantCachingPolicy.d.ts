declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace extension {
                        class ServantCachingPolicy extends org.omg.CORBA.LocalObject implements org.omg.CORBA.Policy {
                            public static readonly NO_SERVANT_CACHING: int
                            public static readonly FULL_SEMANTICS: int
                            public static readonly INFO_ONLY_SEMANTICS: int
                            public static readonly MINIMAL_SEMANTICS: int
                            public typeToName(): string
                            public toString(): string
                            public getType(): int
                            public static getPolicy(): com.sun.corba.se.spi.extension.ServantCachingPolicy
                            public static getFullPolicy(): com.sun.corba.se.spi.extension.ServantCachingPolicy
                            public static getInfoOnlyPolicy(): com.sun.corba.se.spi.extension.ServantCachingPolicy
                            public static getMinimalPolicy(): com.sun.corba.se.spi.extension.ServantCachingPolicy
                            public policy_type(): int
                            public copy(): org.omg.CORBA.Policy
                            public destroy(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}