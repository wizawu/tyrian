declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xs {
                            interface XSModel {
                                getNamespaces(): com.sun.org.apache.xerces.internal.xs.StringList
                                getNamespaceItems(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItemList
                                getComponents(arg0: short): com.sun.org.apache.xerces.internal.xs.XSNamedMap
                                getComponentsByNamespace(arg0: short, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNamedMap
                                getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                getElementDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
                                getAttributeDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
                                getTypeDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
                                getAttributeGroup(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition
                                getModelGroupDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModelGroupDefinition
                                getNotationDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
                                getSubstitutionGroup(arg0: com.sun.org.apache.xerces.internal.xs.XSElementDeclaration): com.sun.org.apache.xerces.internal.xs.XSObjectList
                            }
                        }
                    }
                }
            }
        }
    }
}