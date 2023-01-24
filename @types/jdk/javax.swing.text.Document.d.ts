declare namespace javax {
  namespace swing {
    namespace text {
      interface Document {
        readonly StreamDescriptionProperty: java.lang.String
        readonly TitleProperty: java.lang.String
        getLength(): number
        addDocumentListener(arg0: javax.swing.event.DocumentListener): void
        removeDocumentListener(arg0: javax.swing.event.DocumentListener): void
        addUndoableEditListener(
          arg0: javax.swing.event.UndoableEditListener | javax.swing.event.UndoableEditListener$$lambda
        ): void
        removeUndoableEditListener(
          arg0: javax.swing.event.UndoableEditListener | javax.swing.event.UndoableEditListener$$lambda
        ): void
        getProperty(arg0: java.lang.Object | any): java.lang.Object
        putProperty(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
        remove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        insertString(
          arg0: number | java.lang.Integer,
          arg1: java.lang.String | string,
          arg2: javax.swing.text.AttributeSet
        ): void
        getText(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        getText(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Segment
        ): void
        getStartPosition(): javax.swing.text.Position
        getEndPosition(): javax.swing.text.Position
        createPosition(arg0: number | java.lang.Integer): javax.swing.text.Position
        getRootElements(): javax.swing.text.Element[]
        getDefaultRootElement(): javax.swing.text.Element
        render(arg0: java.lang.Runnable | java.lang.Runnable$$lambda): void
      }
    }
  }
}
