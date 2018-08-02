declare namespace javax {
    namespace swing {
class BoxLayout implements java.awt.LayoutManager2 , java.io.Serializable {
    public static X_AXIS: int
    public static Y_AXIS: int
    public static LINE_AXIS: int
    public static PAGE_AXIS: int
    public constructor(arg0: java.awt.Container, arg1: int)
    public getTarget(): java.awt.Container
    public getAxis(): int
    public invalidateLayout(arg0: java.awt.Container): void
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public removeLayoutComponent(arg0: java.awt.Component): void
    public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public getLayoutAlignmentX(arg0: java.awt.Container): float
    public getLayoutAlignmentY(arg0: java.awt.Container): float
    public layoutContainer(arg0: java.awt.Container): void
    public static class: java.lang.Class<any>
}

    }
}