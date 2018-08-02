declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalInternalFrameUI extends javax.swing.plaf.basic.BasicInternalFrameUI {
                    protected static IS_PALETTE: string
                    public constructor(arg0: javax.swing.JInternalFrame)
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installKeyboardActions(): void
                    protected uninstallKeyboardActions(): void
                    protected uninstallComponents(): void
                    protected createNorthPane(arg0: javax.swing.JInternalFrame): javax.swing.JComponent
                    public setPalette(arg0: boolean): void
                    protected createBorderListener(arg0: javax.swing.JInternalFrame): javax.swing.event.MouseInputAdapter
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}