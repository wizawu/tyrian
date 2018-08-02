declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace windows {
class WindowsScrollBarUI extends javax.swing.plaf.basic.BasicScrollBarUI {
    public constructor()
    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
    protected installDefaults(): void
    protected getMinimumThumbSize(): java.awt.Dimension
    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
    protected configureScrollBarColors(): void
    protected createDecreaseButton(arg0: int): javax.swing.JButton
    protected createIncreaseButton(arg0: int): javax.swing.JButton
    protected createArrowButtonListener(): javax.swing.plaf.basic.BasicScrollBarUI$ArrowButtonListener
    protected paintTrack(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Rectangle): void
    protected paintThumb(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg2: java.awt.Rectangle): void
    protected paintDecreaseHighlight(arg0: java.awt.Graphics): void
    protected paintIncreaseHighlight(arg0: java.awt.Graphics): void
    protected setThumbRollover(arg0: boolean): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}