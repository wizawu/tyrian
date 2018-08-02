declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dv {
                                namespace xs {
class XSSimpleTypeDecl implements com.sun.org.apache.xerces.internal.impl.dv.XSSimpleType , org.w3c.dom.TypeInfo {
    protected static DV_STRING: short
    protected static DV_BOOLEAN: short
    protected static DV_DECIMAL: short
    protected static DV_FLOAT: short
    protected static DV_DOUBLE: short
    protected static DV_DURATION: short
    protected static DV_DATETIME: short
    protected static DV_TIME: short
    protected static DV_DATE: short
    protected static DV_GYEARMONTH: short
    protected static DV_GYEAR: short
    protected static DV_GMONTHDAY: short
    protected static DV_GDAY: short
    protected static DV_GMONTH: short
    protected static DV_HEXBINARY: short
    protected static DV_BASE64BINARY: short
    protected static DV_ANYURI: short
    protected static DV_QNAME: short
    protected static DV_PRECISIONDECIMAL: short
    protected static DV_NOTATION: short
    protected static DV_ANYSIMPLETYPE: short
    protected static DV_ID: short
    protected static DV_IDREF: short
    protected static DV_ENTITY: short
    protected static DV_INTEGER: short
    protected static DV_LIST: short
    protected static DV_UNION: short
    protected static DV_YEARMONTHDURATION: short
    protected static DV_DAYTIMEDURATION: short
    protected static DV_ANYATOMICTYPE: short
    public static YEARMONTHDURATION_DT: short
    public static DAYTIMEDURATION_DT: short
    public static PRECISIONDECIMAL_DT: short
    public static ANYATOMICTYPE_DT: short
    public lengthAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public minLengthAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public maxLengthAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public whiteSpaceAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public totalDigitsAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public fractionDigitsAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public patternAnnotations: com.sun.org.apache.xerces.internal.impl.xs.util.XSObjectListImpl
    public enumerationAnnotations: com.sun.org.apache.xerces.internal.xs.XSObjectList
    public maxInclusiveAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public maxExclusiveAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public minInclusiveAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    public minExclusiveAnnotation: com.sun.org.apache.xerces.internal.xs.XSAnnotation
    protected static getGDVs(): com.sun.org.apache.xerces.internal.impl.dv.xs.TypeValidator[]
    protected setDVs(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.TypeValidator[]): void
    public constructor()
    protected constructor(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg1: java.lang.String | string, arg2: short, arg3: short, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: short)
    protected constructor(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: short, arg4: boolean, arg5: com.sun.org.apache.xerces.internal.xs.XSObjectList, arg6: short)
    protected constructor(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: short, arg4: boolean, arg5: com.sun.org.apache.xerces.internal.xs.XSObjectList)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg4: boolean, arg5: com.sun.org.apache.xerces.internal.xs.XSObjectList)
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl[], arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList)
    protected setRestrictionValues(arg0: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: short, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl
    protected setListValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl, arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl
    protected setUnionValues(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl[], arg4: com.sun.org.apache.xerces.internal.xs.XSObjectList): com.sun.org.apache.xerces.internal.impl.dv.xs.XSSimpleTypeDecl
    public getType(): short
    public getTypeCategory(): short
    public getName(): string
    public getTypeName(): string
    public getNamespace(): string
    public getFinal(): short
    public isFinal(arg0: short): boolean
    public getBaseType(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getAnonymous(): boolean
    public getVariety(): short
    public isIDType(): boolean
    public getWhitespace(): short
    public getPrimitiveKind(): short
    public getBuiltInKind(): short
    public getPrimitiveType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getItemType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    public getMemberTypes(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public applyFacets(arg0: com.sun.org.apache.xerces.internal.impl.dv.XSFacets, arg1: short, arg2: short, arg3: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext): void
    public validate(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    protected getActualEnumValue(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo
    public validateWithInfo(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo
    public validate(arg0: java.lang.Object, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg2: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): java.lang.Object
    public validate(arg0: com.sun.org.apache.xerces.internal.impl.dv.ValidationContext, arg1: com.sun.org.apache.xerces.internal.impl.dv.ValidatedInfo): void
    public isEqual(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public isIdentical(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public static normalize(arg0: java.lang.String | string, arg1: short): string
    protected normalize(arg0: java.lang.Object, arg1: short): string
    public getOrdered(): short
    public getBounded(): boolean
    public getFinite(): boolean
    public getNumeric(): boolean
    public isDefinedFacet(arg0: short): boolean
    public getDefinedFacets(): short
    public isFixedFacet(arg0: short): boolean
    public getFixedFacets(): short
    public getLexicalFacetValue(arg0: short): string
    public getLexicalEnumeration(): com.sun.org.apache.xerces.internal.xs.StringList
    public getActualEnumeration(): com.sun.org.apache.xerces.internal.xs.datatypes.ObjectList
    public getEnumerationItemTypeList(): com.sun.org.apache.xerces.internal.xs.datatypes.ObjectList
    public getEnumerationTypeList(): com.sun.org.apache.xerces.internal.xs.ShortList
    public getLexicalPattern(): com.sun.org.apache.xerces.internal.xs.StringList
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public derivedFromType(arg0: com.sun.org.apache.xerces.internal.xs.XSTypeDefinition, arg1: short): boolean
    public derivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: short): boolean
    public isDOMDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
    public reset(): void
    public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
    public setNamespaceItem(arg0: com.sun.org.apache.xerces.internal.xs.XSNamespaceItem): void
    public toString(): string
    public getFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getMultiValueFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getMinInclusiveValue(): java.lang.Object
    public getMinExclusiveValue(): java.lang.Object
    public getMaxInclusiveValue(): java.lang.Object
    public getMaxExclusiveValue(): java.lang.Object
    public setAnonymous(arg0: boolean): void
    public getTypeNamespace(): string
    public isDerivedFrom(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): boolean
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