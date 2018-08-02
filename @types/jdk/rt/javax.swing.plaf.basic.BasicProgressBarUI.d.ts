declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicProgressBarUI extends javax.swing.plaf.ProgressBarUI {
                    protected progressBar: javax.swing.JProgressBar
                    protected changeListener: javax.swing.event.ChangeListener
                    protected boxRect: java.awt.Rectangle
                    public constructor()
                    public static createUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    public uninstallUI(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected installDefaults(): void
                    protected uninstallDefaults(): void
                    protected installListeners(): void
                    protected startAnimationTimer(): void
                    protected stopAnimationTimer(): void
                    protected uninstallListeners(): void
                    public getBaseline(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: int, arg2: int): int
                    public getBaselineResizeBehavior(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Component$BaselineResizeBehavior
                    protected getPreferredInnerHorizontal(): java.awt.Dimension
                    protected getPreferredInnerVertical(): java.awt.Dimension
                    protected getSelectionForeground(): java.awt.Color
                    protected getSelectionBackground(): java.awt.Color
                    protected getCellLength(): int
                    protected setCellLength(arg0: int): void
                    protected getCellSpacing(): int
                    protected setCellSpacing(arg0: int): void
                    protected getAmountFull(arg0: java.awt.Insets, arg1: int, arg2: int): int
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected getBox(arg0: java.awt.Rectangle): java.awt.Rectangle
                    protected getBoxLength(arg0: int, arg1: int): int
                    protected paintIndeterminate(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paintDeterminate(arg0: java.awt.Graphics, arg1: javax.swing.JComponent | javax.swing.JComponent$$Lambda): void
                    protected paintString(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: java.awt.Insets): void
                    protected getStringPlacement(arg0: java.awt.Graphics, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: int, arg5: int): java.awt.Point
                    public getPreferredSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda): java.awt.Dimension
                    protected getAnimationIndex(): int
                    protected getFrameCount(): int
                    protected setAnimationIndex(arg0: int): void
                    protected incrementAnimationIndex(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}