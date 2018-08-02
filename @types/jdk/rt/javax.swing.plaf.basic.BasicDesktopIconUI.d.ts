declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicDesktopIconUI extends javax.swing.plaf.DesktopIconUI {
    protected desktopIcon: javax.swing.JInternalFrame$JDesktopIcon
    protected frame: javax.swing.JInternalFrame
    protected iconPane: javax.swing.JComponent
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public constructor()
    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    protected installComponents(): void
    protected uninstallComponents(): void
    protected installListeners(): void
    protected uninstallListeners(): void
    protected installDefaults(): void
    protected uninstallDefaults(): void
    protected createMouseInputListener(): javax.swing.event.MouseInputListener
    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getInsets(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Insets
    public deiconize(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}