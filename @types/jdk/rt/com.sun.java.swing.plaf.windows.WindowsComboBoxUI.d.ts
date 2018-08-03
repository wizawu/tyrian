declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace windows {
                        class WindowsComboBoxUI extends javax.swing.plaf.basic.BasicComboBoxUI {
                            public constructor()
                            public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                            public installUI(arg0: javax.swing.JComponent): void
                            public uninstallUI(arg0: javax.swing.JComponent): void
                            protected installListeners(): void
                            protected uninstallListeners(): void
                            protected configureEditor(): void
                            protected unconfigureEditor(): void
                            public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                            public paintCurrentValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
                            public paintCurrentValueBackground(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
                            public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            protected createLayoutManager(): java.awt.LayoutManager
                            protected installKeyboardActions(): void
                            protected createPopup(): javax.swing.plaf.basic.ComboPopup
                            protected createEditor(): javax.swing.ComboBoxEditor
                            protected createRenderer(): javax.swing.ListCellRenderer
                            protected createArrowButton(): javax.swing.JButton
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}