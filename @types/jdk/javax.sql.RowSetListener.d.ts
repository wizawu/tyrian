declare namespace javax {
  namespace sql {
    interface RowSetListener extends java.util.EventListener {
      rowSetChanged(arg0: javax.sql.RowSetEvent): void
      rowChanged(arg0: javax.sql.RowSetEvent): void
      cursorMoved(arg0: javax.sql.RowSetEvent): void
    }
  }
}
