declare namespace javax {
  namespace swing {

    class DefaultCellEditor extends javax.swing.AbstractCellEditor implements javax.swing.table.TableCellEditor, javax.swing.tree.TreeCellEditor {
      protected editorComponent: javax.swing.JComponent
      protected delegate: javax.swing.DefaultCellEditor$EditorDelegate
      protected clickCountToStart: int
      public constructor(arg0: javax.swing.JTextField)
      public constructor(arg0: javax.swing.JCheckBox)
      public constructor(arg0: javax.swing.JComboBox<unknown>)
      public getComponent(): java.awt.Component
      public setClickCountToStart(arg0: number | java.lang.Integer): void
      public getClickCountToStart(): number
      public getCellEditorValue(): java.lang.Object
      public isCellEditable(arg0: java.util.EventObject): boolean
      public shouldSelectCell(arg0: java.util.EventObject): boolean
      public stopCellEditing(): boolean
      public cancelCellEditing(): void
      public getTreeCellEditorComponent(arg0: javax.swing.JTree, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: boolean | java.lang.Boolean, arg5: number | java.lang.Integer): java.awt.Component
      public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): java.awt.Component
    }

  }
}
