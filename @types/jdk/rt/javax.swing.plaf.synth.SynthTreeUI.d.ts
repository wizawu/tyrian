declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace synth {
                class SynthTreeUI extends javax.swing.plaf.basic.BasicTreeUI implements java.beans.PropertyChangeListener , javax.swing.plaf.synth.SynthUI {
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public getExpandedIcon(): javax.swing.Icon
                    protected installDefaults(): void
                    protected installListeners(): void
                    public getContext(arg0: javax.swing.JComponent): javax.swing.plaf.synth.SynthContext
                    protected createDefaultCellEditor(): javax.swing.tree.TreeCellEditor
                    protected createDefaultCellRenderer(): javax.swing.tree.TreeCellRenderer
                    protected uninstallDefaults(): void
                    protected uninstallListeners(): void
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public paintBorder(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paint(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Graphics): void
                    protected paintHorizontalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
                    protected paintHorizontalLine(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: int, arg3: int, arg4: int): void
                    protected paintVerticalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: javax.swing.tree.TreePath): void
                    protected paintVerticalLine(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: int, arg3: int, arg4: int): void
                    protected paintExpandControl(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
                    protected drawCentered(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: javax.swing.Icon, arg3: int, arg4: int): void
                    public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    protected paintDropLine(arg0: java.awt.Graphics): void
                    protected getRowX(arg0: int, arg1: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}