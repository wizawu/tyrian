declare namespace javax {
    namespace swing {
abstract class RowSorter<M> {
    public constructor()
    public getModel(): M
    public toggleSortOrder(arg0: int): void
    public convertRowIndexToModel(arg0: int): int
    public convertRowIndexToView(arg0: int): int
    public setSortKeys(arg0: java.util.List<javax.swing.RowSorter$SortKey>): void
    public getSortKeys(): java.util.List<javax.swing.RowSorter$SortKey>
    public getViewRowCount(): int
    public getModelRowCount(): int
    public modelStructureChanged(): void
    public allRowsChanged(): void
    public rowsInserted(arg0: int, arg1: int): void
    public rowsDeleted(arg0: int, arg1: int): void
    public rowsUpdated(arg0: int, arg1: int): void
    public rowsUpdated(arg0: int, arg1: int, arg2: int): void
    public addRowSorterListener(arg0: javax.swing.event.RowSorterListener): void
    public removeRowSorterListener(arg0: javax.swing.event.RowSorterListener): void
    protected fireSortOrderChanged(): void
    protected fireRowSorterChanged(arg0: int[]): void
    public static class: java.lang.Class<any>
}

    }
}