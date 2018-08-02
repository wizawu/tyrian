declare namespace javax {
    namespace swing {
class JTabbedPane$AccessibleJTabbedPane extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleSelection , javax.swing.event.ChangeListener {
    public getAccessibleName(): string
    public constructor(arg0: javax.swing.JTabbedPane)
    public stateChanged(arg0: javax.swing.event.ChangeEvent): void
    public getAccessibleRole(): javax.accessibility.AccessibleRole
    public getAccessibleChildrenCount(): int
    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
    public getAccessibleSelection(): javax.accessibility.AccessibleSelection
    public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
    public getAccessibleSelectionCount(): int
    public getAccessibleSelection(arg0: int): javax.accessibility.Accessible
    public isAccessibleChildSelected(arg0: int): boolean
    public addAccessibleSelection(arg0: int): void
    public removeAccessibleSelection(arg0: int): void
    public clearAccessibleSelection(): void
    public selectAllAccessibleSelection(): void
    public static class: java.lang.Class<any>
}

    }
}