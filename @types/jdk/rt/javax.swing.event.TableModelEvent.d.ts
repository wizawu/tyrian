declare namespace javax {
    namespace swing {
        namespace event {
            class TableModelEvent extends java.util.EventObject {
                public static readonly INSERT: int
                public static readonly UPDATE: int
                public static readonly DELETE: int
                public static readonly HEADER_ROW: int
                public static readonly ALL_COLUMNS: int
                protected type: int
                protected firstRow: int
                protected lastRow: int
                protected column: int
                public constructor(arg0: javax.swing.table.TableModel)
                public constructor(arg0: javax.swing.table.TableModel, arg1: int)
                public constructor(arg0: javax.swing.table.TableModel, arg1: int, arg2: int)
                public constructor(arg0: javax.swing.table.TableModel, arg1: int, arg2: int, arg3: int)
                public constructor(arg0: javax.swing.table.TableModel, arg1: int, arg2: int, arg3: int, arg4: int)
                public getFirstRow(): int
                public getLastRow(): int
                public getColumn(): int
                public getType(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}