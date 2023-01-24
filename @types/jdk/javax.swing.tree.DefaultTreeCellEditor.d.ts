declare namespace javax {
  namespace swing {
    namespace tree {
      class DefaultTreeCellEditor
        implements
          java.awt.event.ActionListener,
          javax.swing.tree.TreeCellEditor,
          javax.swing.event.TreeSelectionListener
      {
        protected realEditor: javax.swing.tree.TreeCellEditor
        protected renderer: javax.swing.tree.DefaultTreeCellRenderer
        protected editingContainer: java.awt.Container
        protected editingComponent: java.awt.Component
        protected canEdit: boolean
        protected offset: int
        protected tree: javax.swing.JTree
        protected lastPath: javax.swing.tree.TreePath
        protected timer: javax.swing.Timer
        protected lastRow: int
        protected borderSelectionColor: java.awt.Color
        protected editingIcon: javax.swing.Icon
        protected font: java.awt.Font
        public constructor(arg0: javax.swing.JTree, arg1: javax.swing.tree.DefaultTreeCellRenderer)
        public constructor(
          arg0: javax.swing.JTree,
          arg1: javax.swing.tree.DefaultTreeCellRenderer,
          arg2: javax.swing.tree.TreeCellEditor
        )
        public setBorderSelectionColor(arg0: java.awt.Color): void
        public getBorderSelectionColor(): java.awt.Color
        public setFont(arg0: java.awt.Font): void
        public getFont(): java.awt.Font
        public getTreeCellEditorComponent(
          arg0: javax.swing.JTree,
          arg1: java.lang.Object | any,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean,
          arg4: boolean | java.lang.Boolean,
          arg5: number | java.lang.Integer
        ): java.awt.Component
        public getCellEditorValue(): java.lang.Object
        public isCellEditable(arg0: java.util.EventObject): boolean
        public shouldSelectCell(arg0: java.util.EventObject): boolean
        public stopCellEditing(): boolean
        public cancelCellEditing(): void
        public addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
        public removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
        public getCellEditorListeners(): javax.swing.event.CellEditorListener[]
        public valueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
        public actionPerformed(arg0: java.awt.event.ActionEvent): void
        protected setTree(arg0: javax.swing.JTree): void
        protected shouldStartEditingTimer(arg0: java.util.EventObject): boolean
        protected startEditingTimer(): void
        protected canEditImmediately(arg0: java.util.EventObject): boolean
        protected inHitRegion(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        protected determineOffset(
          arg0: javax.swing.JTree,
          arg1: java.lang.Object | any,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean,
          arg4: boolean | java.lang.Boolean,
          arg5: number | java.lang.Integer
        ): void
        protected prepareForEditing(): void
        protected createContainer(): java.awt.Container
        protected createTreeCellEditor(): javax.swing.tree.TreeCellEditor
      }
    }
  }
}
