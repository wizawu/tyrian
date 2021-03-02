declare namespace javax {
  namespace swing {
    namespace text {

      interface Element {
        getDocument(): javax.swing.text.Document
        getParentElement(): javax.swing.text.Element
        getName(): java.lang.String
        getAttributes(): javax.swing.text.AttributeSet
        getStartOffset(): number
        getEndOffset(): number
        getElementIndex(arg0: number | java.lang.Integer): number
        getElementCount(): number
        getElement(arg0: number | java.lang.Integer): javax.swing.text.Element
        isLeaf(): boolean
      }

    }
  }
}
