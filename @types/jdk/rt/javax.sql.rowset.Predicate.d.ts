declare namespace javax {
    namespace sql {
        namespace rowset {
            interface Predicate {
                evaluate(arg0: javax.sql.RowSet): boolean
                evaluate(arg0: java.lang.Object, arg1: int): boolean
                evaluate(arg0: java.lang.Object, arg1: java.lang.String | string): boolean
            }
        }
    }
}