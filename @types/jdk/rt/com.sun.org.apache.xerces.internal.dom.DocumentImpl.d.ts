declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DocumentImpl extends com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl implements org.w3c.dom.traversal.DocumentTraversal , org.w3c.dom.events.DocumentEvent , org.w3c.dom.ranges.DocumentRange {
    protected iterators: java.util.List<org.w3c.dom.traversal.NodeIterator>
    protected ranges: java.util.List<org.w3c.dom.ranges.Range>
    protected eventListeners: java.util.Map<com.sun.org.apache.xerces.internal.dom.NodeImpl, java.util.List<com.sun.org.apache.xerces.internal.dom.DocumentImpl$LEntry>>
    protected mutationEvents: boolean
    public constructor()
    public constructor(arg0: boolean)
    public constructor(arg0: org.w3c.dom.DocumentType)
    public constructor(arg0: org.w3c.dom.DocumentType, arg1: boolean)
    public cloneNode(arg0: boolean): org.w3c.dom.Node
    public getImplementation(): org.w3c.dom.DOMImplementation
    public createNodeIterator(arg0: org.w3c.dom.Node, arg1: short, arg2: org.w3c.dom.traversal.NodeFilter): org.w3c.dom.traversal.NodeIterator
    public createNodeIterator(arg0: org.w3c.dom.Node, arg1: int, arg2: org.w3c.dom.traversal.NodeFilter, arg3: boolean): org.w3c.dom.traversal.NodeIterator
    public createTreeWalker(arg0: org.w3c.dom.Node, arg1: short, arg2: org.w3c.dom.traversal.NodeFilter): org.w3c.dom.traversal.TreeWalker
    public createTreeWalker(arg0: org.w3c.dom.Node, arg1: int, arg2: org.w3c.dom.traversal.NodeFilter, arg3: boolean): org.w3c.dom.traversal.TreeWalker
    public createRange(): org.w3c.dom.ranges.Range
    public createEvent(arg0: java.lang.String | string): org.w3c.dom.events.Event
    protected addEventListener(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string, arg2: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg3: boolean): void
    protected removeEventListener(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: java.lang.String | string, arg2: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$Lambda, arg3: boolean): void
    protected copyEventListeners(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: com.sun.org.apache.xerces.internal.dom.NodeImpl): void
    protected dispatchEvent(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: org.w3c.dom.events.Event): boolean
    protected dispatchEventToSubtree(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.events.Event): void
    protected dispatchingEventToSubtree(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.events.Event): void
    protected dispatchAggregateEvents(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: com.sun.org.apache.xerces.internal.dom.DocumentImpl$EnclosingAttr): void
    protected dispatchAggregateEvents(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl, arg1: com.sun.org.apache.xerces.internal.dom.AttrImpl, arg2: java.lang.String | string, arg3: short): void
    protected saveEnclosingAttr(arg0: com.sun.org.apache.xerces.internal.dom.NodeImpl): void
    public static class: java.lang.Class<any>
}

class DocumentImpl$$Lambda extends com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl implements org.w3c.dom.traversal.DocumentTraversal , org.w3c.dom.events.DocumentEvent , org.w3c.dom.ranges.DocumentRange {
    protected iterators: java.util.List<org.w3c.dom.traversal.NodeIterator>
}

                        }
                    }
                }
            }
        }
    }
}