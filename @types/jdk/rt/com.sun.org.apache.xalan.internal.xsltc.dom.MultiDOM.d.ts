declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                class MultiDOM implements com.sun.org.apache.xalan.internal.xsltc.DOM {
                                    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM)
                                    public nextMask(): int
                                    public setupMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[], arg3: java.lang.String[]): void
                                    public addDOMAdapter(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.DOMAdapter): int
                                    public getDocumentMask(arg0: java.lang.String | string): int
                                    public getDOMAdapter(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getDocument(): int
                                    public getDTMManager(): com.sun.org.apache.xml.internal.dtm.DTMManager
                                    public getIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getStringValue(): string
                                    public getChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNthDescendant(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNodeValueIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getNamespaceAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public orderNodes(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getExpandedTypeID(arg0: int): int
                                    public getNamespaceType(arg0: int): int
                                    public getNSType(arg0: int): int
                                    public getParent(arg0: int): int
                                    public getAttributeNode(arg0: int, arg1: int): int
                                    public getNodeName(arg0: int): string
                                    public getNodeNameX(arg0: int): string
                                    public getNamespaceName(arg0: int): string
                                    public getStringValueX(arg0: int): string
                                    public copy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public copy(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public shallowCopy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): string
                                    public lessThan(arg0: int, arg1: int): boolean
                                    public characters(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public setFilter(arg0: com.sun.org.apache.xalan.internal.xsltc.StripFilter | com.sun.org.apache.xalan.internal.xsltc.StripFilter$$Lambda): void
                                    public makeNode(arg0: int): org.w3c.dom.Node
                                    public makeNode(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.Node
                                    public makeNodeList(arg0: int): org.w3c.dom.NodeList
                                    public makeNodeList(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.NodeList
                                    public getLanguage(arg0: int): string
                                    public getSize(): int
                                    public getDocumentURI(arg0: int): string
                                    public isElement(arg0: int): boolean
                                    public isAttribute(arg0: int): boolean
                                    public getDTMId(arg0: int): int
                                    public getDTM(arg0: int): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getNodeIdent(arg0: int): int
                                    public getNodeHandle(arg0: int): int
                                    public getResultTreeFrag(arg0: int, arg1: int): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getResultTreeFrag(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getMain(): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public getOutputDomBuilder(): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                    public lookupNamespace(arg0: int, arg1: java.lang.String | string): string
                                    public getUnparsedEntityURI(arg0: java.lang.String | string): string
                                    public getElementsWithIDs(): java.util.Map<java.lang.String, java.lang.Integer>
                                    public release(): void
                                    public removeDOMAdapter(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.DOMAdapter): void
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