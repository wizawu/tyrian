declare namespace javax {
  namespace swing {
    interface SingleSelectionModel {
      getSelectedIndex(): number
      setSelectedIndex(arg0: number | java.lang.Integer): void
      clearSelection(): void
      isSelected(): boolean
      addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
    }
  }
}
