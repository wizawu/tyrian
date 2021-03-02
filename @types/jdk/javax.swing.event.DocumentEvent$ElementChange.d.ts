declare namespace javax {
  namespace swing {
    namespace event {

      interface DocumentEvent$ElementChange {
        getElement(): javax.swing.text.Element
        getIndex(): number
        getChildrenRemoved(): javax.swing.text.Element[]
        getChildrenAdded(): javax.swing.text.Element[]
      }

    }
  }
}
