declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace spi {

        interface SyncResolver extends javax.sql.RowSet {
          public static readonly UPDATE_ROW_CONFLICT: int
          public static readonly DELETE_ROW_CONFLICT: int
          public static readonly INSERT_ROW_CONFLICT: int
          public static readonly NO_ROW_CONFLICT: int
          getStatus(): int
          getConflictValue(arg0: int): java.lang.Object
          getConflictValue(arg0: java.lang.String): java.lang.Object
          setResolvedValue(arg0: int, arg1: java.lang.Object): void
          setResolvedValue(arg0: java.lang.String, arg1: java.lang.Object): void
          nextConflict(): boolean
          previousConflict(): boolean
        }

      }
    }
  }
}
