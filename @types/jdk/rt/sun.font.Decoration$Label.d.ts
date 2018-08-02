declare namespace sun {
    namespace font {
        interface Decoration$Label {
            getCoreMetrics(): sun.font.CoreMetrics
            getLogicalBounds(): java.awt.geom.Rectangle2D
            handleDraw(arg0: java.awt.Graphics2D, arg1: float, arg2: float): void
            handleGetCharVisualBounds(arg0: int): java.awt.geom.Rectangle2D
            handleGetVisualBounds(): java.awt.geom.Rectangle2D
            handleGetOutline(arg0: float, arg1: float): java.awt.Shape
        }
    }
}