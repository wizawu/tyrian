declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSAttributeDecl implements com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration {
    public static SCOPE_ABSENT: short
    public static SCOPE_GLOBAL: short
    public static SCOPE_LOCAL: short
    public fUnresolvedTypeName: com.sun.org.apache.xerces.internal.xni.QName
    public constructor()
    public setValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType, arg3: short, arg4: short, arg5: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo, arg6: com.sun.org.apache.xerces.internal.impl.xs.XSComplexTypeDecl, arg7: com.sun.org.apache.xerces.internal.xs.XSObjectList): void
    public reset(): void
    public getType(): short
    public getName(): string
    public getNamespace(): string
    public getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getScope(): short
    public getEnclosingCTDefinition(): com.sun.org.apache.xerces.internal.xs.XSComplexTypeDefinition
    public getConstraintType(): short
    public getConstraintValue(): string
    public getAnnotation(): com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getValInfo(): com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
    public getActualVC(): java.lang.Object
    public getActualVCType(): short
    public getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
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