declare namespace javax {
    namespace swing {
        namespace text {
            abstract class TextAction extends javax.swing.AbstractAction {
                public constructor(arg0: java.lang.String | string)
                protected getTextComponent(arg0: java.awt.event.ActionEvent): javax.swing.text.JTextComponent
                public static augmentList(arg0: javax.swing.Action[], arg1: javax.swing.Action[]): javax.swing.Action[]
                protected getFocusedComponent(): javax.swing.text.JTextComponent
                public static class: java.lang.Class<any>
            }
        }
    }
}