declare namespace javax {
  namespace sql {
    namespace rowset {

      interface RowSetFactory {

        createCachedRowSet(): javax.sql.rowset.CachedRowSet
        createFilteredRowSet(): javax.sql.rowset.FilteredRowSet
        createJdbcRowSet(): javax.sql.rowset.JdbcRowSet
        createJoinRowSet(): javax.sql.rowset.JoinRowSet
        createWebRowSet(): javax.sql.rowset.WebRowSet
      }

    }
  }
}
