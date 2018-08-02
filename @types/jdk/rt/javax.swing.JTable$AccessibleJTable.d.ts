declare namespace javax {
    namespace swing {
        class JTable$AccessibleJTable extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleSelection , javax.swing.event.ListSelectionListener , javax.swing.event.TableModelListener , javax.swing.event.TableColumnModelListener , javax.swing.event.CellEditorListener , java.beans.PropertyChangeListener , javax.accessibility.AccessibleExtendedTable {
            protected constructor(arg0: javax.swing.JTable)
            public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            public tableChanged(arg0: javax.swing.event.TableModelEvent): void
            public tableRowsInserted(arg0: javax.swing.event.TableModelEvent): void
            public tableRowsDeleted(arg0: javax.swing.event.TableModelEvent): void
            public columnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
            public columnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
            public columnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
            public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
            public columnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
            public editingStopped(arg0: javax.swing.event.ChangeEvent): void
            public editingCanceled(arg0: javax.swing.event.ChangeEvent): void
            public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
            public getAccessibleSelection(): javax.accessibility.AccessibleSelection
            public getAccessibleRole(): javax.accessibility.AccessibleRole
            public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            public getAccessibleChildrenCount(): int
            public getAccessibleChild(arg0: int): javax.accessibility.Accessible
            public getAccessibleSelectionCount(): int
            public getAccessibleSelection(arg0: int): javax.accessibility.Accessible
            public isAccessibleChildSelected(arg0: int): boolean
            public addAccessibleSelection(arg0: int): void
            public removeAccessibleSelection(arg0: int): void
            public clearAccessibleSelection(): void
            public selectAllAccessibleSelection(): void
            public getAccessibleRow(arg0: int): int
            public getAccessibleColumn(arg0: int): int
            public getAccessibleIndex(arg0: int, arg1: int): int
            public getAccessibleTable(): javax.accessibility.AccessibleTable
            public getAccessibleCaption(): javax.accessibility.Accessible
            public setAccessibleCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            public getAccessibleSummary(): javax.accessibility.Accessible
            public setAccessibleSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            public getAccessibleRowCount(): int
            public getAccessibleColumnCount(): int
            public getAccessibleAt(arg0: int, arg1: int): javax.accessibility.Accessible
            public getAccessibleRowExtentAt(arg0: int, arg1: int): int
            public getAccessibleColumnExtentAt(arg0: int, arg1: int): int
            public getAccessibleRowHeader(): javax.accessibility.AccessibleTable
            public setAccessibleRowHeader(arg0: javax.accessibility.AccessibleTable): void
            public getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
            public setAccessibleColumnHeader(arg0: javax.accessibility.AccessibleTable): void
            public getAccessibleRowDescription(arg0: int): javax.accessibility.Accessible
            public setAccessibleRowDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            public getAccessibleColumnDescription(arg0: int): javax.accessibility.Accessible
            public setAccessibleColumnDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            public isAccessibleSelected(arg0: int, arg1: int): boolean
            public isAccessibleRowSelected(arg0: int): boolean
            public isAccessibleColumnSelected(arg0: int): boolean
            public getSelectedAccessibleRows(): int[]
            public getSelectedAccessibleColumns(): int[]
            public getAccessibleRowAtIndex(arg0: int): int
            public getAccessibleColumnAtIndex(arg0: int): int
            public getAccessibleIndexAt(arg0: int, arg1: int): int
            public static class: java.lang.Class<any>
        }
    }
}