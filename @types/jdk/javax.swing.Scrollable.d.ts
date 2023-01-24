declare namespace javax {
  namespace swing {
    interface Scrollable {
      getPreferredScrollableViewportSize(): java.awt.Dimension
      getScrollableUnitIncrement(
        arg0: java.awt.Rectangle,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      getScrollableBlockIncrement(
        arg0: java.awt.Rectangle,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      getScrollableTracksViewportWidth(): boolean
      getScrollableTracksViewportHeight(): boolean
    }
  }
}
