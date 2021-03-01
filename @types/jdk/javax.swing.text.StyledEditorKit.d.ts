declare namespace javax {
  namespace swing {
    namespace text {

      class StyledEditorKit extends javax.swing.text.DefaultEditorKit {

        currentRun: javax.swing.text.Element
        currentParagraph: javax.swing.text.Element
        inputAttributes: javax.swing.text.MutableAttributeSet
        public constructor()
        public getInputAttributes(): javax.swing.text.MutableAttributeSet
        public getCharacterAttributeRun(): javax.swing.text.Element
        public getActions(): javax.swing.Action[]
        public createDefaultDocument(): javax.swing.text.Document
        public install(arg0: javax.swing.JEditorPane): void
        public deinstall(arg0: javax.swing.JEditorPane): void
        public getViewFactory(): javax.swing.text.ViewFactory
        public clone(): java.lang.Object
        protected createInputAttributes(arg0: javax.swing.text.Element, arg1: javax.swing.text.MutableAttributeSet): void
      }

    }
  }
}
