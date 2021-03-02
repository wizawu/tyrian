declare namespace javax {
  namespace swing {
    namespace table {

      class JTableHeader extends javax.swing.JComponent implements javax.swing.event.TableColumnModelListener, javax.accessibility.Accessible {
        protected table: javax.swing.JTable
        protected columnModel: javax.swing.table.TableColumnModel
        protected reorderingAllowed: boolean
        protected resizingAllowed: boolean
        protected updateTableInRealTime: boolean
        protected resizingColumn: javax.swing.table.TableColumn
        protected draggedColumn: javax.swing.table.TableColumn
        protected draggedDistance: int
        public constructor()
        public constructor(arg0: javax.swing.table.TableColumnModel)
        public setTable(arg0: javax.swing.JTable): void
        public getTable(): javax.swing.JTable
        public setReorderingAllowed(arg0: boolean | java.lang.Boolean): void
        public getReorderingAllowed(): boolean
        public setResizingAllowed(arg0: boolean | java.lang.Boolean): void
        public getResizingAllowed(): boolean
        public getDraggedColumn(): javax.swing.table.TableColumn
        public getDraggedDistance(): number
        public getResizingColumn(): javax.swing.table.TableColumn
        public setUpdateTableInRealTime(arg0: boolean | java.lang.Boolean): void
        public getUpdateTableInRealTime(): boolean
        public setDefaultRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda): void
        public getDefaultRenderer(): javax.swing.table.TableCellRenderer
        public columnAtPoint(arg0: java.awt.Point): number
        public getHeaderRect(arg0: number | java.lang.Integer): java.awt.Rectangle
        public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
        public getPreferredSize(): java.awt.Dimension
        public getUI(): javax.swing.plaf.TableHeaderUI
        public setUI(arg0: javax.swing.plaf.TableHeaderUI): void
        public updateUI(): void
        public getUIClassID(): java.lang.String
        public setColumnModel(arg0: javax.swing.table.TableColumnModel): void
        public getColumnModel(): javax.swing.table.TableColumnModel
        public columnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
        public columnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
        public columnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
        public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
        public columnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
        protected createDefaultColumnModel(): javax.swing.table.TableColumnModel
        protected createDefaultRenderer(): javax.swing.table.TableCellRenderer
        protected initializeLocalVars(): void
        public resizeAndRepaint(): void
        public setDraggedColumn(arg0: javax.swing.table.TableColumn): void
        public setDraggedDistance(arg0: number | java.lang.Integer): void
        public setResizingColumn(arg0: javax.swing.table.TableColumn): void
        protected paramString(): java.lang.String
        public getAccessibleContext(): javax.accessibility.AccessibleContext
        public getUI(): javax.swing.plaf.ComponentUI
      }

    }
  }
}
