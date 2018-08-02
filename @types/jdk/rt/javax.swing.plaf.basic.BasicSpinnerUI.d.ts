declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicSpinnerUI extends javax.swing.plaf.SpinnerUI {
    protected spinner: javax.swing.JSpinner
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    protected installListeners(): void
    protected uninstallListeners(): void
    protected installDefaults(): void
    protected uninstallDefaults(): void
    protected installNextButtonListeners(arg0: java.awt.Component): void
    protected installPreviousButtonListeners(arg0: java.awt.Component): void
    protected createLayout(): java.awt.LayoutManager
    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
    protected createPreviousButton(): java.awt.Component
    protected createNextButton(): java.awt.Component
    protected createEditor(): javax.swing.JComponent
    protected replaceEditor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    protected installKeyboardActions(): void
    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
    public getBaselineResizeBehavior(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Component$BaselineResizeBehavior
    public static class: java.lang.Class<any>
}

            }
        }
    }
}