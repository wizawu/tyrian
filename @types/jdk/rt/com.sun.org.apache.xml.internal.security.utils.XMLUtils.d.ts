declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace utils {
                                class XMLUtils {
                                    public static setDsPrefix(arg0: java.lang.String | string): void
                                    public static setDs11Prefix(arg0: java.lang.String | string): void
                                    public static setXencPrefix(arg0: java.lang.String | string): void
                                    public static setXenc11Prefix(arg0: java.lang.String | string): void
                                    public static getNextElement(arg0: org.w3c.dom.Node): org.w3c.dom.Element
                                    public static getSet(arg0: org.w3c.dom.Node, arg1: java.util.Set<org.w3c.dom.Node>, arg2: org.w3c.dom.Node, arg3: boolean): void
                                    public static outputDOM(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream): void
                                    public static outputDOM(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream, arg2: boolean): void
                                    public static outputDOMc14nWithComments(arg0: org.w3c.dom.Node, arg1: java.io.OutputStream): void
                                    public static getFullTextChildrenFromElement(arg0: org.w3c.dom.Element): string
                                    public static createElementInSignatureSpace(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInSignature11Space(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInEncryptionSpace(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static createElementInEncryption11Space(arg0: org.w3c.dom.Document, arg1: java.lang.String | string): org.w3c.dom.Element
                                    public static elementIsInSignatureSpace(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInSignature11Space(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInEncryptionSpace(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static elementIsInEncryption11Space(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): boolean
                                    public static getOwnerDocument(arg0: org.w3c.dom.Node): org.w3c.dom.Document
                                    public static getOwnerDocument(arg0: java.util.Set<org.w3c.dom.Node>): org.w3c.dom.Document
                                    public static createDSctx(arg0: org.w3c.dom.Document, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element
                                    public static addReturnToElement(arg0: org.w3c.dom.Element): void
                                    public static addReturnToElement(arg0: org.w3c.dom.Document, arg1: com.sun.org.apache.xml.internal.security.utils.HelperNodeList): void
                                    public static addReturnBeforeChild(arg0: org.w3c.dom.Element, arg1: org.w3c.dom.Node): void
                                    public static convertNodelistToSet(arg0: org.w3c.dom.NodeList): java.util.Set<org.w3c.dom.Node>
                                    public static circumventBug2650(arg0: org.w3c.dom.Document): void
                                    public static selectDsNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectDs11Node(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectXencNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Element
                                    public static selectDsNodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Text
                                    public static selectDs11NodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: int): org.w3c.dom.Text
                                    public static selectNodeText(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): org.w3c.dom.Text
                                    public static selectNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int): org.w3c.dom.Element
                                    public static selectDsNodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element[]
                                    public static selectDs11Nodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Element[]
                                    public static selectNodes(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.Element[]
                                    public static excludeNodeFromSet(arg0: org.w3c.dom.Node, arg1: java.util.Set<org.w3c.dom.Node>): java.util.Set<org.w3c.dom.Node>
                                    public static getStrFromNode(arg0: org.w3c.dom.Node): string
                                    public static isDescendantOrSelf(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Node): boolean
                                    public static ignoreLineBreaks(): boolean
                                    public static getAttributeValue(arg0: org.w3c.dom.Element, arg1: java.lang.String | string): string
                                    public static protectAgainstWrappingAttack(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): boolean
                                    public static protectAgainstWrappingAttack(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Element, arg2: java.lang.String | string): boolean
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