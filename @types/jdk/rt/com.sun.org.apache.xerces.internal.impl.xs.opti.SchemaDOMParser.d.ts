declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace opti {
                                    class SchemaDOMParser extends com.sun.org.apache.xerces.internal.impl.xs.opti.DefaultXMLDocumentHandler {
                                        public static ERROR_REPORTER: string
                                        public static GENERATE_SYNTHETIC_ANNOTATION: string
                                        protected fLocator: com.sun.org.apache.xerces.internal.xni.XMLLocator
                                        protected fNamespaceContext: com.sun.org.apache.xerces.internal.xni.NamespaceContext
                                        public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
                                        public startDocument(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext, arg3: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public endDocument(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public comment(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public processingInstruction(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public characters(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public emptyElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public ignorableWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                                        public getDocument(): org.w3c.dom.Document
                                        public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                        public getFeature(arg0: java.lang.String | string): boolean
                                        public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                        public getProperty(arg0: java.lang.String | string): java.lang.Object
                                        public setEntityResolver(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver | com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver$$Lambda): void
                                        public parse(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
                                        public reset(): void
                                        public resetNodePool(): void
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