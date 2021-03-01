declare namespace javax {
  namespace swing {
    namespace text {

      abstract class StyledEditorKit$StyledTextAction extends javax.swing.text.TextAction {

        public constructor(arg0: java.lang.String)
        protected readonly getEditor(arg0: java.awt.event.ActionEvent): javax.swing.JEditorPane
        protected readonly getStyledDocument(arg0: javax.swing.JEditorPane): javax.swing.text.StyledDocument
        protected readonly getStyledEditorKit(arg0: javax.swing.JEditorPane): javax.swing.text.StyledEditorKit
        protected readonly setCharacterAttributes(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.AttributeSet, arg2: boolean): void
        protected readonly setParagraphAttributes(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.AttributeSet, arg2: boolean): void
      }

    }
  }
}
