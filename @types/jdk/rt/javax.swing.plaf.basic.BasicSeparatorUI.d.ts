declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicSeparatorUI extends javax.swing.plaf.SeparatorUI {
                    protected shadow: java.awt.Color
                    protected highlight: java.awt.Color
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installDefaults(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
                    protected uninstallDefaults(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
                    protected installListeners(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
                    protected uninstallListeners(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}