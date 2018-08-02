declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
class SynthListUI extends javax.swing.plaf.basic.BasicListUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
    protected installListeners(): void
    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
    protected uninstallListeners(): void
    protected installDefaults(): void
    protected uninstallDefaults(): void
    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
    public static class: java.lang.Class<any>
}

            }
        }
    }
}