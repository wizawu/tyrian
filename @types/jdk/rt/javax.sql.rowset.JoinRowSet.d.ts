declare namespace javax {
    namespace sql {
        namespace rowset {
            interface JoinRowSet extends javax.sql.rowset.WebRowSet {
                CROSS_JOIN: int
                INNER_JOIN: int
                LEFT_OUTER_JOIN: int
                RIGHT_OUTER_JOIN: int
                FULL_JOIN: int
                addRowSet(arg0: javax.sql.rowset.Joinable): void
                addRowSet(arg0: javax.sql.RowSet, arg1: int): void
                addRowSet(arg0: javax.sql.RowSet, arg1: java.lang.String | string): void
                addRowSet(arg0: javax.sql.RowSet[], arg1: int[]): void
                addRowSet(arg0: javax.sql.RowSet[], arg1: java.lang.String[]): void
                getRowSets(): java.util.Collection<any>
                getRowSetNames(): java.lang.String[]
                toCachedRowSet(): javax.sql.rowset.CachedRowSet
                supportsCrossJoin(): boolean
                supportsInnerJoin(): boolean
                supportsLeftOuterJoin(): boolean
                supportsRightOuterJoin(): boolean
                supportsFullJoin(): boolean
                setJoinType(arg0: int): void
                getWhereClause(): string
                getJoinType(): int
            }
        }
    }
}