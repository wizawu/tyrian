declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSConstraints {
    public constructor()
    public static getEmptySequence(): com.sun.org.apache.xerces.internal.impl.xs.XSParticleDecl
    public static checkTypeDerivationOk(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg2: short): boolean
    public static checkSimpleDerivationOk(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg1: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg2: short): boolean
    public static checkComplexDerivationOk(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg1: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg2: short): boolean
    public static ElementDefaultValidImmediate(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg3: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    public static fullSchemaChecking(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSGrammarBucket, arg1: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler, arg2: com.sun.org.apache.xerces.internal.impl.xs.models.CMBuilder, arg3: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
    public static checkElementDeclsConsistent(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSParticleDecl, arg2: com.sun.org.apache.xerces.internal.util.SymbolHash, arg3: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): void
    public static findElemInTable(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg2: com.sun.org.apache.xerces.internal.util.SymbolHash): void
    public static overlapUPA(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg2: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): boolean
    public static overlapUPA(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl, arg2: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): boolean
    public static overlapUPA(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.XSWildcardDecl): boolean
    public static overlapUPA(arg0: java.lang.Object, arg1: java.lang.Object, arg2: com.sun.org.apache.xerces.internal.impl.xs.SubstitutionGroupHandler): boolean
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