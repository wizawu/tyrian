declare namespace javax {
  namespace sql {
    namespace rowset {
      interface JoinRowSet extends javax.sql.rowset.WebRowSet {
        readonly CROSS_JOIN: int
        readonly INNER_JOIN: int
        readonly LEFT_OUTER_JOIN: int
        readonly RIGHT_OUTER_JOIN: int
        readonly FULL_JOIN: int
        addRowSet(arg0: javax.sql.rowset.Joinable): void
        addRowSet(arg0: javax.sql.RowSet, arg1: number | java.lang.Integer): void
        addRowSet(arg0: javax.sql.RowSet, arg1: java.lang.String | string): void
        addRowSet(arg0: javax.sql.RowSet[], arg1: number[] | java.lang.Integer[]): void
        addRowSet(arg0: javax.sql.RowSet[], arg1: java.lang.String[] | string[]): void
        getRowSets(): java.util.Collection<unknown>
        getRowSetNames(): java.lang.String[]
        toCachedRowSet(): javax.sql.rowset.CachedRowSet
        supportsCrossJoin(): boolean
        supportsInnerJoin(): boolean
        supportsLeftOuterJoin(): boolean
        supportsRightOuterJoin(): boolean
        supportsFullJoin(): boolean
        setJoinType(arg0: number | java.lang.Integer): void
        getWhereClause(): java.lang.String
        getJoinType(): number
      }
    }
  }
}
