declare namespace javax {
  namespace sql {
    namespace rowset {
      class RowSetProvider {
        protected constructor()
        public static newFactory(): javax.sql.rowset.RowSetFactory
        public static newFactory(
          arg0: java.lang.String | string,
          arg1: java.lang.ClassLoader
        ): javax.sql.rowset.RowSetFactory
      }
    }
  }
}
