declare namespace org {
    namespace w3c {
        namespace dom {
            namespace xpath {
                interface XPathResult {
                    ANY_TYPE: short
                    NUMBER_TYPE: short
                    STRING_TYPE: short
                    BOOLEAN_TYPE: short
                    UNORDERED_NODE_ITERATOR_TYPE: short
                    ORDERED_NODE_ITERATOR_TYPE: short
                    UNORDERED_NODE_SNAPSHOT_TYPE: short
                    ORDERED_NODE_SNAPSHOT_TYPE: short
                    ANY_UNORDERED_NODE_TYPE: short
                    FIRST_ORDERED_NODE_TYPE: short
                    getResultType(): short
                    getNumberValue(): double
                    getStringValue(): string
                    getBooleanValue(): boolean
                    getSingleNodeValue(): org.w3c.dom.Node
                    getInvalidIteratorState(): boolean
                    getSnapshotLength(): int
                    iterateNext(): org.w3c.dom.Node
                    snapshotItem(arg0: int): org.w3c.dom.Node
                }
            }
        }
    }
}