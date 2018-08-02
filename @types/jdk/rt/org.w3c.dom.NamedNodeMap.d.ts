declare namespace org {
    namespace w3c {
        namespace dom {
            interface NamedNodeMap {
                getNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
                setNamedItem(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                removeNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
                item(arg0: int): org.w3c.dom.Node
                getLength(): int
                getNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
                setNamedItemNS(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                removeNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
            }
        }
    }
}