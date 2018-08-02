declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthInternalFrameTitlePane extends javax.swing.plaf.basic.BasicInternalFrameTitlePane implements javax.swing.plaf.synth.SynthUI , java.beans.PropertyChangeListener {
                    protected systemPopupMenu: javax.swing.JPopupMenu
                    protected menuButton: javax.swing.JButton
                    public constructor(arg0: javax.swing.JInternalFrame)
                    public getUIClassID(): string
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int): javax.swing.plaf.synth.SynthContext
                    protected addSubComponents(): void
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected assembleSystemMenu(): void
                    protected addSystemMenuItems(arg0: javax.swing.JPopupMenu): void
                    protected showSystemMenu(): void
                    public paintComponent(arg0: java.awt.Graphics): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    protected createLayout(): java.awt.LayoutManager
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}