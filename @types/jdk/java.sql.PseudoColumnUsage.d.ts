declare namespace java {
  namespace sql {

    class PseudoColumnUsage extends java.lang.Enum<java.sql.PseudoColumnUsage> {
      public static readonly SELECT_LIST_ONLY: java.sql.PseudoColumnUsage
      public static readonly WHERE_CLAUSE_ONLY: java.sql.PseudoColumnUsage
      public static readonly NO_USAGE_RESTRICTIONS: java.sql.PseudoColumnUsage
      public static readonly USAGE_UNKNOWN: java.sql.PseudoColumnUsage
      public static values(): java.sql.PseudoColumnUsage[]
      public static valueOf(arg0: java.lang.String | string): java.sql.PseudoColumnUsage
    }

  }
}
