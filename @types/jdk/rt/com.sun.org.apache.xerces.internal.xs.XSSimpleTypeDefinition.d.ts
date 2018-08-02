declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSSimpleTypeDefinition extends com.sun.org.apache.xerces.internal.xs.XSTypeDefinition {
                                VARIETY_ABSENT: short
                                VARIETY_ATOMIC: short
                                VARIETY_LIST: short
                                VARIETY_UNION: short
                                FACET_NONE: short
                                FACET_LENGTH: short
                                FACET_MINLENGTH: short
                                FACET_MAXLENGTH: short
                                FACET_PATTERN: short
                                FACET_WHITESPACE: short
                                FACET_MAXINCLUSIVE: short
                                FACET_MAXEXCLUSIVE: short
                                FACET_MINEXCLUSIVE: short
                                FACET_MININCLUSIVE: short
                                FACET_TOTALDIGITS: short
                                FACET_FRACTIONDIGITS: short
                                FACET_ENUMERATION: short
                                ORDERED_FALSE: short
                                ORDERED_PARTIAL: short
                                ORDERED_TOTAL: short
                                getVariety(): short
                                getPrimitiveType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
                                getBuiltInKind(): short
                                getItemType(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
                                getMemberTypes(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getDefinedFacets(): short
                                isDefinedFacet(arg0: short): boolean
                                getFixedFacets(): short
                                isFixedFacet(arg0: short): boolean
                                getLexicalFacetValue(arg0: short): string
                                getLexicalEnumeration(): com.sun.org.apache.xerces.internal.xs.StringList
                                getLexicalPattern(): com.sun.org.apache.xerces.internal.xs.StringList
                                getOrdered(): short
                                getFinite(): boolean
                                getBounded(): boolean
                                getNumeric(): boolean
                                getFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getMultiValueFacets(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}