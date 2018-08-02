declare namespace javax {
    namespace swing {
        namespace plaf {
abstract class TextUI extends javax.swing.plaf.ComponentUI {
    public constructor()
    public modelToView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int): java.awt.Rectangle
    public modelToView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: javax.swing.text.Position$Bias): java.awt.Rectangle
    public viewToModel(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point): int
    public viewToModel(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point, arg2: javax.swing.text.Position$Bias[]): int
    public getNextVisualPositionFrom(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: javax.swing.text.Position$Bias, arg3: int, arg4: javax.swing.text.Position$Bias[]): int
    public damageRange(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: int): void
    public damageRange(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: int, arg2: int, arg3: javax.swing.text.Position$Bias, arg4: javax.swing.text.Position$Bias): void
    public getEditorKit(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda): javax.swing.text.EditorKit
    public getRootView(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda): javax.swing.text.View
    public getToolTipText(arg0: javax.swing.text.JTextComponent | javax.swing.text.JTextComponent$$Lambda, arg1: java.awt.Point): string
    public static class: java.lang.Class<any>
}

        }
    }
}