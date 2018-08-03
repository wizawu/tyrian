declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicButtonUI extends javax.swing.plaf.ButtonUI {
                    protected defaultTextIconGap: int
                    protected defaultTextShiftOffset: int
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    protected getPropertyPrefix(): string
                    public installUI(arg0: javax.swing.JComponent): void
                    protected installDefaults(arg0: javax.swing.AbstractButton): void
                    protected installListeners(arg0: javax.swing.AbstractButton): void
                    protected installKeyboardActions(arg0: javax.swing.AbstractButton): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    protected uninstallKeyboardActions(arg0: javax.swing.AbstractButton): void
                    protected uninstallListeners(arg0: javax.swing.AbstractButton): void
                    protected uninstallDefaults(arg0: javax.swing.AbstractButton): void
                    protected createButtonListener(arg0: javax.swing.AbstractButton): javax.swing.plaf.basic.BasicButtonListener
                    public getDefaultTextIconGap(arg0: javax.swing.AbstractButton): int
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    protected paintIcon(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle): void
                    protected paintText(arg0: java.awt.Graphics, arg1: javax.swing.JComponent, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                    protected paintText(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.lang.String | string): void
                    protected paintFocus(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton, arg2: java.awt.Rectangle, arg3: java.awt.Rectangle, arg4: java.awt.Rectangle): void
                    protected paintButtonPressed(arg0: java.awt.Graphics, arg1: javax.swing.AbstractButton): void
                    protected clearTextShiftOffset(): void
                    protected setTextShiftOffset(): void
                    protected getTextShiftOffset(): int
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getBaseline(arg0: javax.swing.JComponent, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent): java.awt.Component$BaselineResizeBehavior
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}