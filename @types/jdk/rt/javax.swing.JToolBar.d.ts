declare namespace javax {
    namespace swing {
        class JToolBar extends javax.swing.JComponent implements javax.swing.SwingConstants , javax.accessibility.Accessible {
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: int)
            public getUI(): javax.swing.plaf.ToolBarUI
            public setUI(arg0: javax.swing.plaf.ToolBarUI): void
            public updateUI(): void
            public getUIClassID(): string
            public getComponentIndex(arg0: java.awt.Component): int
            public getComponentAtIndex(arg0: int): java.awt.Component
            public setMargin(arg0: java.awt.Insets): void
            public getMargin(): java.awt.Insets
            public isBorderPainted(): boolean
            public setBorderPainted(arg0: boolean): void
            protected paintBorder(arg0: java.awt.Graphics): void
            public isFloatable(): boolean
            public setFloatable(arg0: boolean): void
            public getOrientation(): int
            public setOrientation(arg0: int): void
            public setRollover(arg0: boolean): void
            public isRollover(): boolean
            public addSeparator(): void
            public addSeparator(arg0: java.awt.Dimension): void
            public add(arg0: javax.swing.Action): javax.swing.JButton
            protected createActionComponent(arg0: javax.swing.Action): javax.swing.JButton
            protected createActionChangeListener(arg0: javax.swing.JButton): java.beans.PropertyChangeListener
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            protected paramString(): string
            public setLayout(arg0: java.awt.LayoutManager): void
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}