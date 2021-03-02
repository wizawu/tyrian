declare namespace org {
  namespace w3c {
    namespace dom {
      namespace xpath {

        interface XPathResult {
          public static readonly ANY_TYPE: short
          public static readonly NUMBER_TYPE: short
          public static readonly STRING_TYPE: short
          public static readonly BOOLEAN_TYPE: short
          public static readonly UNORDERED_NODE_ITERATOR_TYPE: short
          public static readonly ORDERED_NODE_ITERATOR_TYPE: short
          public static readonly UNORDERED_NODE_SNAPSHOT_TYPE: short
          public static readonly ORDERED_NODE_SNAPSHOT_TYPE: short
          public static readonly ANY_UNORDERED_NODE_TYPE: short
          public static readonly FIRST_ORDERED_NODE_TYPE: short
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
