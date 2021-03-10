declare namespace javax {
  namespace swing {

    class JTable extends javax.swing.JComponent implements javax.swing.event.TableModelListener, javax.swing.Scrollable, javax.swing.event.TableColumnModelListener, javax.swing.event.ListSelectionListener, javax.swing.event.CellEditorListener, javax.accessibility.Accessible, javax.swing.event.RowSorterListener {
      public static readonly AUTO_RESIZE_OFF: int
      public static readonly AUTO_RESIZE_NEXT_COLUMN: int
      public static readonly AUTO_RESIZE_SUBSEQUENT_COLUMNS: int
      public static readonly AUTO_RESIZE_LAST_COLUMN: int
      public static readonly AUTO_RESIZE_ALL_COLUMNS: int
      protected dataModel: javax.swing.table.TableModel
      protected columnModel: javax.swing.table.TableColumnModel
      protected selectionModel: javax.swing.ListSelectionModel
      protected tableHeader: javax.swing.table.JTableHeader
      protected rowHeight: int
      protected rowMargin: int
      protected gridColor: java.awt.Color
      protected showHorizontalLines: boolean
      protected showVerticalLines: boolean
      protected autoResizeMode: int
      protected autoCreateColumnsFromModel: boolean
      protected preferredViewportSize: java.awt.Dimension
      protected rowSelectionAllowed: boolean
      protected cellSelectionEnabled: boolean
      protected editorComp: java.awt.Component
      protected cellEditor: javax.swing.table.TableCellEditor
      protected editingColumn: int
      protected editingRow: int
      protected defaultRenderersByColumnClass: java.util.Hashtable<java.lang.Object,java.lang.Object>
      protected defaultEditorsByColumnClass: java.util.Hashtable<java.lang.Object,java.lang.Object>
      protected selectionForeground: java.awt.Color
      protected selectionBackground: java.awt.Color
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: javax.swing.table.TableModel)
      public constructor(arg0: javax.swing.table.TableModel, arg1: javax.swing.table.TableColumnModel)
      public constructor(arg0: javax.swing.table.TableModel, arg1: javax.swing.table.TableColumnModel, arg2: javax.swing.ListSelectionModel)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public constructor(arg0: java.util.Vector<java.util.Vector>, arg1: java.util.Vector<unknown>)
      public constructor(arg0: java.lang.Object[][] | any[][], arg1: java.lang.Object[] | any[])
      public addNotify(): void
      protected configureEnclosingScrollPane(): void
      public removeNotify(): void
      protected unconfigureEnclosingScrollPane(): void
      setUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public static createScrollPaneForTable(arg0: javax.swing.JTable): javax.swing.JScrollPane
      public setTableHeader(arg0: javax.swing.table.JTableHeader): void
      public getTableHeader(): javax.swing.table.JTableHeader
      public setRowHeight(arg0: number | java.lang.Integer): void
      public getRowHeight(): number
      public setRowHeight(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getRowHeight(arg0: number | java.lang.Integer): number
      public setRowMargin(arg0: number | java.lang.Integer): void
      public getRowMargin(): number
      public setIntercellSpacing(arg0: java.awt.Dimension): void
      public getIntercellSpacing(): java.awt.Dimension
      public setGridColor(arg0: java.awt.Color): void
      public getGridColor(): java.awt.Color
      public setShowGrid(arg0: boolean | java.lang.Boolean): void
      public setShowHorizontalLines(arg0: boolean | java.lang.Boolean): void
      public setShowVerticalLines(arg0: boolean | java.lang.Boolean): void
      public getShowHorizontalLines(): boolean
      public getShowVerticalLines(): boolean
      public setAutoResizeMode(arg0: number | java.lang.Integer): void
      public getAutoResizeMode(): number
      public setAutoCreateColumnsFromModel(arg0: boolean | java.lang.Boolean): void
      public getAutoCreateColumnsFromModel(): boolean
      public createDefaultColumnsFromModel(): void
      public setDefaultRenderer(arg0: java.lang.Class<unknown>, arg1: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda): void
      public getDefaultRenderer(arg0: java.lang.Class<unknown>): javax.swing.table.TableCellRenderer
      public setDefaultEditor(arg0: java.lang.Class<unknown>, arg1: javax.swing.table.TableCellEditor): void
      public getDefaultEditor(arg0: java.lang.Class<unknown>): javax.swing.table.TableCellEditor
      public setDragEnabled(arg0: boolean | java.lang.Boolean): void
      public getDragEnabled(): boolean
      public setDropMode(arg0: javax.swing.DropMode): void
      public getDropMode(): javax.swing.DropMode
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.JTable$DropLocation
      setDropLocation(arg0: javax.swing.TransferHandler$DropLocation, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean): java.lang.Object
      public getDropLocation(): javax.swing.JTable$DropLocation
      public setAutoCreateRowSorter(arg0: boolean | java.lang.Boolean): void
      public getAutoCreateRowSorter(): boolean
      public setUpdateSelectionOnSort(arg0: boolean | java.lang.Boolean): void
      public getUpdateSelectionOnSort(): boolean
      public setRowSorter(arg0: javax.swing.RowSorter<javax.swing.table.TableModel>): void
      public getRowSorter(): javax.swing.RowSorter<javax.swing.table.TableModel>
      public setSelectionMode(arg0: number | java.lang.Integer): void
      public setRowSelectionAllowed(arg0: boolean | java.lang.Boolean): void
      public getRowSelectionAllowed(): boolean
      public setColumnSelectionAllowed(arg0: boolean | java.lang.Boolean): void
      public getColumnSelectionAllowed(): boolean
      public setCellSelectionEnabled(arg0: boolean | java.lang.Boolean): void
      public getCellSelectionEnabled(): boolean
      public selectAll(): void
      public clearSelection(): void
      public setRowSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setColumnSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addRowSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addColumnSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeRowSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeColumnSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getSelectedRow(): number
      public getSelectedColumn(): number
      public getSelectedRows(): number[]
      public getSelectedColumns(): number[]
      public getSelectedRowCount(): number
      public getSelectedColumnCount(): number
      public isRowSelected(arg0: number | java.lang.Integer): boolean
      public isColumnSelected(arg0: number | java.lang.Integer): boolean
      public isCellSelected(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public changeSelection(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean): void
      public getSelectionForeground(): java.awt.Color
      public setSelectionForeground(arg0: java.awt.Color): void
      public getSelectionBackground(): java.awt.Color
      public setSelectionBackground(arg0: java.awt.Color): void
      public getColumn(arg0: java.lang.Object | any): javax.swing.table.TableColumn
      public convertColumnIndexToModel(arg0: number | java.lang.Integer): number
      public convertColumnIndexToView(arg0: number | java.lang.Integer): number
      public convertRowIndexToView(arg0: number | java.lang.Integer): number
      public convertRowIndexToModel(arg0: number | java.lang.Integer): number
      public getRowCount(): number
      public getColumnCount(): number
      public getColumnName(arg0: number | java.lang.Integer): java.lang.String
      public getColumnClass(arg0: number | java.lang.Integer): java.lang.Class<unknown>
      public getValueAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.Object
      public setValueAt(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public isCellEditable(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public addColumn(arg0: javax.swing.table.TableColumn): void
      public removeColumn(arg0: javax.swing.table.TableColumn): void
      public moveColumn(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public columnAtPoint(arg0: java.awt.Point): number
      public rowAtPoint(arg0: java.awt.Point): number
      public getCellRect(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.awt.Rectangle
      public doLayout(): void
      public sizeColumnsToFit(arg0: boolean | java.lang.Boolean): void
      public sizeColumnsToFit(arg0: number | java.lang.Integer): void
      public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
      public setSurrendersFocusOnKeystroke(arg0: boolean | java.lang.Boolean): void
      public getSurrendersFocusOnKeystroke(): boolean
      public editCellAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      public editCellAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.util.EventObject): boolean
      public isEditing(): boolean
      public getEditorComponent(): java.awt.Component
      public getEditingColumn(): number
      public getEditingRow(): number
      public getUI(): javax.swing.plaf.TableUI
      public setUI(arg0: javax.swing.plaf.TableUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setModel(arg0: javax.swing.table.TableModel): void
      public getModel(): javax.swing.table.TableModel
      public setColumnModel(arg0: javax.swing.table.TableColumnModel): void
      public getColumnModel(): javax.swing.table.TableColumnModel
      public setSelectionModel(arg0: javax.swing.ListSelectionModel): void
      public getSelectionModel(): javax.swing.ListSelectionModel
      public sorterChanged(arg0: javax.swing.event.RowSorterEvent): void
      public tableChanged(arg0: javax.swing.event.TableModelEvent): void
      public columnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
      public columnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
      public columnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
      public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
      public columnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
      public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
      public editingStopped(arg0: javax.swing.event.ChangeEvent): void
      public editingCanceled(arg0: javax.swing.event.ChangeEvent): void
      public setPreferredScrollableViewportSize(arg0: java.awt.Dimension): void
      public getPreferredScrollableViewportSize(): java.awt.Dimension
      public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableTracksViewportHeight(): boolean
      public setFillsViewportHeight(arg0: boolean | java.lang.Boolean): void
      public getFillsViewportHeight(): boolean
      protected processKeyBinding(arg0: javax.swing.KeyStroke, arg1: java.awt.event.KeyEvent, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean): boolean
      protected createDefaultRenderers(): void
      protected createDefaultEditors(): void
      protected initializeLocalVars(): void
      protected createDefaultDataModel(): javax.swing.table.TableModel
      protected createDefaultColumnModel(): javax.swing.table.TableColumnModel
      protected createDefaultSelectionModel(): javax.swing.ListSelectionModel
      protected createDefaultTableHeader(): javax.swing.table.JTableHeader
      protected resizeAndRepaint(): void
      public getCellEditor(): javax.swing.table.TableCellEditor
      public setCellEditor(arg0: javax.swing.table.TableCellEditor): void
      public setEditingColumn(arg0: number | java.lang.Integer): void
      public setEditingRow(arg0: number | java.lang.Integer): void
      public getCellRenderer(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.table.TableCellRenderer
      public prepareRenderer(arg0: javax.swing.table.TableCellRenderer | javax.swing.table.TableCellRenderer$$lambda, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.Component
      public getCellEditor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.table.TableCellEditor
      public prepareEditor(arg0: javax.swing.table.TableCellEditor, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.awt.Component
      public removeEditor(): void
      compWriteObjectNotify(): void
      protected paramString(): java.lang.String
      public print(): boolean
      public print(arg0: javax.swing.JTable$PrintMode): boolean
      public print(arg0: javax.swing.JTable$PrintMode, arg1: java.text.MessageFormat, arg2: java.text.MessageFormat): boolean
      public print(arg0: javax.swing.JTable$PrintMode, arg1: java.text.MessageFormat, arg2: java.text.MessageFormat, arg3: boolean | java.lang.Boolean, arg4: javax.print.attribute.PrintRequestAttributeSet, arg5: boolean | java.lang.Boolean): boolean
      public print(arg0: javax.swing.JTable$PrintMode, arg1: java.text.MessageFormat, arg2: java.text.MessageFormat, arg3: boolean | java.lang.Boolean, arg4: javax.print.attribute.PrintRequestAttributeSet, arg5: boolean | java.lang.Boolean, arg6: javax.print.PrintService): boolean
      public getPrintable(arg0: javax.swing.JTable$PrintMode, arg1: java.text.MessageFormat, arg2: java.text.MessageFormat): java.awt.print.Printable
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.TransferHandler$DropLocation
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
