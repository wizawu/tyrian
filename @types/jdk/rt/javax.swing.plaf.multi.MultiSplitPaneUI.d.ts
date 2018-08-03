declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiSplitPaneUI extends javax.swing.plaf.SplitPaneUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public resetToPreferredSizes(arg0: javax.swing.JSplitPane): void
                    public setDividerLocation(arg0: javax.swing.JSplitPane, arg1: int): void
                    public getDividerLocation(arg0: javax.swing.JSplitPane): int
                    public getMinimumDividerLocation(arg0: javax.swing.JSplitPane): int
                    public getMaximumDividerLocation(arg0: javax.swing.JSplitPane): int
                    public finishedPaintingChildren(arg0: javax.swing.JSplitPane, arg1: java.awt.Graphics): void
                    public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
                    public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                    public installUI(arg0: javax.swing.JComponent): void
                    public uninstallUI(arg0: javax.swing.JComponent): void
                    public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
                    public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                    public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
                    public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}