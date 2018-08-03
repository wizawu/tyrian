declare namespace javax {
    namespace swing {
        class DefaultCellEditor extends javax.swing.AbstractCellEditor implements javax.swing.table.TableCellEditor , javax.swing.tree.TreeCellEditor {
            protected editorComponent: javax.swing.JComponent
            protected delegate: javax.swing.DefaultCellEditor$EditorDelegate
            protected clickCountToStart: int
            public constructor(arg0: javax.swing.JTextField)
            public constructor(arg0: javax.swing.JCheckBox)
            public constructor(arg0: javax.swing.JComboBox)
            public getComponent(): java.awt.Component
            public setClickCountToStart(arg0: int): void
            public getClickCountToStart(): int
            public getCellEditorValue(): java.lang.Object
            public isCellEditable(arg0: java.util.EventObject): boolean
            public shouldSelectCell(arg0: java.util.EventObject): boolean
            public stopCellEditing(): boolean
            public cancelCellEditing(): void
            public getTreeCellEditorComponent(arg0: javax.swing.JTree, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: int): java.awt.Component
            public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
            public static class: java.lang.Class<any>
        }
    }
}