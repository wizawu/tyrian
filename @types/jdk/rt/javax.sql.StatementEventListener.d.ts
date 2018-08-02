declare namespace javax {
    namespace sql {
        interface StatementEventListener extends java.util.EventListener {
            statementClosed(arg0: javax.sql.StatementEvent): void
            statementErrorOccurred(arg0: javax.sql.StatementEvent): void
        }
    }
}