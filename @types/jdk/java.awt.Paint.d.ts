declare namespace java {
  namespace awt {
    interface Paint extends java.awt.Transparency {
      createContext(
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.Rectangle,
        arg2: java.awt.geom.Rectangle2D,
        arg3: java.awt.geom.AffineTransform,
        arg4: java.awt.RenderingHints
      ): java.awt.PaintContext
    }
  }
}
