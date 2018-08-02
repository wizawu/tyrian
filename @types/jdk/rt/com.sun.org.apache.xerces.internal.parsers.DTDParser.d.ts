declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
                            abstract class DTDParser extends com.sun.org.apache.xerces.internal.parsers.XMLGrammarParser implements com.sun.org.apache.xerces.internal.xni.XMLDTDHandler , com.sun.org.apache.xerces.internal.xni.XMLDTDContentModelHandler {
                                protected fDTDScanner: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDScanner
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public getDTDGrammar(): com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
                                public startEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endExternalSubset(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startAttlist(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endAttlist(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public internalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.XMLString, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public externalEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public unparsedEntityDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startConditional(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endConditional(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startContentModel(arg0: java.lang.String | string, arg1: short): void
                                public mixedElement(arg0: java.lang.String | string): void
                                public childrenStartGroup(): void
                                public childrenElement(arg0: java.lang.String | string): void
                                public childrenSeparator(arg0: short): void
                                public childrenOccurrence(arg0: short): void
                                public childrenEndGroup(): void
                                public endContentModel(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}