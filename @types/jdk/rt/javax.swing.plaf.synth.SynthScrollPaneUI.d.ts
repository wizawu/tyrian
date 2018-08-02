declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthScrollPaneUI extends javax.swing.plaf.basic.BasicScrollPaneUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    protected installDefaults(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected installListeners(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected uninstallDefaults(arg0: javax.swing.JScrollPane | javax.swing.JScrollPane$$Lambda): void
                    protected uninstallListeners(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}