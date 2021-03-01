declare namespace javax {
  namespace accessibility {

    interface AccessibleExtendedTable extends javax.accessibility.AccessibleTable {

      getAccessibleRow(arg0: int): int
      getAccessibleColumn(arg0: int): int
      getAccessibleIndex(arg0: int, arg1: int): int
    }

  }
}
