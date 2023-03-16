declare namespace javax {
  namespace swing {
    interface ListSelectionModel {
      readonly SINGLE_SELECTION: int
      readonly SINGLE_INTERVAL_SELECTION: int
      readonly MULTIPLE_INTERVAL_SELECTION: int
      setSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      addSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      removeSelectionInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      getMinSelectionIndex(): number
      getMaxSelectionIndex(): number
      isSelectedIndex(arg0: number | java.lang.Integer): boolean
      getAnchorSelectionIndex(): number
      setAnchorSelectionIndex(arg0: number | java.lang.Integer): void
      getLeadSelectionIndex(): number
      setLeadSelectionIndex(arg0: number | java.lang.Integer): void
      clearSelection(): void
      isSelectionEmpty(): boolean
      insertIndexInterval(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: boolean | java.lang.Boolean
      ): void
      removeIndexInterval(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setValueIsAdjusting(arg0: boolean | java.lang.Boolean): void
      getValueIsAdjusting(): boolean
      setSelectionMode(arg0: number | java.lang.Integer): void
      getSelectionMode(): number
      addListSelectionListener(
        arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda
      ): void
      removeListSelectionListener(
        arg0: javax.swing.event.ListSelectionListener | javax.swing.event.ListSelectionListener$$lambda
      ): void
      getSelectedIndices?(): number[]
      getSelectedItemsCount?(): number
    }
  }
}
