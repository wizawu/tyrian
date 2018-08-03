declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLNamespaceBinder implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent , com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentFilter {
                                protected static readonly NAMESPACES: string
                                protected static readonly SYMBOL_TABLE: string
                                protected static readonly ERROR_REPORTER: string
                                protected fNamespaces: boolean
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                protected fDocumentSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                protected fOnlyPassPrefixMappingEvents: boolean
                                public constructor()
                                public setOnlyPassPrefixMappingEvents(arg0: boolean): void
                                public getOnlyPassPrefixMappingEvents(): boolean
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getRecognizedProperties(): java.lang.String[]
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
                                public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
                                public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                protected handleStartElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations, arg3: boolean): void
                                protected handleEndElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations, arg2: boolean): void
                                protected prefixBoundToNullURI(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}