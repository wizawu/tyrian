declare namespace javax {
  namespace sql {

    interface RowSetInternal {

      getParams(): java.lang.Object[]
      getConnection(): java.sql.Connection
      setMetaData(arg0: javax.sql.RowSetMetaData): void
      getOriginal(): java.sql.ResultSet
      getOriginalRow(): java.sql.ResultSet
    }

  }
}
