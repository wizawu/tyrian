declare namespace javax {
  namespace swing {

    class JList<E> extends javax.swing.JComponent implements javax.swing.Scrollable, javax.accessibility.Accessible {
      public static readonly VERTICAL: int
      public static readonly VERTICAL_WRAP: int
      public static readonly HORIZONTAL_WRAP: int
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: javax.swing.ListModel<E>)
      public constructor(arg0: E[])
      public constructor(arg0: java.util.Vector<E>)
      public constructor()
      public getUI(): javax.swing.plaf.ListUI
      public setUI(arg0: javax.swing.plaf.ListUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public getPrototypeCellValue(): E
      public setPrototypeCellValue(arg0: E): void
      public getFixedCellWidth(): number
      public setFixedCellWidth(arg0: number | java.lang.Integer): void
      public getFixedCellHeight(): number
      public setFixedCellHeight(arg0: number | java.lang.Integer): void
      public getCellRenderer(): javax.swing.ListCellRenderer<unknown>
      public setCellRenderer(arg0: javax.swing.ListCellRenderer<unknown> | javax.swing.ListCellRenderer$$lambda<unknown>): void
      public getSelectionForeground(): java.awt.Color
      public setSelectionForeground(arg0: java.awt.Color): void
      public getSelectionBackground(): java.awt.Color
      public setSelectionBackground(arg0: java.awt.Color): void
      public getVisibleRowCount(): number
      public setVisibleRowCount(arg0: number | java.lang.Integer): void
      public getLayoutOrientation(): number
      public setLayoutOrientation(arg0: number | java.lang.Integer): void
      public getFirstVisibleIndex(): number
      public getLastVisibleIndex(): number
      public ensureIndexIsVisible(arg0: number | java.lang.Integer): void
      public setDragEnabled(arg0: boolean | java.lang.Boolean): void
      public getDragEnabled(): boolean
      public setDropMode(arg0: javax.swing.DropMode): void
      public getDropMode(): javax.swing.DropMode
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.JList$DropLocation
      setDropLocation(arg0: javax.swing.TransferHandler$DropLocation, arg1: java.lang.Object | any, arg2: boolean | java.lang.Boolean): java.lang.Object
      public getDropLocation(): javax.swing.JList$DropLocation
      public getNextMatch(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: javax.swing.text.Position$Bias): number
      public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
      public locationToIndex(arg0: java.awt.Point): number
      public indexToLocation(arg0: number | java.lang.Integer): java.awt.Point
      public getCellBounds(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Rectangle
      public getModel(): javax.swing.ListModel<E>
      public setModel(arg0: javax.swing.ListModel<E>): void
      public setListData(arg0: E[]): void
      public setListData(arg0: java.util.Vector<E>): void
      protected createSelectionModel(): javax.swing.ListSelectionModel
      public getSelectionModel(): javax.swing.ListSelectionModel
      protected fireSelectionValueChanged(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): void
      public addListSelectionListener(arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda): void
      public removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda): void
      public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
      public setSelectionModel(arg0: javax.swing.ListSelectionModel): void
      public setSelectionMode(arg0: number | java.lang.Integer): void
      public getSelectionMode(): number
      public getAnchorSelectionIndex(): number
      public getLeadSelectionIndex(): number
      public getMinSelectionIndex(): number
      public getMaxSelectionIndex(): number
      public isSelectedIndex(arg0: number | java.lang.Integer): boolean
      public isSelectionEmpty(): boolean
      public clearSelection(): void
      public setSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public addSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public removeSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      public getValueIsAdjusting(): boolean
      public getSelectedIndices(): number[]
      public setSelectedIndex(arg0: number | java.lang.Integer): void
      public setSelectedIndices(arg0: number[] | java.lang.Integer[]): void
      public getSelectedValues(): java.lang.Object[]
      public getSelectedValuesList(): java.util.List<E>
      public getSelectedIndex(): number
      public getSelectedValue(): E
      public setSelectedValue(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean): void
      public getPreferredScrollableViewportSize(): java.awt.Dimension
      public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableTracksViewportHeight(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      dropLocationForPoint(arg0: java.awt.Point): javax.swing.TransferHandler$DropLocation
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
