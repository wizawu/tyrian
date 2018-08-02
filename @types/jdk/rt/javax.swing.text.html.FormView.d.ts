declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class FormView extends javax.swing.text.ComponentView implements java.awt.event.ActionListener {
                    public static SUBMIT: string
                    public static RESET: string
                    public constructor(arg0: javax.swing.text.Element)
                    protected createComponent(): java.awt.Component
                    public getMaximumSpan(arg0: int): float
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    protected submitData(arg0: java.lang.String | string): void
                    protected imageSubmit(arg0: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}