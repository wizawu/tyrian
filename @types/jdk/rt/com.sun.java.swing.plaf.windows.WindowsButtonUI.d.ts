declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace windows {
                        class WindowsButtonUI extends javax.swing.plaf.basic.BasicButtonUI {
                            protected dashedRectGapX: int
                            protected dashedRectGapY: int
                            protected dashedRectGapWidth: int
                            protected dashedRectGapHeight: int
                            protected focusColor: java.awt.Color
                            public constructor()
                            public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                            protected installDefaults(arg0: javax.swing.AbstractButton): void
                            protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                            protected getFocusColor(): java.awt.Color
                            protected paintText(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                            protected paintFocus(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.awt.Rectangle, arg4: java.awt.Rectangle): void
                            protected paintButtonPressed(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton): void
                            public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                            public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}