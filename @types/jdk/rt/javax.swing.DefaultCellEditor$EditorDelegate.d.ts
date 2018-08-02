declare namespace javax {
    namespace swing {
class DefaultCellEditor$EditorDelegate implements java.awt.event.ActionListener , java.awt.event.ItemListener , java.io.Serializable {
    protected value: java.lang.Object
    protected constructor(arg0: javax.swing.DefaultCellEditor)
    public getCellEditorValue(): java.lang.Object
    public setValue(arg0: java.lang.Object): void
    public isCellEditable(arg0: java.util.EventObject): boolean
    public shouldSelectCell(arg0: java.util.EventObject): boolean
    public startCellEditing(arg0: java.util.EventObject): boolean
    public stopCellEditing(): boolean
    public cancelCellEditing(): void
    public actionPerformed(arg0: java.awt.event.ActionEvent): void
    public itemStateChanged(arg0: java.awt.event.ItemEvent): void
    public static class: java.lang.Class<any>
}

    }
}