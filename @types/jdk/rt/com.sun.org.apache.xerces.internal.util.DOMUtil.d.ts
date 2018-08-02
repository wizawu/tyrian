declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class DOMUtil {
                                protected constructor()
                                public static copyInto(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): void
                                public static getFirstChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getFirstVisibleChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getFirstVisibleChildElement(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): org.w3c.dom.Element
                                public static getLastChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getLastVisibleChildElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getLastVisibleChildElement(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): org.w3c.dom.Element
                                public static getNextSiblingElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getNextVisibleSiblingElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                public static getNextVisibleSiblingElement(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): org.w3c.dom.Element
                                public static setHidden(arg0: org.w3c.dom.Node): void
                                public static setHidden(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): void
                                public static setVisible(arg0: org.w3c.dom.Node): void
                                public static setVisible(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): void
                                public static isHidden(arg0: org.w3c.dom.Node): boolean
                                public static isHidden(arg0: org.w3c.dom.Node, arg1: java.util.Map<org.w3c.dom.Node, java.lang.String>): boolean
                                public static getFirstChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                                public static getLastChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                                public static getNextSiblingElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element
                                public static getFirstChildElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                public static getLastChildElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                public static getNextSiblingElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                public static getFirstChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String[]): org.w3c.dom.Element
                                public static getLastChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String[]): org.w3c.dom.Element
                                public static getNextSiblingElement(arg0: org.w3c.dom.Node, arg1: java.lang.String[]): org.w3c.dom.Element
                                public static getFirstChildElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String[][]): org.w3c.dom.Element
                                public static getLastChildElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String[][]): org.w3c.dom.Element
                                public static getNextSiblingElementNS(arg0: org.w3c.dom.Node, arg1: java.lang.String[][]): org.w3c.dom.Element
                                public static getFirstChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.w3c.dom.Element
                                public static getLastChildElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.w3c.dom.Element
                                public static getNextSiblingElement(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.w3c.dom.Element
                                public static getChildText(arg0: org.w3c.dom.Node): string
                                public static getName(arg0: org.w3c.dom.Node): string
                                public static getLocalName(arg0: org.w3c.dom.Node): string
                                public static getParent(arg0: org.w3c.dom.Element): org.w3c.dom.Element
                                public static getDocument(arg0: org.w3c.dom.Node): org.w3c.dom.Document
                                public static getRoot(arg0: org.w3c.dom.Document): org.w3c.dom.Element
                                public static getAttr(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): org.w3c.dom.Attr
                                public static getAttrNS(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Attr
                                public static getAttrs(arg0: org.w3c.dom.Element): org.w3c.dom.Attr[]
                                public static getValue(arg0: org.w3c.dom.Attr): string
                                public static getAttrValue(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                                public static getAttrValueNS(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                public static getPrefix(arg0: org.w3c.dom.Node): string
                                public static getNamespaceURI(arg0: org.w3c.dom.Node): string
                                public static getAnnotation(arg0: org.w3c.dom.Node): string
                                public static getSyntheticAnnotation(arg0: org.w3c.dom.Node): string
                                public static createDOMException(arg0: short, arg1: java.lang.Throwable): org.w3c.dom.DOMException
                                public static createLSException(arg0: short, arg1: java.lang.Throwable): org.w3c.dom.ls.LSException
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}