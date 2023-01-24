declare namespace javax {
  namespace accessibility {
    interface AccessibleExtendedTable extends javax.accessibility.AccessibleTable {
      getAccessibleRow(arg0: number | java.lang.Integer): number
      getAccessibleColumn(arg0: number | java.lang.Integer): number
      getAccessibleIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
    }
  }
}
