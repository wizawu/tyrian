declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthProgressBarUI extends javax.swing.plaf.basic.BasicProgressBarUI implements javax.swing.plaf.synth.SynthUI , java.beans.PropertyChangeListener {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
                    protected getBox(arg0: java.awt.Rectangle): java.awt.Rectangle
                    protected setAnimationIndex(arg0: int): void
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    protected paintText(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: java.lang.String | string): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}