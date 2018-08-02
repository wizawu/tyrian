declare namespace javax {
    namespace swing {
        namespace event {
interface DocumentEvent$ElementChange {
    getElement(): javax.swing.text.Element
    getIndex(): int
    getChildrenRemoved(): javax.swing.text.Element[]
    getChildrenAdded(): javax.swing.text.Element[]
}

        }
    }
}