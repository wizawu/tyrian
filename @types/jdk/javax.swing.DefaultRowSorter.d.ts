declare namespace javax {
  namespace swing {

    abstract class DefaultRowSorter<M,I> extends javax.swing.RowSorter<M> {
      public constructor()
      protected setModelWrapper(arg0: javax.swing.DefaultRowSorter$ModelWrapper<M,I>): void
      protected getModelWrapper(): javax.swing.DefaultRowSorter$ModelWrapper<M,I>
      public getModel(): M
      public setSortable(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      public isSortable(arg0: number | java.lang.Integer): boolean
      public setSortKeys(arg0: java.util.List<javax.swing.RowSorter$SortKey>): void
      public getSortKeys(): java.util.List<javax.swing.RowSorter$SortKey>
      public setMaxSortKeys(arg0: number | java.lang.Integer): void
      public getMaxSortKeys(): number
      public setSortsOnUpdates(arg0: boolean | java.lang.Boolean): void
      public getSortsOnUpdates(): boolean
      public setRowFilter(arg0: javax.swing.RowFilter<unknown,unknown>): void
      public getRowFilter(): javax.swing.RowFilter<unknown,unknown>
      public toggleSortOrder(arg0: number | java.lang.Integer): void
      public convertRowIndexToView(arg0: number | java.lang.Integer): number
      public convertRowIndexToModel(arg0: number | java.lang.Integer): number
      public sort(): void
      protected useToString(arg0: number | java.lang.Integer): boolean
      public setComparator(arg0: number | java.lang.Integer, arg1: java.util.Comparator<unknown>): void
      public getComparator(arg0: number | java.lang.Integer): java.util.Comparator<unknown>
      public getViewRowCount(): number
      public getModelRowCount(): number
      public modelStructureChanged(): void
      public allRowsChanged(): void
      public rowsInserted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public rowsDeleted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public rowsUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public rowsUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
    }

  }
}
