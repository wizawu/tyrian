declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace traversers {
class XSDocumentInfo {
    protected fNamespaceSupport: com.sun.org.apache.xerces.internal.impl.xs.SchemaNamespaceSupport
    protected fNamespaceSupportRoot: com.sun.org.apache.xerces.internal.impl.xs.SchemaNamespaceSupport
    protected SchemaNamespaceSupportStack: java.util.Stack
    protected fAreLocalAttributesQualified: boolean
    protected fAreLocalElementsQualified: boolean
    protected fBlockDefault: short
    protected fFinalDefault: short
    protected fIsChameleonSchema: boolean
    protected fSchemaElement: org.w3c.dom.Element
    protected fValidationContext: com.sun.org.apache.xerces.internal.impl.validation.ValidationState
    protected fAttrChecker: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSAttributeChecker
    protected fSchemaAttrs: java.lang.Object[]
    protected fAnnotations: com.sun.org.apache.xerces.internal.impl.xs.traversers.XSAnnotationInfo
    public toString(): string
    public addAllowedNS(arg0: java.lang.String | string): void
    public isAllowedNS(arg0: java.lang.String | string): boolean
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