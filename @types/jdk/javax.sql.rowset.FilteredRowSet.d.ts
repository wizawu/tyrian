declare namespace javax {
  namespace sql {
    namespace rowset {

      interface FilteredRowSet extends javax.sql.rowset.WebRowSet {

        setFilter(arg0: javax.sql.rowset.Predicate): void
        getFilter(): javax.sql.rowset.Predicate
      }

    }
  }
}
