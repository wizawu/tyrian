declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            interface XMLDTDHandler {
                                CONDITIONAL_INCLUDE: short
                                CONDITIONAL_IGNORE: short
                                startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                startParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endParameterEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                ignoredCharacters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                setDTDSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource): void
                                getDTDSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                            }
                        }
                    }
                }
            }
        }
    }
}