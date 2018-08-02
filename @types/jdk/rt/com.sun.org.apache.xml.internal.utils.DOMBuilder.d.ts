declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class DOMBuilder implements org.xml.sax.ContentHandler , org.xml.sax.ext.LexicalHandler {
                                public m_doc: org.w3c.dom.Document
                                protected m_currentNode: org.w3c.dom.Node
                                protected m_root: org.w3c.dom.Node
                                protected m_nextSibling: org.w3c.dom.Node
                                public m_docFrag: org.w3c.dom.DocumentFragment
                                protected m_elemStack: java.util.Stack
                                protected m_inCData: boolean
                                public constructor(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.Node)
                                public constructor(arg0: org.w3c.dom.Document, arg1: org.w3c.dom.DocumentFragment)
                                public constructor(arg0: org.w3c.dom.Document)
                                public getRootDocument(): org.w3c.dom.Node
                                public getRootNode(): org.w3c.dom.Node
                                public getCurrentNode(): org.w3c.dom.Node
                                public setNextSibling(arg0: org.w3c.dom.Node): void
                                public getNextSibling(): org.w3c.dom.Node
                                public getWriter(): java.io.Writer
                                protected append(arg0: org.w3c.dom.Node): void
                                public setDocumentLocator(arg0: org.xml.sax.Locator): void
                                public startDocument(): void
                                public endDocument(): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public setIDAttribute(arg0: java.lang.String | string, arg1: org.w3c.dom.Element): void
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                public charactersRaw(arg0: char[], arg1: int, arg2: int): void
                                public startEntity(arg0: java.lang.String | string): void
                                public endEntity(arg0: java.lang.String | string): void
                                public entityReference(arg0: java.lang.String | string): void
                                public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public comment(arg0: char[], arg1: int, arg2: int): void
                                public startCDATA(): void
                                public endCDATA(): void
                                public cdata(arg0: char[], arg1: int, arg2: int): void
                                public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endDTD(): void
                                public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public endPrefixMapping(arg0: java.lang.String | string): void
                                public skippedEntity(arg0: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}