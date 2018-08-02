declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicRadioButtonUI extends javax.swing.plaf.basic.BasicToggleButtonUI {
                    protected icon: javax.swing.Icon
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    protected getPropertyPrefix(): string
                    protected installDefaults(arg0: javax.swing.AbstractButton): void
                    protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                    public getDefaultIcon(): javax.swing.Icon
                    protected installListeners(arg0: javax.swing.AbstractButton): void
                    protected uninstallListeners(arg0: javax.swing.AbstractButton): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paintFocus(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Dimension): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}