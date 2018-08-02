declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
interface ItemPSVI {
    VALIDITY_NOTKNOWN: short
    VALIDITY_INVALID: short
    VALIDITY_VALID: short
    VALIDATION_NONE: short
    VALIDATION_PARTIAL: short
    VALIDATION_FULL: short
    getValidationContext(): string
    getValidity(): short
    getValidationAttempted(): short
    getErrorCodes(): com.sun.org.apache.xerces.internal.xs.StringList
    getSchemaNormalizedValue(): string
    getActualNormalizedValue(): java.lang.Object
    getActualNormalizedValueType(): short
    getItemValueTypes(): com.sun.org.apache.xerces.internal.xs.ShortList
    getTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    getMemberTypeDefinition(): com.sun.org.apache.xerces.internal.xs.XSSimpleTypeDefinition
    getSchemaDefault(): string
    getIsSchemaSpecified(): boolean
}

                        }
                    }
                }
            }
        }
    }
}