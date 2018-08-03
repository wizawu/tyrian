declare namespace java {
    namespace awt {
        class List$AccessibleAWTList extends java.awt.Component$AccessibleAWTComponent implements javax.accessibility.AccessibleSelection , java.awt.event.ItemListener , java.awt.event.ActionListener {
            public constructor(arg0: java.awt.List)
            public actionPerformed(arg0: java.awt.event.ActionEvent): void
            public itemStateChanged(arg0: java.awt.event.ItemEvent): void
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