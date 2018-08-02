declare namespace java {
    namespace awt {
        class BorderLayout implements java.awt.LayoutManager2 , java.io.Serializable {
            public static NORTH: string
            public static SOUTH: string
            public static EAST: string
            public static WEST: string
            public static CENTER: string
            public static BEFORE_FIRST_LINE: string
            public static AFTER_LAST_LINE: string
            public static BEFORE_LINE_BEGINS: string
            public static AFTER_LINE_ENDS: string
            public static PAGE_START: string
            public static PAGE_END: string
            public static LINE_START: string
            public static LINE_END: string
            public constructor()
            public constructor(arg0: int, arg1: int)
            public getHgap(): int
            public setHgap(arg0: int): void
            public getVgap(): int
            public setVgap(arg0: int): void
            public addLayoutComponent(arg0: java.awt.Component, arg1: java.lang.Object): void
            public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
            public removeLayoutComponent(arg0: java.awt.Component): void
            public getLayoutComponent(arg0: java.lang.Object): java.awt.Component
            public getLayoutComponent(arg0: java.awt.Container, arg1: java.lang.Object): java.awt.Component
            public getConstraints(arg0: java.awt.Component): java.lang.Object
            public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public maximumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            public getLayoutAlignmentX(arg0: java.awt.Container): float
            public getLayoutAlignmentY(arg0: java.awt.Container): float
            public invalidateLayout(arg0: java.awt.Container): void
            public layoutContainer(arg0: java.awt.Container): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}