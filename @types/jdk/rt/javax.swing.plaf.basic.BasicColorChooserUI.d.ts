declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicColorChooserUI extends javax.swing.plaf.ColorChooserUI {
                    protected chooser: javax.swing.JColorChooser
                    protected defaultChoosers: javax.swing.colorchooser.AbstractColorChooserPanel[]
                    protected previewListener: javax.swing.event.ChangeListener
                    protected propertyChangeListener: java.beans.PropertyChangeListener
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    protected createDefaultChoosers(): javax.swing.colorchooser.AbstractColorChooserPanel[]
                    protected uninstallDefaultChoosers(): void
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installPreviewPanel(): void
                    protected uninstallPreviewPanel(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected installListeners(): void
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected uninstallListeners(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}