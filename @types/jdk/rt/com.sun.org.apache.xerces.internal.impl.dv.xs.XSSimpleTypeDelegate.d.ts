declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
class XSSimpleTypeDelegate implements com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType {
    protected type: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType)
    public getWrappedXSSimpleType(): com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getBounded(): boolean
    public getBuiltInKind(): short
    public getDefinedFacets(): short
    public getFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getFinite(): boolean
    public getFixedFacets(): short
    public getItemType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getLexicalEnumeration(): com.sun.org.apache.xerces.internal.xs.StringList
    public getLexicalFacetValue(arg0: short): string
    public getLexicalPattern(): com.sun.org.apache.xerces.internal.xs.StringList
    public getMemberTypes(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getMultiValueFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getNumeric(): boolean
    public getOrdered(): short
    public getPrimitiveType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getVariety(): short
    public isDefinedFacet(arg0: short): boolean
    public isFixedFacet(arg0: short): boolean
    public derivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short): boolean
    public derivedFromType(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: short): boolean
    public getAnonymous(): boolean
    public getBaseType(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getFinal(): short
    public getTypeCategory(): short
    public isFinal(arg0: short): boolean
    public getName(): string
    public getNamespace(): string
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
    public getType(): short
    public applyFacets(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSFacets, arg1: short, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): void
    public getPrimitiveKind(): short
    public getWhitespace(): short
    public isEqual(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public isIDType(): boolean
    public validate(arg0: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): void
    public validate(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    public validate(arg0: java.lang.Object, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    public toString(): string
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