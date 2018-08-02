declare namespace javax {
    namespace swing {
        namespace event {
            class RowSorterEvent extends java.util.EventObject {
                public constructor(arg0: javax.swing.RowSorter)
                public constructor(arg0: javax.swing.RowSorter, arg1: javax.swing.event.RowSorterEvent$Type, arg2: int[])
                public getSource(): javax.swing.RowSorter
                public getType(): javax.swing.event.RowSorterEvent$Type
                public convertPreviousRowIndexToModel(arg0: int): int
                public getPreviousRowCount(): int
                public getSource(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}