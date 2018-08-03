declare namespace javax {
    namespace swing {
        namespace table {
            class TableColumn implements java.io.Serializable {
                public static readonly COLUMN_WIDTH_PROPERTY: string
                public static readonly HEADER_VALUE_PROPERTY: string
                public static readonly HEADER_RENDERER_PROPERTY: string
                public static readonly CELL_RENDERER_PROPERTY: string
                protected modelIndex: int
                protected identifier: java.lang.Object
                protected width: int
                protected minWidth: int
                protected maxWidth: int
                protected headerRenderer: javax.swing.table.TableCellRenderer
                protected headerValue: java.lang.Object
                protected cellRenderer: javax.swing.table.TableCellRenderer
                protected cellEditor: javax.swing.table.TableCellEditor
                protected isResizable: boolean
                protected resizedPostingDisableCount: int
                public constructor()
                public constructor(arg0: int)
                public constructor(arg0: int, arg1: int)
                public constructor(arg0: int, arg1: int, arg2: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda, arg3: javax.swing.table.TableCellEditor)
                public setModelIndex(arg0: int): void
                public getModelIndex(): int
                public setIdentifier(arg0: java.lang.Object): void
                public getIdentifier(): java.lang.Object
                public setHeaderValue(arg0: java.lang.Object): void
                public getHeaderValue(): java.lang.Object
                public setHeaderRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda): void
                public getHeaderRenderer(): javax.swing.table.TableCellRenderer
                public setCellRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$Lambda): void
                public getCellRenderer(): javax.swing.table.TableCellRenderer
                public setCellEditor(arg0: javax.swing.table.TableCellEditor): void
                public getCellEditor(): javax.swing.table.TableCellEditor
                public setWidth(arg0: int): void
                public getWidth(): int
                public setPreferredWidth(arg0: int): void
                public getPreferredWidth(): int
                public setMinWidth(arg0: int): void
                public getMinWidth(): int
                public setMaxWidth(arg0: int): void
                public getMaxWidth(): int
                public setResizable(arg0: boolean): void
                public getResizable(): boolean
                public sizeWidthToFit(): void
                public disableResizedPosting(): void
                public enableResizedPosting(): void
                public addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
                protected createDefaultHeaderRenderer(): javax.swing.table.TableCellRenderer
                public static class: java.lang.Class<any>
            }
        }
    }
}