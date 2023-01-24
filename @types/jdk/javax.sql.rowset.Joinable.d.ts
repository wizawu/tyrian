declare namespace javax {
  namespace sql {
    namespace rowset {
      interface Joinable {
        setMatchColumn(arg0: number | java.lang.Integer): void
        setMatchColumn(arg0: number[] | java.lang.Integer[]): void
        setMatchColumn(arg0: java.lang.String | string): void
        setMatchColumn(arg0: java.lang.String[] | string[]): void
        getMatchColumnIndexes(): number[]
        getMatchColumnNames(): java.lang.String[]
        unsetMatchColumn(arg0: number | java.lang.Integer): void
        unsetMatchColumn(arg0: number[] | java.lang.Integer[]): void
        unsetMatchColumn(arg0: java.lang.String | string): void
        unsetMatchColumn(arg0: java.lang.String[] | string[]): void
      }
    }
  }
}
