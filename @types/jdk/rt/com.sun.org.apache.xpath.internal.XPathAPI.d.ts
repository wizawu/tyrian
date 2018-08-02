declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class XPathAPI {
                            public constructor()
                            public static selectSingleNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.Node
                            public static selectSingleNode(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: org.w3c.dom.Node): org.w3c.dom.Node
                            public static selectNodeIterator(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.traversal.NodeIterator
                            public static selectNodeIterator(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: org.w3c.dom.Node): org.w3c.dom.traversal.NodeIterator
                            public static selectNodeList(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): org.w3c.dom.NodeList
                            public static selectNodeList(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: org.w3c.dom.Node): org.w3c.dom.NodeList
                            public static eval(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): com.sun.org.apache.xpath.internal.objects.XObject
                            public static eval(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: org.w3c.dom.Node): com.sun.org.apache.xpath.internal.objects.XObject
                            public static eval(arg0: org.w3c.dom.Node, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.utils.PrefixResolver): com.sun.org.apache.xpath.internal.objects.XObject
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}