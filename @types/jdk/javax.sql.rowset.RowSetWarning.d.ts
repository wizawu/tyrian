declare namespace javax {
  namespace sql {
    namespace rowset {
      class RowSetWarning extends java.sql.SQLException {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string)
        public constructor()
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: number | java.lang.Integer
        )
        public getNextWarning(): javax.sql.rowset.RowSetWarning
        public setNextWarning(arg0: javax.sql.rowset.RowSetWarning): void
      }
    }
  }
}
