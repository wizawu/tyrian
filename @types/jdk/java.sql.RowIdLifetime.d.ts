declare namespace java {
  namespace sql {
    class RowIdLifetime extends java.lang.Enum<java.sql.RowIdLifetime> {
      public static readonly ROWID_UNSUPPORTED: java.sql.RowIdLifetime
      public static readonly ROWID_VALID_OTHER: java.sql.RowIdLifetime
      public static readonly ROWID_VALID_SESSION: java.sql.RowIdLifetime
      public static readonly ROWID_VALID_TRANSACTION: java.sql.RowIdLifetime
      public static readonly ROWID_VALID_FOREVER: java.sql.RowIdLifetime
      public static values(): java.sql.RowIdLifetime[]
      public static valueOf(arg0: java.lang.String | string): java.sql.RowIdLifetime
    }
  }
}
