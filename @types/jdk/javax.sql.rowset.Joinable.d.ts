declare namespace javax {
  namespace sql {
    namespace rowset {

      interface Joinable {

        setMatchColumn(arg0: int): void
        setMatchColumn(arg0: int[]): void
        setMatchColumn(arg0: java.lang.String): void
        setMatchColumn(arg0: java.lang.String[]): void
        getMatchColumnIndexes(): int[]
        getMatchColumnNames(): java.lang.String[]
        unsetMatchColumn(arg0: int): void
        unsetMatchColumn(arg0: int[]): void
        unsetMatchColumn(arg0: java.lang.String): void
        unsetMatchColumn(arg0: java.lang.String[]): void
      }

    }
  }
}
