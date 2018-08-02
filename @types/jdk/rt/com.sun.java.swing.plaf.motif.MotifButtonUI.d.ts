declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
                        class MotifButtonUI extends javax.swing.plaf.basic.BasicButtonUI {
                            protected selectColor: java.awt.Color
                            public constructor()
                            public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                            protected createButtonListener(arg0: javax.swing.AbstractButton): javax.swing.plaf.basic.BasicButtonListener
                            public installDefaults(arg0: javax.swing.AbstractButton): void
                            protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                            protected getSelectColor(): java.awt.Color
                            public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                            protected paintIcon(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Rectangle): void
                            protected paintFocus(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.awt.Rectangle, arg4: java.awt.Rectangle): void
                            protected paintButtonPressed(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton): void
                            protected fillContentArea(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Color): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}