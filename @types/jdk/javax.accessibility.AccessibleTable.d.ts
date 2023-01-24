declare namespace javax {
  namespace accessibility {
    interface AccessibleTable {
      getAccessibleCaption(): javax.accessibility.Accessible
      setAccessibleCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$lambda): void
      getAccessibleSummary(): javax.accessibility.Accessible
      setAccessibleSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$lambda): void
      getAccessibleRowCount(): number
      getAccessibleColumnCount(): number
      getAccessibleAt(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): javax.accessibility.Accessible
      getAccessibleRowExtentAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      getAccessibleColumnExtentAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      getAccessibleRowHeader(): javax.accessibility.AccessibleTable
      setAccessibleRowHeader(arg0: javax.accessibility.AccessibleTable): void
      getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
      setAccessibleColumnHeader(arg0: javax.accessibility.AccessibleTable): void
      getAccessibleRowDescription(arg0: number | java.lang.Integer): javax.accessibility.Accessible
      setAccessibleRowDescription(
        arg0: number | java.lang.Integer,
        arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$lambda
      ): void
      getAccessibleColumnDescription(arg0: number | java.lang.Integer): javax.accessibility.Accessible
      setAccessibleColumnDescription(
        arg0: number | java.lang.Integer,
        arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$lambda
      ): void
      isAccessibleSelected(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
      isAccessibleRowSelected(arg0: number | java.lang.Integer): boolean
      isAccessibleColumnSelected(arg0: number | java.lang.Integer): boolean
      getSelectedAccessibleRows(): number[]
      getSelectedAccessibleColumns(): number[]
    }
  }
}
