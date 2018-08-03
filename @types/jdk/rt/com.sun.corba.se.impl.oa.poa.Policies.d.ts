declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace oa {
                        namespace poa {
                            class Policies {
                                public static readonly defaultPolicies: com.sun.corba.se.impl.oa.poa.Policies
                                public static readonly rootPOAPolicies: com.sun.corba.se.impl.oa.poa.Policies
                                public toString(): string
                                public get_effective_policy(arg0: int): org.omg.CORBA.Policy
                                public isOrbControlledThreads(): boolean
                                public isSingleThreaded(): boolean
                                public isTransient(): boolean
                                public isPersistent(): boolean
                                public isUniqueIds(): boolean
                                public isMultipleIds(): boolean
                                public isUserAssignedIds(): boolean
                                public isSystemAssignedIds(): boolean
                                public retainServants(): boolean
                                public useActiveMapOnly(): boolean
                                public useDefaultServant(): boolean
                                public useServantManager(): boolean
                                public isImplicitlyActivated(): boolean
                                public servantCachingLevel(): int
                                public forceZeroPort(): boolean
                                public getCopierId(): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}