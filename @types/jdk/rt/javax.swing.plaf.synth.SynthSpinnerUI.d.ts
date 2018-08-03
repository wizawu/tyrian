declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthSpinnerUI extends javax.swing.plaf.basic.BasicSpinnerUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected createLayout(): java.awt.LayoutManager
                    protected createPreviousButton(): java.awt.Component
                    protected createNextButton(): java.awt.Component
                    protected createEditor(): javax.swing.JComponent
                    protected replaceEditor(arg0: javax.swing.JComponent, arg1: javax.swing.JComponent): void
                    public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}