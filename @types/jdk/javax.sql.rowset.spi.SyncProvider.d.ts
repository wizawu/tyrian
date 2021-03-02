declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace spi {

        abstract class SyncProvider {
          public static readonly GRADE_NONE: int
          public static readonly GRADE_CHECK_MODIFIED_AT_COMMIT: int
          public static readonly GRADE_CHECK_ALL_AT_COMMIT: int
          public static readonly GRADE_LOCK_WHEN_MODIFIED: int
          public static readonly GRADE_LOCK_WHEN_LOADED: int
          public static readonly DATASOURCE_NO_LOCK: int
          public static readonly DATASOURCE_ROW_LOCK: int
          public static readonly DATASOURCE_TABLE_LOCK: int
          public static readonly DATASOURCE_DB_LOCK: int
          public static readonly UPDATABLE_VIEW_SYNC: int
          public static readonly NONUPDATABLE_VIEW_SYNC: int
          public constructor()
          public abstract getProviderID(): java.lang.String
          public abstract getRowSetReader(): javax.sql.RowSetReader
          public abstract getRowSetWriter(): javax.sql.RowSetWriter
          public abstract getProviderGrade(): number
          public abstract setDataSourceLock(arg0: number | java.lang.Integer): void
          public abstract getDataSourceLock(): number
          public abstract supportsUpdatableView(): number
          public abstract getVersion(): java.lang.String
          public abstract getVendor(): java.lang.String
        }

      }
    }
  }
}
