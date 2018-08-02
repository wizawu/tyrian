declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicTabbedPaneUI$TabbedPaneLayout implements java.awt.LayoutManager {
    public constructor(arg0: javax.swing.plaf.basic.BasicTabbedPaneUI)
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public removeLayoutComponent(arg0: java.awt.Component): void
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    protected calculateSize(arg0: boolean): java.awt.Dimension
    protected preferredTabAreaHeight(arg0: int, arg1: int): int
    protected preferredTabAreaWidth(arg0: int, arg1: int): int
    public layoutContainer(arg0: java.awt.Container): void
    public calculateLayoutInfo(): void
    protected calculateTabRects(arg0: int, arg1: int): void
    protected rotateTabRuns(arg0: int, arg1: int): void
    protected normalizeTabRuns(arg0: int, arg1: int, arg2: int, arg3: int): void
    protected padTabRun(arg0: int, arg1: int, arg2: int, arg3: int): void
    protected padSelectedTab(arg0: int, arg1: int): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}