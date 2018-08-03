declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicLabelUI extends javax.swing.plaf.LabelUI implements java.beans.PropertyChangeListener {
                    protected static labelUI: javax.swing.plaf.basic.BasicLabelUI
                    public constructor()
                    protected layoutCL(arg0: javax.swing.JLabel, arg1: java.awt.FontMetrics, arg2: java.lang.String | string, arg3: javax.swing.Icon, arg4: java.awt.Rectangle, arg5: java.awt.Rectangle, arg6: java.awt.Rectangle): string
                    protected paintEnabledText(arg0: javax.swing.JLabel, arg1: java.awt.Graphics, arg2: java.lang.String | string, arg3: int, arg4: int): void
                    protected paintDisabledText(arg0: javax.swing.JLabel, arg1: java.awt.Graphics, arg2: java.lang.String | string, arg3: int, arg4: int): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(arg0: javax.swing.JLabel): void
                    protected installListeners(arg0: javax.swing.JLabel): void
                    protected installComponents(arg0: javax.swing.JLabel): void
                    protected installKeyboardActions(arg0: javax.swing.JLabel): void
                    protected uninstallDefaults(arg0: javax.swing.JLabel): void
                    protected uninstallListeners(arg0: javax.swing.JLabel): void
                    protected uninstallComponents(arg0: javax.swing.JLabel): void
                    protected uninstallKeyboardActions(arg0: javax.swing.JLabel): void
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}