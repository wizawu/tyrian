declare namespace javax {
    namespace swing {
class JList$AccessibleJList extends javax.swing.JComponent$AccessibleJComponent implements javax.accessibility.AccessibleSelection , java.beans.PropertyChangeListener , javax.swing.event.ListSelectionListener , javax.swing.event.ListDataListener {
    public constructor(arg0: javax.swing.JList | javax.swing.JList$$Lambda)
    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
    public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
    public intervalAdded(arg0: javax.swing.event.ListDataEvent): void
    public intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
    public contentsChanged(arg0: javax.swing.event.ListDataEvent): void
    public getAccessibleStateSet(): javax.accessibility.AccessibleStateSet
    public getAccessibleRole(): javax.accessibility.AccessibleRole
    public getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
    public getAccessibleChildrenCount(): int
    public getAccessibleChild(arg0: int): javax.accessibility.Accessible
    public getAccessibleSelection(): javax.accessibility.AccessibleSelection
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