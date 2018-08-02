declare namespace java {
    namespace awt {
class GridBagLayout implements java.awt.LayoutManager2 , java.io.Serializable {
    protected static MAXGRIDSIZE: int
    protected static MINSIZE: int
    protected static PREFERREDSIZE: int
    protected comptable: java.util.Hashtable<java.awt.Component, java.awt.GridBagConstraints>
    protected defaultConstraints: java.awt.GridBagConstraints
    protected layoutInfo: java.awt.GridBagLayoutInfo
    public columnWidths: int[]
    public rowHeights: int[]
    public columnWeights: double[]
    public rowWeights: double[]
    public constructor()
    public setConstraints(arg0: java.awt.Component, arg1: java.awt.GridBagConstraints): void
    public getConstraints(arg0: java.awt.Component): java.awt.GridBagConstraints
    protected lookupConstraints(arg0: java.awt.Component): java.awt.GridBagConstraints
    public getLayoutOrigin(): java.awt.Point
    public getLayoutDimensions(): int[][]
    public getLayoutWeights(): double[][]
    public location(arg0: int, arg1: int): java.awt.Point
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
    public removeLayoutComponent(arg0: java.awt.Component): void
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public getLayoutAlignmentX(arg0: java.awt.Container): float
    public getLayoutAlignmentY(arg0: java.awt.Container): float
    public invalidateLayout(arg0: java.awt.Container): void
    public layoutContainer(arg0: java.awt.Container): void
    public toString(): string
    protected getLayoutInfo(arg0: java.awt.Container, arg1: int): java.awt.GridBagLayoutInfo
    protected GetLayoutInfo(arg0: java.awt.Container, arg1: int): java.awt.GridBagLayoutInfo
    protected adjustForGravity(arg0: java.awt.GridBagConstraints, arg1: java.awt.Rectangle): void
    protected AdjustForGravity(arg0: java.awt.GridBagConstraints, arg1: java.awt.Rectangle): void
    protected getMinSize(arg0: java.awt.Container, arg1: java.awt.GridBagLayoutInfo): java.awt.Dimension
    protected GetMinSize(arg0: java.awt.Container, arg1: java.awt.GridBagLayoutInfo): java.awt.Dimension
    protected arrangeGrid(arg0: java.awt.Container): void
    protected ArrangeGrid(arg0: java.awt.Container): void
    public static class: java.lang.Class<any>
}

    }
}