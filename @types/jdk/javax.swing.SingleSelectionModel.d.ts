declare namespace javax {
  namespace swing {

    interface SingleSelectionModel {
      getSelectedIndex(): int
      setSelectedIndex(arg0: int): void
      clearSelection(): void
      isSelected(): boolean
      addChangeListener(arg0: javax.swing.event.ChangeListener): void
      removeChangeListener(arg0: javax.swing.event.ChangeListener): void
    }

  }
}
