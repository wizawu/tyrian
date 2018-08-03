declare namespace javax {
    namespace swing {
        class SpringLayout implements java.awt.LayoutManager2 {
            public static readonly NORTH: string
            public static readonly SOUTH: string
            public static readonly EAST: string
            public static readonly WEST: string
            public static readonly HORIZONTAL_CENTER: string
            public static readonly VERTICAL_CENTER: string
            public static readonly BASELINE: string
            public static readonly WIDTH: string
            public static readonly HEIGHT: string
            public constructor()
            public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
            public removeLayoutComponent(arg0: java.awt.Component): void
            public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
            public getLayoutAlignmentX(arg0: java.awt.Container): float
            public getLayoutAlignmentY(arg0: java.awt.Container): float
            public invalidateLayout(arg0: java.awt.Container): void
            public putConstraint(arg0: java.lang.String | string, arg1: java.awt.Component, arg2: int, arg3: java.lang.String | string, arg4: java.awt.Component): void
            public putConstraint(arg0: java.lang.String | string, arg1: java.awt.Component, arg2: javax.swing.Spring, arg3: java.lang.String | string, arg4: java.awt.Component): void
            public getConstraints(arg0: java.awt.Component): javax.swing.SpringLayout$Constraints
            public getConstraint(arg0: java.lang.String | string, arg1: java.awt.Component): javax.swing.Spring
            public layoutContainer(arg0: java.awt.Container): void
            public static class: java.lang.Class<any>
        }
    }
}