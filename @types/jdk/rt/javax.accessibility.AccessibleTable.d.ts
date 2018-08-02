declare namespace javax {
    namespace accessibility {
        interface AccessibleTable {
            getAccessibleCaption(): javax.accessibility.Accessible
            setAccessibleCaption(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            getAccessibleSummary(): javax.accessibility.Accessible
            setAccessibleSummary(arg0: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            getAccessibleRowCount(): int
            getAccessibleColumnCount(): int
            getAccessibleAt(arg0: int, arg1: int): javax.accessibility.Accessible
            getAccessibleRowExtentAt(arg0: int, arg1: int): int
            getAccessibleColumnExtentAt(arg0: int, arg1: int): int
            getAccessibleRowHeader(): javax.accessibility.AccessibleTable
            setAccessibleRowHeader(arg0: javax.accessibility.AccessibleTable): void
            getAccessibleColumnHeader(): javax.accessibility.AccessibleTable
            setAccessibleColumnHeader(arg0: javax.accessibility.AccessibleTable): void
            getAccessibleRowDescription(arg0: int): javax.accessibility.Accessible
            setAccessibleRowDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            getAccessibleColumnDescription(arg0: int): javax.accessibility.Accessible
            setAccessibleColumnDescription(arg0: int, arg1: javax.accessibility.Accessible | javax.accessibility.Accessible$$Lambda): void
            isAccessibleSelected(arg0: int, arg1: int): boolean
            isAccessibleRowSelected(arg0: int): boolean
            isAccessibleColumnSelected(arg0: int): boolean
            getSelectedAccessibleRows(): int[]
            getSelectedAccessibleColumns(): int[]
        }
    }
}