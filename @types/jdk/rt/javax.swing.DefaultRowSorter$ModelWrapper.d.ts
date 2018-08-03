declare namespace javax {
    namespace swing {
        abstract class DefaultRowSorter$ModelWrapper<M, I> {
            protected constructor()
            public abstract getModel(): M
            public abstract getColumnCount(): int
            public abstract getRowCount(): int
            public abstract getValueAt(arg0: int, arg1: int): java.lang.Object
            public getStringValueAt(arg0: int, arg1: int): string
            public abstract getIdentifier(arg0: int): I
            public static class: java.lang.Class<any>
        }
    }
}