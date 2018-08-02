declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicScrollPaneUI extends javax.swing.plaf.ScrollPaneUI implements javax.swing.ScrollPaneConstants {
                    protected scrollpane: javax.swing.JScrollPane
                    protected vsbChangeListener: javax.swing.event.ChangeListener
                    protected hsbChangeListener: javax.swing.event.ChangeListener
                    protected viewportChangeListener: javax.swing.event.ChangeListener
                    protected spPropertyChangeListener: java.beans.PropertyChangeListener
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    protected installDefaults(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected installListeners(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected installKeyboardActions(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected uninstallDefaults(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected uninstallListeners(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected uninstallKeyboardActions(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected syncScrollPaneWithViewport(): void
                    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Component$BaselineResizeBehavior
                    protected createViewportChangeListener(): javax.swing.event.ChangeListener
                    protected createHSBChangeListener(): javax.swing.event.ChangeListener
                    protected createVSBChangeListener(): javax.swing.event.ChangeListener
                    protected createMouseWheelListener(): java.awt.event.MouseWheelListener
                    protected updateScrollBarDisplayPolicy(arg0: java.beans.PropertyChangeEvent): void
                    protected updateViewport(arg0: java.beans.PropertyChangeEvent): void
                    protected updateRowHeader(arg0: java.beans.PropertyChangeEvent): void
                    protected updateColumnHeader(arg0: java.beans.PropertyChangeEvent): void
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}