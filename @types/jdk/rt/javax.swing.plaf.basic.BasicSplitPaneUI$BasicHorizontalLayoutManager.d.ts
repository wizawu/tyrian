declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
class BasicSplitPaneUI$BasicHorizontalLayoutManager implements java.awt.LayoutManager2 {
    protected sizes: int[]
    protected components: java.awt.Component[]
    public layoutContainer(arg0: java.awt.Container): void
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public removeLayoutComponent(arg0: java.awt.Component): void
    public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
    public getLayoutAlignmentX(arg0: java.awt.Container): float
    public getLayoutAlignmentY(arg0: java.awt.Container): float
    public invalidateLayout(arg0: java.awt.Container): void
    public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public resetToPreferredSizes(): void
    protected resetSizeAt(arg0: int): void
    protected setSizes(arg0: int[]): void
    protected getSizes(): int[]
    protected getPreferredSizeOfComponent(arg0: java.awt.Component): int
    protected getSizeOfComponent(arg0: java.awt.Component): int
    protected getAvailableSize(arg0: java.awt.Dimension, arg1: java.awt.Insets): int
    protected getInitialLocation(arg0: java.awt.Insets): int
    protected setComponentToSize(arg0: java.awt.Component, arg1: int, arg2: int, arg3: java.awt.Insets, arg4: java.awt.Dimension): void
    protected updateComponents(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}