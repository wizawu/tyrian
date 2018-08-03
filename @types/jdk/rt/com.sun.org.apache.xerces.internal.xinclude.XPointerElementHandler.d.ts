declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xinclude {
                            class XPointerElementHandler implements com.sun.org.apache.xerces.internal.xinclude.XPointerSchema {
                                protected static readonly ERROR_REPORTER: string
                                protected static readonly GRAMMAR_POOL: string
                                protected static readonly ENTITY_RESOLVER: string
                                protected static readonly XPOINTER_SCHEMA: string
                                protected fDocumentHandler: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                protected fDocumentSource: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                protected fParentXIncludeHandler: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler
                                protected fDocLocation: com.sun.org.apache.xerces.internal.xni.XMLLocator
                                protected fNamespaceContext: com.sun.org.apache.xerces.internal.xinclude.XIncludeNamespaceSupport
                                protected fErrorReporter: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter
                                protected fGrammarPool: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                protected fGrammarDesc: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription
                                protected fDTDGrammar: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
                                protected fEntityResolver: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver
                                protected fSettings: com.sun.org.apache.xerces.internal.util.ParserConfigurationSettings
                                protected fPointer: java.lang.StringBuffer
                                public constructor()
                                public reset(): void
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getRecognizedProperties(): java.lang.String[]
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
                                public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
                                public setXPointerSchemaName(arg0: java.lang.String | string): void
                                public getXpointerSchemaName(): string
                                public setParent(arg0: java.lang.Object): void
                                public getParent(): java.lang.Object
                                public setXPointerSchemaPointer(arg0: java.lang.String | string): void
                                public getXPointerSchemaPointer(): string
                                public isSubResourceIndentified(): boolean
                                public getTokens(): void
                                public hasMoreToken(): boolean
                                public getNextToken(): boolean
                                public checkStringToken(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): boolean
                                public checkIntegerToken(arg0: com.sun.org.apache.xerces.internal.xni.QName): boolean
                                public addQName(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                                public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public doctypeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public xmlDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier, arg2: java.lang.String | string, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public textDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endGeneralEntity(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                public setDocumentSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource): void
                                public getDocumentSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource
                                protected reportFatalError(arg0: java.lang.String | string): void
                                protected reportFatalError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
                                protected isRootDocument(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}