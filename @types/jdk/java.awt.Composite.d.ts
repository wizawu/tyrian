declare namespace java {
  namespace awt {
    interface Composite$$lambda {
      (
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.image.ColorModel,
        arg2: java.awt.RenderingHints
      ): java.awt.CompositeContext
    }

    interface Composite {
      createContext(
        arg0: java.awt.image.ColorModel,
        arg1: java.awt.image.ColorModel,
        arg2: java.awt.RenderingHints
      ): java.awt.CompositeContext
    }
  }
}
