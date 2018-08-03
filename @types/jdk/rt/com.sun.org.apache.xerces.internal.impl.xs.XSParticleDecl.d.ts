declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                class XSParticleDecl implements com.sun.org.apache.xerces.internal.xs.XSParticle {
                                    public static readonly PARTICLE_EMPTY: short
                                    public static readonly PARTICLE_ELEMENT: short
                                    public static readonly PARTICLE_WILDCARD: short
                                    public static readonly PARTICLE_MODELGROUP: short
                                    public static readonly PARTICLE_ZERO_OR_MORE: short
                                    public static readonly PARTICLE_ZERO_OR_ONE: short
                                    public static readonly PARTICLE_ONE_OR_MORE: short
                                    public fType: short
                                    public fValue: com.sun.org.apache.xerces.internal.xs.XSTerm
                                    public fMinOccurs: int
                                    public fMaxOccurs: int
                                    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public constructor()
                                    public makeClone(): com.sun.org.apache.xerces.internal.impl.xs.XSParticleDecl
                                    public emptiable(): boolean
                                    public isEmpty(): boolean
                                    public minEffectiveTotalRange(): int
                                    public maxEffectiveTotalRange(): int
                                    public toString(): string
                                    public reset(): void
                                    public getType(): short
                                    public getName(): string
                                    public getNamespace(): string
                                    public getMinOccurs(): int
                                    public getMaxOccursUnbounded(): boolean
                                    public getMaxOccurs(): int
                                    public getTerm(): com.sun.org.apache.xerces.internal.xs.XSTerm
                                    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
                                    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}