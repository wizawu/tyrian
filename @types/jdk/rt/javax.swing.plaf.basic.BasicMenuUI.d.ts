declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicMenuUI extends javax.swing.plaf.basic.BasicMenuItemUI {
    protected changeListener: javax.swing.event.ChangeListener
    protected menuListener: javax.swing.event.MenuListener
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    protected installDefaults(): void
    protected getPropertyPrefix(): string
    protected installListeners(): void
    protected installKeyboardActions(): void
    protected uninstallKeyboardActions(): void
    protected createMouseInputListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.event.MouseInputListener
    protected createMenuListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.event.MenuListener
    protected createChangeListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.event.ChangeListener
    protected createPropertyChangeListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.beans.PropertyChangeListener
    protected uninstallDefaults(): void
    protected uninstallListeners(): void
    protected createMenuDragMouseListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.event.MenuDragMouseListener
    protected createMenuKeyListener(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.event.MenuKeyListener
    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    protected setupPostTimer(arg0: javax.swing.JMenu): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}