declare namespace javax {
  namespace swing {

    abstract class RowSorter<M> {
      public constructor()
      public abstract getModel(): M
      public abstract toggleSortOrder(arg0: number | java.lang.Integer): void
      public abstract convertRowIndexToModel(arg0: number | java.lang.Integer): number
      public abstract convertRowIndexToView(arg0: number | java.lang.Integer): number
      public abstract setSortKeys(arg0: java.util.List<javax.swing.RowSorter$SortKey>): void
      public abstract getSortKeys(): java.util.List<javax.swing.RowSorter$SortKey>
      public abstract getViewRowCount(): number
      public abstract getModelRowCount(): number
      public abstract modelStructureChanged(): void
      public abstract allRowsChanged(): void
      public abstract rowsInserted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract rowsDeleted(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract rowsUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public abstract rowsUpdated(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public addRowSorterListener(arg0: javax.swing.event.RowSorterListener | javax.swing.event.RowSorterListener$$lambda): void
      public removeRowSorterListener(arg0: javax.swing.event.RowSorterListener | javax.swing.event.RowSorterListener$$lambda): void
      protected fireSortOrderChanged(): void
      protected fireRowSorterChanged(arg0: number[] | java.lang.Integer[]): void
      fireRowSorterChanged(arg0: javax.swing.event.RowSorterEvent): void
    }

  }
}
