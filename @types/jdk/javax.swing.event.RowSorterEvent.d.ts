declare namespace javax {
  namespace swing {
    namespace event {

      class RowSorterEvent extends java.util.EventObject {
        public constructor(arg0: javax.swing.RowSorter<unknown>)
        public constructor(arg0: javax.swing.RowSorter<unknown>, arg1: javax.swing.event.RowSorterEvent$Type, arg2: int[])
        public getSource(): javax.swing.RowSorter<unknown>
        public getType(): javax.swing.event.RowSorterEvent$Type
        public convertPreviousRowIndexToModel(arg0: int): int
        public getPreviousRowCount(): int
        public getSource(): java.lang.Object
      }

    }
  }
}
