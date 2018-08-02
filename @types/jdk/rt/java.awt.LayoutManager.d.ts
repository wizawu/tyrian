declare namespace java {
    namespace awt {
interface LayoutManager {
    addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
    removeLayoutComponent(arg0: java.awt.Component): void
    preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
    layoutContainer(arg0: java.awt.Container): void
}

    }
}