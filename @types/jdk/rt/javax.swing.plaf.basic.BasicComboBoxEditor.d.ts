declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicComboBoxEditor implements javax.swing.ComboBoxEditor , java.awt.event.FocusListener {
                    protected editor: javax.swing.JTextField
                    public constructor()
                    public getEditorComponent(): java.awt.Component
                    protected createEditorComponent(): javax.swing.JTextField
                    public setItem(arg0: java.lang.Object): void
                    public getItem(): java.lang.Object
                    public selectAll(): void
                    public focusGained(arg0: java.awt.event.FocusEvent): void
                    public focusLost(arg0: java.awt.event.FocusEvent): void
                    public addActionListener(arg0: java.awt.event.ActionListener): void
                    public removeActionListener(arg0: java.awt.event.ActionListener): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}