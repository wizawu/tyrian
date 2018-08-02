declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
abstract class BaseSchemaDVFactory extends com.sun.org.apache.xerces.internal.impl.dv.SchemaDVFactory {
    protected fDeclPool: com.sun.org.apache.xerces.internal.impl.xs.XSDeclarationPool
    public constructor()
    protected static createBuiltInTypes(arg0: com.sun.org.apache.xerces.internal.util.SymbolHash, arg1: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl): void
    public createTypeRestriction(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
    public createTypeList(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
    public createTypeUnion(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType[], arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
    public setDeclPool(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSDeclarationPool): void
    public newXSSimpleTypeDecl(): com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl
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
}