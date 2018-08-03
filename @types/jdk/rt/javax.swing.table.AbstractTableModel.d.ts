declare namespace javax {
    namespace swing {
        namespace table {
            abstract class AbstractTableModel implements javax.swing.table.TableModel , java.io.Serializable {
                protected listenerList: javax.swing.event.EventListenerList
                public constructor()
                public getColumnName(arg0: int): string
                public findColumn(arg0: java.lang.String | string): int
                public getColumnClass(arg0: int): java.lang.Class<any>
                public isCellEditable(arg0: int, arg1: int): boolean
                public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                public addTableModelListener(arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$Lambda): void
                public removeTableModelListener(arg0: javax.swing.event.TableModelListener | javax.swing.event.TableModelListener$$Lambda): void
                public getTableModelListeners(): javax.swing.event.TableModelListener[]
                public fireTableDataChanged(): void
                public fireTableStructureChanged(): void
                public fireTableRowsInserted(arg0: int, arg1: int): void
                public fireTableRowsUpdated(arg0: int, arg1: int): void
                public fireTableRowsDeleted(arg0: int, arg1: int): void
                public fireTableCellUpdated(arg0: int, arg1: int): void
                public fireTableChanged(arg0: javax.swing.event.TableModelEvent): void
                public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
                public static class: java.lang.Class<any>
            }
        }
    }
}