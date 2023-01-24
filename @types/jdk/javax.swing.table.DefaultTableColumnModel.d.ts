declare namespace javax {
  namespace swing {
    namespace table {
      class DefaultTableColumnModel
        implements
          javax.swing.table.TableColumnModel,
          java.beans.PropertyChangeListener,
          javax.swing.event.ListSelectionListener,
          java.io.Serializable
      {
        protected tableColumns: java.util.Vector<javax.swing.table.TableColumn>
        protected selectionModel: javax.swing.ListSelectionModel
        protected columnMargin: int
        protected listenerList: javax.swing.event.EventListenerList
        protected changeEvent: javax.swing.event.ChangeEvent
        protected columnSelectionAllowed: boolean
        protected totalColumnWidth: int
        public constructor()
        public addColumn(arg0: javax.swing.table.TableColumn): void
        public removeColumn(arg0: javax.swing.table.TableColumn): void
        public moveColumn(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setColumnMargin(arg0: number | java.lang.Integer): void
        public getColumnCount(): number
        public getColumns(): java.util.Enumeration<javax.swing.table.TableColumn>
        public getColumnIndex(arg0: java.lang.Object | any): number
        public getColumn(arg0: number | java.lang.Integer): javax.swing.table.TableColumn
        public getColumnMargin(): number
        public getColumnIndexAtX(arg0: number | java.lang.Integer): number
        public getTotalColumnWidth(): number
        public setSelectionModel(arg0: javax.swing.ListSelectionModel): void
        public getSelectionModel(): javax.swing.ListSelectionModel
        public setColumnSelectionAllowed(arg0: boolean | java.lang.Boolean): void
        public getColumnSelectionAllowed(): boolean
        public getSelectedColumns(): number[]
        public getSelectedColumnCount(): number
        public addColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
        public removeColumnModelListener(arg0: javax.swing.event.TableColumnModelListener): void
        public getColumnModelListeners(): javax.swing.event.TableColumnModelListener[]
        protected fireColumnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
        protected fireColumnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
        protected fireColumnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
        protected fireColumnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
        protected fireColumnMarginChanged(): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
        public propertyChange(arg0: java.beans.PropertyChangeEvent): void
        public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
        protected createSelectionModel(): javax.swing.ListSelectionModel
        protected recalcWidthCache(): void
      }
    }
  }
}
