declare namespace javax {
    namespace swing {
        abstract class DefaultRowSorter<M, I> extends javax.swing.RowSorter<M> {
            public constructor()
            protected setModelWrapper(arg0: javax.swing.DefaultRowSorter$ModelWrapper<M, I>): void
            protected getModelWrapper(): javax.swing.DefaultRowSorter$ModelWrapper<M, I>
            public getModel(): M
            public setSortable(arg0: int, arg1: boolean): void
            public isSortable(arg0: int): boolean
            public setSortKeys(arg0: java.util.List<javax.swing.RowSorter$SortKey>): void
            public getSortKeys(): java.util.List<javax.swing.RowSorter$SortKey>
            public setMaxSortKeys(arg0: int): void
            public getMaxSortKeys(): int
            public setSortsOnUpdates(arg0: boolean): void
            public getSortsOnUpdates(): boolean
            public setRowFilter(arg0: javax.swing.RowFilter<M, I>): void
            public getRowFilter(): javax.swing.RowFilter<M, I>
            public toggleSortOrder(arg0: int): void
            public convertRowIndexToView(arg0: int): int
            public convertRowIndexToModel(arg0: int): int
            public sort(): void
            protected useToString(arg0: int): boolean
            public setComparator(arg0: int, arg1: java.util.Comparator<any>): void
            public getComparator(arg0: int): java.util.Comparator<any>
            public getViewRowCount(): int
            public getModelRowCount(): int
            public modelStructureChanged(): void
            public allRowsChanged(): void
            public rowsInserted(arg0: int, arg1: int): void
            public rowsDeleted(arg0: int, arg1: int): void
            public rowsUpdated(arg0: int, arg1: int): void
            public rowsUpdated(arg0: int, arg1: int, arg2: int): void
            public static class: java.lang.Class<any>
        }
    }
}