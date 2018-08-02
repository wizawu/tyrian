declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
                interface SyncResolver extends javax.sql.RowSet {
                    UPDATE_ROW_CONFLICT: int
                    DELETE_ROW_CONFLICT: int
                    INSERT_ROW_CONFLICT: int
                    NO_ROW_CONFLICT: int
                    getStatus(): int
                    getConflictValue(arg0: int): java.lang.Object
                    getConflictValue(arg0: java.lang.String | string): java.lang.Object
                    setResolvedValue(arg0: int, arg1: java.lang.Object): void
                    setResolvedValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    nextConflict(): boolean
                    previousConflict(): boolean
                }
            }
        }
    }
}