declare namespace javax {
    namespace swing {
interface Scrollable {
    getPreferredScrollableViewportSize(): java.awt.Dimension
    getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
    getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: int, arg2: int): int
    getScrollableTracksViewportWidth(): boolean
    getScrollableTracksViewportHeight(): boolean
}

    }
}