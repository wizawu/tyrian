declare namespace org {
    namespace w3c {
        namespace dom {
            namespace traversal {
                interface DocumentTraversal {
                    createNodeIterator(arg0: org.w3c.dom.Node, arg1: int, arg2: org.w3c.dom.traversal.NodeFilter | org.w3c.dom.traversal.NodeFilter$$Lambda, arg3: boolean): org.w3c.dom.traversal.NodeIterator
                    createTreeWalker(arg0: org.w3c.dom.Node, arg1: int, arg2: org.w3c.dom.traversal.NodeFilter | org.w3c.dom.traversal.NodeFilter$$Lambda, arg3: boolean): org.w3c.dom.traversal.TreeWalker
                }
            }
        }
    }
}