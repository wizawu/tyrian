declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace spi {
        interface SyncResolver extends javax.sql.RowSet {
          readonly UPDATE_ROW_CONFLICT: int
          readonly DELETE_ROW_CONFLICT: int
          readonly INSERT_ROW_CONFLICT: int
          readonly NO_ROW_CONFLICT: int
          getStatus(): number
          getConflictValue(arg0: number | java.lang.Integer): java.lang.Object
          getConflictValue(arg0: java.lang.String | string): java.lang.Object
          setResolvedValue(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
          setResolvedValue(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
          nextConflict(): boolean
          previousConflict(): boolean
        }
      }
    }
  }
}
