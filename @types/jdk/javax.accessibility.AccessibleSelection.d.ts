declare namespace javax {
  namespace accessibility {

    interface AccessibleSelection {
      getAccessibleSelectionCount(): number
      getAccessibleSelection(arg0: number | java.lang.Integer): javax.accessibility.Accessible
      isAccessibleChildSelected(arg0: number | java.lang.Integer): boolean
      addAccessibleSelection(arg0: number | java.lang.Integer): void
      removeAccessibleSelection(arg0: number | java.lang.Integer): void
      clearAccessibleSelection(): void
      selectAllAccessibleSelection(): void
    }

  }
}
