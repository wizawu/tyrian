declare namespace org {
  namespace w3c {
    namespace dom {
      namespace xpath {
        interface XPathResult {
          readonly ANY_TYPE: short
          readonly NUMBER_TYPE: short
          readonly STRING_TYPE: short
          readonly BOOLEAN_TYPE: short
          readonly UNORDERED_NODE_ITERATOR_TYPE: short
          readonly ORDERED_NODE_ITERATOR_TYPE: short
          readonly UNORDERED_NODE_SNAPSHOT_TYPE: short
          readonly ORDERED_NODE_SNAPSHOT_TYPE: short
          readonly ANY_UNORDERED_NODE_TYPE: short
          readonly FIRST_ORDERED_NODE_TYPE: short
          getResultType(): number
          getNumberValue(): number
          getStringValue(): java.lang.String
          getBooleanValue(): boolean
          getSingleNodeValue(): org.w3c.dom.Node
          getInvalidIteratorState(): boolean
          getSnapshotLength(): number
          iterateNext(): org.w3c.dom.Node
          snapshotItem(arg0: number | java.lang.Integer): org.w3c.dom.Node
        }
      }
    }
  }
}
