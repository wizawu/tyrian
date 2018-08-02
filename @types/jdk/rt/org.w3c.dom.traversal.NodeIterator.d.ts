declare namespace org {
    namespace w3c {
        namespace dom {
            namespace traversal {
interface NodeIterator {
    getRoot(): org.w3c.dom.Node
    getWhatToShow(): int
    getFilter(): org.w3c.dom.traversal.NodeFilter
    getExpandEntityReferences(): boolean
    nextNode(): org.w3c.dom.Node
    previousNode(): org.w3c.dom.Node
    detach(): void
}

            }
        }
    }
}