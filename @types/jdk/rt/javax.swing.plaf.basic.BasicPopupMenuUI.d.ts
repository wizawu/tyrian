declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicPopupMenuUI extends javax.swing.plaf.PopupMenuUI {
                    protected popupMenu: javax.swing.JPopupMenu
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public constructor()
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public installDefaults(): void
                    protected installListeners(): void
                    protected installKeyboardActions(): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    protected uninstallKeyboardActions(): void
                    public isPopupTrigger(arg0: java.awt.event.MouseEvent): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}