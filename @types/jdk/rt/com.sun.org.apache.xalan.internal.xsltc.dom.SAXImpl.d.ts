declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                class SAXImpl extends com.sun.org.apache.xml.internal.dtm.ref.sax2dtm.SAX2DTM2 implements com.sun.org.apache.xalan.internal.xsltc.DOMEnhancedForDTM , com.sun.org.apache.xalan.internal.xsltc.dom.DOMBuilder {
                                    public setDocumentURI(arg0: java.lang.String | string): void
                                    public getDocumentURI(): string
                                    public getDocumentURI(arg0: int): string
                                    public setupMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[], arg3: java.lang.String[]): void
                                    public lookupNamespace(arg0: int, arg1: java.lang.String | string): string
                                    public isElement(arg0: int): boolean
                                    public isAttribute(arg0: int): boolean
                                    public getSize(): int
                                    public setFilter(arg0: com.sun.org.apache.xalan.internal.xsltc.StripFilter | com.sun.org.apache.xalan.internal.xsltc.StripFilter$$Lambda): void
                                    public lessThan(arg0: int, arg1: int): boolean
                                    public makeNode(arg0: int): org.w3c.dom.Node
                                    public makeNode(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.Node
                                    public makeNodeList(arg0: int): org.w3c.dom.NodeList
                                    public makeNodeList(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.NodeList
                                    public getNodeValueIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public orderNodes(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNSType(arg0: int): int
                                    public getNamespaceType(arg0: int): int
                                    public getGeneralizedType(arg0: java.lang.String | string): int
                                    public getGeneralizedType(arg0: java.lang.String | string, arg1: boolean): int
                                    public getMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[]): short[]
                                    public getReverseMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[]): int[]
                                    public getNamespaceMapping(arg0: java.lang.String[]): short[]
                                    public getReverseNamespaceMapping(arg0: java.lang.String[]): short[]
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.XSLTCDTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean, arg6: boolean)
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.XSLTCDTMManager, arg1: javax.xml.transform.Source, arg2: int, arg3: com.sun.org.apache.xml.internal.dtm.DTMWSFilter, arg4: com.sun.org.apache.xml.internal.utils.XMLStringFactory, arg5: boolean, arg6: int, arg7: boolean, arg8: boolean)
                                    public migrateTo(arg0: com.sun.org.apache.xml.internal.dtm.DTMManager): void
                                    public getElementById(arg0: java.lang.String | string): int
                                    public hasDOMSource(): boolean
                                    protected getShouldStripWhitespace(): boolean
                                    public characters(arg0: char[], arg1: int, arg2: int): void
                                    public startDocument(): void
                                    public endDocument(): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes, arg4: org.w3c.dom.Node): void
                                    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public comment(arg0: char[], arg1: int, arg2: int): void
                                    public setEscaping(arg0: boolean): boolean
                                    public print(arg0: int, arg1: int): void
                                    public getNodeName(arg0: int): string
                                    public getNamespaceName(arg0: int): string
                                    public getAttributeNode(arg0: int, arg1: int): int
                                    public getAttributeValue(arg0: int, arg1: int): string
                                    public getAttributeValue(arg0: java.lang.String | string, arg1: int): string
                                    public getChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNamespaceAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedDescendantIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNthDescendant(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public characters(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public copy(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public copy(arg0: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public copy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public shallowCopy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): string
                                    public getLanguage(arg0: int): string
                                    public getBuilder(): com.sun.org.apache.xalan.internal.xsltc.dom.DOMBuilder
                                    public getOutputDomBuilder(): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                    public getResultTreeFrag(arg0: int, arg1: int): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getResultTreeFrag(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getElementsWithIDs(): java.util.Map<java.lang.String, java.lang.Integer>
                                    public getUnparsedEntityURI(arg0: java.lang.String | string): string
                                    public release(): void
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