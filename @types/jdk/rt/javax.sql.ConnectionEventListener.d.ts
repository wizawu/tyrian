declare namespace javax {
    namespace sql {
interface ConnectionEventListener extends java.util.EventListener {
    connectionClosed(arg0: javax.sql.ConnectionEvent): void
    connectionErrorOccurred(arg0: javax.sql.ConnectionEvent): void
}

    }
}