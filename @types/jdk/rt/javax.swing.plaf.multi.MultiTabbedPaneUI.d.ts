declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace multi {
                class MultiTabbedPaneUI extends javax.swing.plaf.TabbedPaneUI {
                    protected uis: java.util.Vector
                    public constructor()
                    public getUIs(): javax.swing.plaf.ComponentUI[]
                    public tabForCoordinate(arg0: javax.swing.JTabbedPane, arg1: int, arg2: int): int
                    public getTabBounds(arg0: javax.swing.JTabbedPane, arg1: int): java.awt.Rectangle
                    public getTabRunCount(arg0: javax.swing.JTabbedPane): int
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