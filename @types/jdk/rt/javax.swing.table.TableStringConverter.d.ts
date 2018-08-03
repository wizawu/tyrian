declare namespace javax {
    namespace swing {
        namespace table {
            abstract class TableStringConverter {
                public constructor()
                public abstract toString(arg0: javax.swing.table.TableModel, arg1: int, arg2: int): string
                public static class: java.lang.Class<any>
            }
            interface TableStringConverter$$Lambda {
                (arg0: javax.swing.table.TableModel, arg1: int, arg2: int): string
            }
        }
    }
}