declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
class MultiTextUI extends javax.swing.plaf.TextUI {
    protected uis: java.util.Vector
    public constructor()
    public getUIs(): javax.swing.plaf.ComponentUI[]
    public getToolTipText(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point): string
    public modelToView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int): java.awt.Rectangle
    public modelToView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.Rectangle
    public viewToModel(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point): int
    public viewToModel(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point, arg2: javax.swing.text.Position$Bias[]): int
    public getNextVisualPositionFrom(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
    public damageRange(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: int): void
    public damageRange(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: javax.swing.text.Position$Bias): void
    public getEditorKit(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda): javax.swing.text.EditorKit
    public getRootView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda): javax.swing.text.View
    public contains(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): boolean
    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
    public getAccessibleChildrenCount(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): int
    public getAccessibleChild(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int): javax.accessibility.Accessible
    public static class: java.lang.Class<any>
}

            }
        }
    }
}