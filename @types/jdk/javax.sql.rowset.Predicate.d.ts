declare namespace javax {
  namespace sql {
    namespace rowset {
      interface Predicate {
        evaluate(arg0: javax.sql.RowSet): boolean
        evaluate(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): boolean
        evaluate(arg0: java.lang.Object | any, arg1: java.lang.String | string): boolean
      }
    }
  }
}
