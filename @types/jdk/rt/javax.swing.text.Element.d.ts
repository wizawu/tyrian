declare namespace javax {
    namespace swing {
        namespace text {
interface Element {
    getDocument(): javax.swing.text.Document
    getParentElement(): javax.swing.text.Element
    getName(): string
    getAttributes(): javax.swing.text.AttributeSet
    getStartOffset(): int
    getEndOffset(): int
    getElementIndex(arg0: int): int
    getElementCount(): int
    getElement(arg0: int): javax.swing.text.Element
    isLeaf(): boolean
}

        }
    }
}