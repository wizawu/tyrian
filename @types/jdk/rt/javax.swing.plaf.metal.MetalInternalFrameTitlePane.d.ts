declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace metal {
                class MetalInternalFrameTitlePane extends javax.swing.plaf.basic.BasicInternalFrameTitlePane {
                    protected isPalette: boolean
                    protected paletteCloseIcon: javax.swing.Icon
                    protected paletteTitleHeight: int
                    public constructor(arg0: javax.swing.JInternalFrame)
                    public addNotify(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected createButtons(): void
                    protected assembleSystemMenu(): void
                    protected addSystemMenuItems(arg0: javax.swing.JMenu): void
                    protected showSystemMenu(): void
                    protected addSubComponents(): void
                    protected createPropertyChangeListener(): java.beans.PropertyChangeListener
                    protected createLayout(): java.awt.LayoutManager
                    public paintPalette(arg0: java.awt.Graphics): void
                    public paintComponent(arg0: java.awt.Graphics): void
                    public setPalette(arg0: boolean): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}