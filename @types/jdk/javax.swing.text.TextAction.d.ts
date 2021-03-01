declare namespace javax {
  namespace swing {
    namespace text {

      abstract class TextAction extends javax.swing.AbstractAction {

        public constructor(arg0: java.lang.String)
        protected readonly getTextComponent(arg0: java.awt.event.ActionEvent): javax.swing.text.JTextComponent
        public static readonly augmentList(arg0: javax.swing.Action[], arg1: javax.swing.Action[]): javax.swing.Action[]
        protected readonly getFocusedComponent(): javax.swing.text.JTextComponent
      }

    }
  }
}
