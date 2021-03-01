declare namespace java {
  namespace sql {

    interface SQLData {

      getSQLTypeName(): java.lang.String
      readSQL(arg0: java.sql.SQLInput, arg1: java.lang.String): void
      writeSQL(arg0: java.sql.SQLOutput): void
    }

  }
}
