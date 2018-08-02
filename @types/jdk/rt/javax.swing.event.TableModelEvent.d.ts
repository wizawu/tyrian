declare namespace javax {
    namespace swing {
        namespace event {
class TableModelEvent extends java.util.EventObject {
    public static INSERT: int
    public static UPDATE: int
    public static DELETE: int
    public static HEADER_ROW: int
    public static ALL_COLUMNS: int
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