declare namespace javax {
  namespace swing {
    namespace text {

      abstract class StyledEditorKit$StyledTextAction extends javax.swing.text.TextAction {
        public constructor(arg0: java.lang.String | string)
        protected getEditor(arg0: java.awt.event.ActionEvent): javax.swing.JEditorPane
        protected getStyledDocument(arg0: javax.swing.JEditorPane): javax.swing.text.StyledDocument
        protected getStyledEditorKit(arg0: javax.swing.JEditorPane): javax.swing.text.StyledEditorKit
        protected setCharacterAttributes(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.AttributeSet, arg2: boolean | java.lang.Boolean): void
        protected setParagraphAttributes(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.AttributeSet, arg2: boolean | java.lang.Boolean): void
      }

    }
  }
}
