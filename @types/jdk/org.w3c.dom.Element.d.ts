declare namespace org {
  namespace w3c {
    namespace dom {

      interface Element extends org.w3c.dom.Node {
        getTagName(): java.lang.String
        getAttribute(arg0: java.lang.String): java.lang.String
        setAttribute(arg0: java.lang.String, arg1: java.lang.String): void
        removeAttribute(arg0: java.lang.String): void
        getAttributeNode(arg0: java.lang.String): org.w3c.dom.Attr
        setAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        removeAttributeNode(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        getElementsByTagName(arg0: java.lang.String): org.w3c.dom.NodeList
        getAttributeNS(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        setAttributeNS(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
        removeAttributeNS(arg0: java.lang.String, arg1: java.lang.String): void
        getAttributeNodeNS(arg0: java.lang.String, arg1: java.lang.String): org.w3c.dom.Attr
        setAttributeNodeNS(arg0: org.w3c.dom.Attr): org.w3c.dom.Attr
        getElementsByTagNameNS(arg0: java.lang.String, arg1: java.lang.String): org.w3c.dom.NodeList
        hasAttribute(arg0: java.lang.String): boolean
        hasAttributeNS(arg0: java.lang.String, arg1: java.lang.String): boolean
        getSchemaTypeInfo(): org.w3c.dom.TypeInfo
        setIdAttribute(arg0: java.lang.String, arg1: boolean): void
        setIdAttributeNS(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean): void
        setIdAttributeNode(arg0: org.w3c.dom.Attr, arg1: boolean): void
      }

    }
  }
}
