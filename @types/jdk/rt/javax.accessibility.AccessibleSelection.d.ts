declare namespace javax {
    namespace accessibility {
        interface AccessibleSelection {
            getAccessibleSelectionCount(): int
            getAccessibleSelection(arg0: int): javax.accessibility.Accessible
            isAccessibleChildSelected(arg0: int): boolean
            addAccessibleSelection(arg0: int): void
            removeAccessibleSelection(arg0: int): void
            clearAccessibleSelection(): void
            selectAllAccessibleSelection(): void
        }
    }
}