declare namespace javax {
    namespace swing {
        class JTextField extends javax.swing.text.JTextComponent implements javax.swing.SwingConstants {
            public static notifyAction: string
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: int)
            public constructor(arg0: java.lang.String | string, arg1: int)
            public constructor(arg0: javax.swing.text.Document, arg1: java.lang.String | string, arg2: int)
            public getUIClassID(): string
            public setDocument(arg0: javax.swing.text.Document): void
            public isValidateRoot(): boolean
            public getHorizontalAlignment(): int
            public setHorizontalAlignment(arg0: int): void
            protected createDefaultModel(): javax.swing.text.Document
            public getColumns(): int
            public setColumns(arg0: int): void
            protected getColumnWidth(): int
            public getPreferredSize(): java.awt.Dimension
            public setFont(arg0: java.awt.Font): void
            public addActionListener(arg0: java.awt.event.ActionListener): void
            public removeActionListener(arg0: java.awt.event.ActionListener): void
            public getActionListeners(): java.awt.event.ActionListener[]
            protected fireActionPerformed(): void
            public setActionCommand(arg0: java.lang.String | string): void
            public setAction(arg0: javax.swing.Action): void
            public getAction(): javax.swing.Action
            protected configurePropertiesFromAction(arg0: javax.swing.Action): void
            protected actionPropertyChanged(arg0: javax.swing.Action, arg1: java.lang.String | string): void
            protected createActionPropertyChangeListener(arg0: javax.swing.Action): java.beans.PropertyChangeListener
            public getActions(): javax.swing.Action[]
            public postActionEvent(): void
            public getHorizontalVisibility(): javax.swing.BoundedRangeModel
            public getScrollOffset(): int
            public setScrollOffset(arg0: int): void
            public scrollRectToVisible(arg0: java.awt.Rectangle): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}