declare namespace javax {
    namespace swing {
        class JList<E> extends javax.swing.JComponent implements javax.swing.Scrollable , javax.accessibility.Accessible {
            public static readonly VERTICAL: int
            public static readonly VERTICAL_WRAP: int
            public static readonly HORIZONTAL_WRAP: int
            public constructor(arg0: javax.swing.ListModel<E>)
            public constructor(arg0: E[])
            public constructor(arg0: java.util.Vector<E>)
            public constructor()
            public getUI(): javax.swing.plaf.ListUI
            public setUI(arg0: javax.swing.plaf.ListUI): void
            public updateUI(): void
            public getUIClassID(): string
            public getPrototypeCellValue(): E
            public setPrototypeCellValue(arg0: E): void
            public getFixedCellWidth(): int
            public setFixedCellWidth(arg0: int): void
            public getFixedCellHeight(): int
            public setFixedCellHeight(arg0: int): void
            public getCellRenderer(): javax.swing.ListCellRenderer<E>
            public setCellRenderer(arg0: javax.swing.ListCellRenderer<E> | javax.swing.ListCellRenderer$$Lambda<E>): void
            public getSelectionForeground(): java.awt.Color
            public setSelectionForeground(arg0: java.awt.Color): void
            public getSelectionBackground(): java.awt.Color
            public setSelectionBackground(arg0: java.awt.Color): void
            public getVisibleRowCount(): int
            public setVisibleRowCount(arg0: int): void
            public getLayoutOrientation(): int
            public setLayoutOrientation(arg0: int): void
            public getFirstVisibleIndex(): int
            public getLastVisibleIndex(): int
            public ensureIndexIsVisible(arg0: int): void
            public setDragEnabled(arg0: boolean): void
            public getDragEnabled(): boolean
            public setDropMode(arg0: javax.swing.DropMode): void
            public getDropMode(): javax.swing.DropMode
            public getDropLocation(): javax.swing.JList$DropLocation
            public getNextMatch(arg0: java.lang.String | string, arg1: int, arg2: javax.swing.text.Position$Bias): int
            public getToolTipText(arg0: java.awt.event.MouseEvent): string
            public locationToIndex(arg0: java.awt.Point): int
            public indexToLocation(arg0: int): java.awt.Point
            public getCellBounds(arg0: int, arg1: int): java.awt.Rectangle
            public getModel(): javax.swing.ListModel<E>
            public setModel(arg0: javax.swing.ListModel<E>): void
            public setListData(arg0: E[]): void
            public setListData(arg0: java.util.Vector<E>): void
            protected createSelectionModel(): javax.swing.ListSelectionModel
            public getSelectionModel(): javax.swing.ListSelectionModel
            protected fireSelectionValueChanged(arg0: int, arg1: int, arg2: boolean): void
            public addListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
            public removeListSelectionListener(arg0: javax.swing.event.ListSelectionListener): void
            public getListSelectionListeners(): javax.swing.event.ListSelectionListener[]
            public setSelectionModel(arg0: javax.swing.ListSelectionModel): void
            public setSelectionMode(arg0: int): void
            public getSelectionMode(): int
            public getAnchorSelectionIndex(): int
            public getLeadSelectionIndex(): int
            public getMinSelectionIndex(): int
            public getMaxSelectionIndex(): int
            public isSelectedIndex(arg0: int): boolean
            public isSelectionEmpty(): boolean
            public clearSelection(): void
            public setSelectionInterval(arg0: int, arg1: int): void
            public addSelectionInterval(arg0: int, arg1: int): void
            public removeSelectionInterval(arg0: int, arg1: int): void
            public setValueIsAdjusting(arg0: boolean): void
            public getValueIsAdjusting(): boolean
            public getSelectedIndices(): int[]
            public setSelectedIndex(arg0: int): void
            public setSelectedIndices(arg0: int[]): void
            public getSelectedValues(): java.lang.Object[]
            public getSelectedValuesList(): java.util.List<E>
            public getSelectedIndex(): int
            public getSelectedValue(): E
            public setSelectedValue(arg0: java.lang.Object, arg1: boolean): void
            public getPreferredScrollableViewportSize(): java.awt.Dimension
            public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
            public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
            public getScrollableTracksViewportWidth(): boolean
            public getScrollableTracksViewportHeight(): boolean
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}