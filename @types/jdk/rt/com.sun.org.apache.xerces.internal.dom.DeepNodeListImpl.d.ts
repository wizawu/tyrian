declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DeepNodeListImpl implements org.w3c.dom.NodeList {
    protected rootNode: com.sun.org.apache.xerces.internal.dom.NodeImpl
    protected tagName: string
    protected changes: int
    protected nodes: java.util.Vector
    protected nsName: string
    protected enableNS: boolean
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string)
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public getLength(): int
    public item(arg0: int): org.w3c.dom.Node
    protected nextMatchingElementAfter(arg0: org.w3c.dom.Node): org.w3c.dom.Node
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}