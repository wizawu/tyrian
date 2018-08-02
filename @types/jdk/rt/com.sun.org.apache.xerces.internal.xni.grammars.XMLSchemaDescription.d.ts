declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace grammars {
                                interface XMLSchemaDescription extends com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription {
                                    CONTEXT_INCLUDE: short
                                    CONTEXT_REDEFINE: short
                                    CONTEXT_IMPORT: short
                                    CONTEXT_PREPARSE: short
                                    CONTEXT_INSTANCE: short
                                    CONTEXT_ELEMENT: short
                                    CONTEXT_ATTRIBUTE: short
                                    CONTEXT_XSITYPE: short
                                    getContextType(): short
                                    getTargetNamespace(): string
                                    getLocationHints(): java.lang.String[]
                                    getTriggeringComponent(): com.sun.org.apache.xerces.internal.xni.QName
                                    getEnclosingElementName(): com.sun.org.apache.xerces.internal.xni.QName
                                    getAttributes(): com.sun.org.apache.xerces.internal.xni.XMLAttributes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}