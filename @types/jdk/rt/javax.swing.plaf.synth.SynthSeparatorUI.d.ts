declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
class SynthSeparatorUI extends javax.swing.plaf.SeparatorUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public installDefaults(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
    public uninstallDefaults(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
    public installListeners(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
    public uninstallListeners(arg0: javax.swing.JSeparator | javax.swing.JSeparator$$Lambda): void
    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}