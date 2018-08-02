declare namespace javax {
    namespace swing {
class GroupLayout implements java.awt.LayoutManager2 {
    public static DEFAULT_SIZE: int
    public static PREFERRED_SIZE: int
    public constructor(arg0: java.awt.Container)
    public setHonorsVisibility(arg0: boolean): void
    public getHonorsVisibility(): boolean
    public setHonorsVisibility(arg0: java.awt.Component, arg1: java.lang.Boolean | boolean): void
    public setAutoCreateGaps(arg0: boolean): void
    public getAutoCreateGaps(): boolean
    public setAutoCreateContainerGaps(arg0: boolean): void
    public getAutoCreateContainerGaps(): boolean
    public setHorizontalGroup(arg0: javax.swing.GroupLayout$Group): void
    public setVerticalGroup(arg0: javax.swing.GroupLayout$Group): void
    public createSequentialGroup(): javax.swing.GroupLayout$SequentialGroup
    public createParallelGroup(): javax.swing.GroupLayout$ParallelGroup
    public createParallelGroup(arg0: javax.swing.GroupLayout$Alignment): javax.swing.GroupLayout$ParallelGroup
    public createParallelGroup(arg0: javax.swing.GroupLayout$Alignment, arg1: boolean): javax.swing.GroupLayout$ParallelGroup
    public createBaselineGroup(arg0: boolean, arg1: boolean): javax.swing.GroupLayout$ParallelGroup
    public linkSize(...arg0: java.awt.Component[]): void
    public linkSize(arg0: int, ...arg1: java.awt.Component[]): void
    public replace(arg0: java.awt.Component, arg1: java.awt.Component): void
    public setLayoutStyle(arg0: javax.swing.LayoutStyle): void
    public getLayoutStyle(): javax.swing.LayoutStyle
    public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    public removeLayoutComponent(arg0: java.awt.Component): void
    public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public layoutContainer(arg0: java.awt.Container): void
    public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
    public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    public getLayoutAlignmentX(arg0: java.awt.Container): float
    public getLayoutAlignmentY(arg0: java.awt.Container): float
    public invalidateLayout(arg0: java.awt.Container): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}