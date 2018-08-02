declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                abstract class BasicTextUI extends javax.swing.plaf.TextUI implements javax.swing.text.ViewFactory {
                    public constructor()
                    protected createCaret(): javax.swing.text.Caret
                    protected createHighlighter(): javax.swing.text.Highlighter
                    protected getKeymapName(): string
                    protected createKeymap(): javax.swing.text.Keymap
                    protected propertyChange(arg0: java.beans.PropertyChangeEvent): void
                    protected getPropertyPrefix(): string
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected installListeners(): void
                    protected uninstallListeners(): void
                    protected installKeyboardActions(): void
                    protected uninstallKeyboardActions(): void
                    protected paintBackground(arg0: java.awt.Graphics): void
                    protected getComponent(): javax.swing.text.JTextComponent
                    protected modelChanged(): void
                    protected setView(arg0: javax.swing.text.View): void
                    protected paintSafely(arg0: java.awt.Graphics): void
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    protected getVisibleEditorRect(): java.awt.Rectangle
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
                    public create(arg0: javax.swing.text.Element): javax.swing.text.View
                    public create(arg0: javax.swing.text.Element, arg1: int, arg2: int): javax.swing.text.View
                    public static class: java.lang.Class<any>
                }
                abstract class BasicTextUI$$Lambda extends javax.swing.plaf.TextUI implements javax.swing.text.ViewFactory {
                    public constructor()
                }
            }
        }
    }
}