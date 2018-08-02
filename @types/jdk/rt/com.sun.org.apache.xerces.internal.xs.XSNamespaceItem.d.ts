declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSNamespaceItem {
                                getSchemaNamespace(): string
                                getComponents(arg0: short): com.sun.org.apache.xerces.internal.xs.XSNamedMap
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getElementDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                getAttributeDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
                                getTypeDefinition(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                getAttributeGroup(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition
                                getModelGroupDefinition(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModelGroupDefinition
                                getNotationDeclaration(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
                                getDocumentLocations(): com.sun.org.apache.xerces.internal.xs.StringList
                            }
                        }
                    }
                }
            }
        }
    }
}