declare namespace javax {
    namespace imageio {
        namespace metadata {
            class IIONamedNodeMap implements org.w3c.dom.NamedNodeMap {
                public constructor(arg0: java.util.List)
                public getLength(): int
                public getNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
                public item(arg0: int): org.w3c.dom.Node
                public removeNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
                public setNamedItem(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                public getNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
                public setNamedItemNS(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                public removeNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
                public static class: java.lang.Class<any>
            }
        }
    }
}