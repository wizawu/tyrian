declare namespace javax {
    namespace swing {
        class JRootPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static NONE: int
            public static FRAME: int
            public static PLAIN_DIALOG: int
            public static INFORMATION_DIALOG: int
            public static ERROR_DIALOG: int
            public static COLOR_CHOOSER_DIALOG: int
            public static FILE_CHOOSER_DIALOG: int
            public static QUESTION_DIALOG: int
            public static WARNING_DIALOG: int
            protected menuBar: javax.swing.JMenuBar
            protected contentPane: java.awt.Container
            protected layeredPane: javax.swing.JLayeredPane
            protected glassPane: java.awt.Component
            protected defaultButton: javax.swing.JButton
            protected defaultPressAction: javax.swing.JRootPane$DefaultAction
            protected defaultReleaseAction: javax.swing.JRootPane$DefaultAction
            public constructor()
            public setDoubleBuffered(arg0: boolean): void
            public getWindowDecorationStyle(): int
            public setWindowDecorationStyle(arg0: int): void
            public getUI(): javax.swing.plaf.RootPaneUI
            public setUI(arg0: javax.swing.plaf.RootPaneUI): void
            public updateUI(): void
            public getUIClassID(): string
            protected createLayeredPane(): javax.swing.JLayeredPane
            protected createContentPane(): java.awt.Container
            protected createGlassPane(): java.awt.Component
            protected createRootLayout(): java.awt.LayoutManager
            public setJMenuBar(arg0: javax.swing.JMenuBar): void
            public setMenuBar(arg0: javax.swing.JMenuBar): void
            public getJMenuBar(): javax.swing.JMenuBar
            public getMenuBar(): javax.swing.JMenuBar
            public setContentPane(arg0: java.awt.Container): void
            public getContentPane(): java.awt.Container
            public setLayeredPane(arg0: javax.swing.JLayeredPane | javax.swing.JLayeredPane$$Lambda): void
            public getLayeredPane(): javax.swing.JLayeredPane
            public setGlassPane(arg0: java.awt.Component): void
            public getGlassPane(): java.awt.Component
            public isValidateRoot(): boolean
            public isOptimizedDrawingEnabled(): boolean
            public addNotify(): void
            public removeNotify(): void
            public setDefaultButton(arg0: javax.swing.JButton | javax.swing.JButton$$Lambda): void
            public getDefaultButton(): javax.swing.JButton
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class JRootPane$$Lambda extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static NONE: int
        }
    }
}