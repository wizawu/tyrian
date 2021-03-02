declare namespace org {
  namespace w3c {
    namespace dom {
      namespace traversal {

        interface TreeWalker {
          getRoot(): org.w3c.dom.Node
          getWhatToShow(): int
          getFilter(): org.w3c.dom.traversal.NodeFilter
          getExpandEntityReferences(): boolean
          getCurrentNode(): org.w3c.dom.Node
          setCurrentNode(arg0: org.w3c.dom.Node): void
          parentNode(): org.w3c.dom.Node
          firstChild(): org.w3c.dom.Node
          lastChild(): org.w3c.dom.Node
          previousSibling(): org.w3c.dom.Node
          nextSibling(): org.w3c.dom.Node
          previousNode(): org.w3c.dom.Node
          nextNode(): org.w3c.dom.Node
        }

      }
    }
  }
}
