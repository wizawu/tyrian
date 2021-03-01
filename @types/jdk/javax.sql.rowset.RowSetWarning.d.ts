declare namespace javax {
  namespace sql {
    namespace rowset {

      class RowSetWarning extends java.sql.SQLException {

        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String)
        public constructor()
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
        public getNextWarning(): javax.sql.rowset.RowSetWarning
        public setNextWarning(arg0: javax.sql.rowset.RowSetWarning): void
      }

    }
  }
}
