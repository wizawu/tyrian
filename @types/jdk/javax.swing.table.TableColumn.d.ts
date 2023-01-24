declare namespace javax {
  namespace swing {
    namespace table {
      class TableColumn implements java.io.Serializable {
        public static readonly COLUMN_WIDTH_PROPERTY: java.lang.String
        public static readonly HEADER_VALUE_PROPERTY: java.lang.String
        public static readonly HEADER_RENDERER_PROPERTY: java.lang.String
        public static readonly CELL_RENDERER_PROPERTY: java.lang.String
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
        public constructor(arg0: number | java.lang.Integer)
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda,
          arg3: javax.swing.table.TableCellEditor
        )
        public setModelIndex(arg0: number | java.lang.Integer): void
        public getModelIndex(): number
        public setIdentifier(arg0: java.lang.Object | any): void
        public getIdentifier(): java.lang.Object
        public setHeaderValue(arg0: java.lang.Object | any): void
        public getHeaderValue(): java.lang.Object
        public setHeaderRenderer(
          arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda
        ): void
        public getHeaderRenderer(): javax.swing.table.TableCellRenderer
        public setCellRenderer(
          arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda
        ): void
        public getCellRenderer(): javax.swing.table.TableCellRenderer
        public setCellEditor(arg0: javax.swing.table.TableCellEditor): void
        public getCellEditor(): javax.swing.table.TableCellEditor
        public setWidth(arg0: number | java.lang.Integer): void
        public getWidth(): number
        public setPreferredWidth(arg0: number | java.lang.Integer): void
        public getPreferredWidth(): number
        public setMinWidth(arg0: number | java.lang.Integer): void
        public getMinWidth(): number
        public setMaxWidth(arg0: number | java.lang.Integer): void
        public getMaxWidth(): number
        public setResizable(arg0: boolean | java.lang.Boolean): void
        public getResizable(): boolean
        public sizeWidthToFit(): void
        public disableResizedPosting(): void
        public enableResizedPosting(): void
        public addPropertyChangeListener(
          arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
        ): void
        public removePropertyChangeListener(
          arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
        ): void
        public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
        protected createDefaultHeaderRenderer(): javax.swing.table.TableCellRenderer
      }
    }
  }
}
