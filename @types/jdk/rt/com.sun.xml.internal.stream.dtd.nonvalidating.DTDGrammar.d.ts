declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace dtd {
                        namespace nonvalidating {
                            class DTDGrammar {
                                public static TOP_LEVEL_SCOPE: int
                                protected fDTDSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDSource
                                protected fDTDContentModelSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDTDContentModelSource
                                protected fCurrentElementIndex: int
                                protected fCurrentAttributeIndex: int
                                protected fReadingExternalDTD: boolean
                                protected fAttributeDecl: com.sun.xml.internal.stream.dtd.nonvalidating.XMLAttributeDecl
                                public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                                public getAttributeDeclIndex(arg0: int, arg1: java.lang.String | string): int
                                public startDTD(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[], arg4: java.lang.String | string, arg5: com.sun.org.apache.xerces.internal.xni.XMLString, arg6: com.sun.org.apache.xerces.internal.xni.XMLString, arg7: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public getSymbolTable(): com.sun.org.apache.xerces.internal.util.SymbolTable
                                public getFirstElementDeclIndex(): int
                                public getNextElementDeclIndex(arg0: int): int
                                public getElementDeclIndex(arg0: java.lang.String | string): int
                                public getElementDeclIndex(arg0: com.sun.org.apache.xerces.internal.xni.QName): int
                                public getContentSpecType(arg0: int): short
                                public getElementDecl(arg0: int, arg1: com.sun.xml.internal.stream.dtd.nonvalidating.XMLElementDecl): boolean
                                public getFirstAttributeDeclIndex(arg0: int): int
                                public getNextAttributeDeclIndex(arg0: int): int
                                public getAttributeDecl(arg0: int, arg1: com.sun.xml.internal.stream.dtd.nonvalidating.XMLAttributeDecl): boolean
                                public isCDATAAttribute(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.QName): boolean
                                public printElements(): void
                                public printAttributes(arg0: int): void
                                protected createElementDecl(): int
                                protected setElementDecl(arg0: int, arg1: com.sun.xml.internal.stream.dtd.nonvalidating.XMLElementDecl): void
                                protected setFirstAttributeDeclIndex(arg0: int, arg1: int): void
                                protected createAttributeDecl(): int
                                protected setAttributeDecl(arg0: int, arg1: int, arg2: com.sun.xml.internal.stream.dtd.nonvalidating.XMLAttributeDecl): void
                                public notationDecl(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public getNotationDecls(): java.util.List
                                public endDTD(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}