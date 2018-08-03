declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    protected installDefaults(): void
                    protected configureScrollBarColors(): void
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected uninstallDefaults(): void
                    public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    public getSupportsAbsolutePositioning(): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    protected paintTrack(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
                    protected paintThumb(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.awt.Rectangle): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    protected getMinimumThumbSize(): java.awt.Dimension
                    protected createDecreaseButton(arg0: int): javax.swing.JButton
                    protected createIncreaseButton(arg0: int): javax.swing.JButton
                    protected setThumbRollover(arg0: boolean): void
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}