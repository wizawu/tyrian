declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
interface DOM {
    FIRST_TYPE: int
    NO_TYPE: int
    NULL: int
    RETURN_CURRENT: int
    RETURN_PARENT: int
    SIMPLE_RTF: int
    ADAPTIVE_RTF: int
    TREE_RTF: int
    getIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getStringValue(): string
    getChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getTypedChildren(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getAxisIterator(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getTypedAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getNthDescendant(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getNamespaceAxisIterator(arg0: int, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getNodeValueIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    orderNodes(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
    getNodeName(arg0: int): string
    getNodeNameX(arg0: int): string
    getNamespaceName(arg0: int): string
    getExpandedTypeID(arg0: int): int
    getNamespaceType(arg0: int): int
    getParent(arg0: int): int
    getAttributeNode(arg0: int, arg1: int): int
    getStringValueX(arg0: int): string
    copy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
    copy(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
    shallowCopy(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): string
    lessThan(arg0: int, arg1: int): boolean
    characters(arg0: int, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
    makeNode(arg0: int): org.w3c.dom.Node
    makeNode(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.Node
    makeNodeList(arg0: int): org.w3c.dom.NodeList
    makeNodeList(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): org.w3c.dom.NodeList
    getLanguage(arg0: int): string
    getSize(): int
    getDocumentURI(arg0: int): string
    setFilter(arg0: com.sun.org.apache.xalan.internal.xsltc.StripFilter | com.sun.org.apache.xalan.internal.xsltc.StripFilter$$Lambda): void
    setupMapping(arg0: java.lang.String[], arg1: java.lang.String[], arg2: int[], arg3: java.lang.String[]): void
    isElement(arg0: int): boolean
    isAttribute(arg0: int): boolean
    lookupNamespace(arg0: int, arg1: java.lang.String | string): string
    getNodeIdent(arg0: int): int
    getNodeHandle(arg0: int): int
    getResultTreeFrag(arg0: int, arg1: int): com.sun.org.apache.xalan.internal.xsltc.DOM
    getResultTreeFrag(arg0: int, arg1: int, arg2: boolean): com.sun.org.apache.xalan.internal.xsltc.DOM
    getOutputDomBuilder(): com.sun.org.apache.xml.internal.serializer.SerializationHandler
    getNSType(arg0: int): int
    getDocument(): int
    getUnparsedEntityURI(arg0: java.lang.String | string): string
    getElementsWithIDs(): java.util.Map<java.lang.String, java.lang.Integer>
    release(): void
}

                        }
                    }
                }
            }
        }
    }
}