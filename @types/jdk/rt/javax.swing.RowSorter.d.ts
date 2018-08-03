declare namespace javax {
    namespace swing {
        abstract class RowSorter<M> {
            public constructor()
            public abstract getModel(): M
            public abstract toggleSortOrder(arg0: int): void
            public abstract convertRowIndexToModel(arg0: int): int
            public abstract convertRowIndexToView(arg0: int): int
            public abstract setSortKeys(arg0: java.util.List<javax.swing.RowSorter$SortKey>): void
            public abstract getSortKeys(): java.util.List<javax.swing.RowSorter$SortKey>
            public abstract getViewRowCount(): int
            public abstract getModelRowCount(): int
            public abstract modelStructureChanged(): void
            public abstract allRowsChanged(): void
            public abstract rowsInserted(arg0: int, arg1: int): void
            public abstract rowsDeleted(arg0: int, arg1: int): void
            public abstract rowsUpdated(arg0: int, arg1: int): void
            public abstract rowsUpdated(arg0: int, arg1: int, arg2: int): void
            public addRowSorterListener(arg0: javax.swing.event.RowSorterListener): void
            public removeRowSorterListener(arg0: javax.swing.event.RowSorterListener): void
            protected fireSortOrderChanged(): void
            protected fireRowSorterChanged(arg0: int[]): void
            public static class: java.lang.Class<any>
        }
    }
}