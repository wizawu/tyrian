declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthComboBoxUI extends javax.swing.plaf.basic.BasicComboBoxUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installDefaults(): void
                    protected installListeners(): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    public getContext(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.synth.SynthContext
                    protected createPopup(): javax.swing.plaf.basic.ComboPopup
                    protected createRenderer(): javax.swing.ListCellRenderer
                    protected createEditor(): javax.swing.ComboBoxEditor
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    protected createArrowButton(): javax.swing.JButton
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public paintCurrentValue(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: boolean): void
                    protected getDefaultSize(): java.awt.Dimension
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}