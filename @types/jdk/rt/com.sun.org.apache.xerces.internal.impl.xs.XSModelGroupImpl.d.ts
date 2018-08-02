declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSModelGroupImpl implements com.sun.org.apache.xerces.internal.xs.XSModelGroup {
    public static MODELGROUP_CHOICE: short
    public static MODELGROUP_SEQUENCE: short
    public static MODELGROUP_ALL: short
    public fCompositor: short
    public fParticles: com.sun.org.apache.xerces.internal.impl.xs.XSParticleDecl[]
    public fParticleCount: int
    public fAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
    public constructor()
    public isEmpty(): boolean
    public minEffectiveTotalRange(): int
    public maxEffectiveTotalRange(): int
    public toString(): string
    public reset(): void
    public getType(): short
    public getName(): string
    public getNamespace(): string
    public getCompositor(): short
    public getParticles(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
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