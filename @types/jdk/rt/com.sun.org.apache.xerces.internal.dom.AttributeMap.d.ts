declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            class AttributeMap extends com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl {
                                protected constructor(arg0: com.sun.org.apache.xerces.internal.dom.ElementImpl, arg1: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl)
                                public setNamedItem(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public setNamedItemNS(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                                public removeNamedItem(arg0: java.lang.String | string): org.w3c.dom.Node
                                protected removeItem(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
                                protected internalRemoveNamedItem(arg0: java.lang.String | string, arg1: boolean): org.w3c.dom.Node
                                public removeNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Node
                                protected internalRemoveNamedItemNS(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): org.w3c.dom.Node
                                public cloneMap(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl): com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl
                                protected cloneContent(arg0: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl): void
                                protected reconcileDefaults(arg0: com.sun.org.apache.xerces.internal.dom.NamedNodeMapImpl): void
                                protected addItem(arg0: org.w3c.dom.Node): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}