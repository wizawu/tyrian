declare namespace java {
  namespace awt {

    interface PaintContext {
      dispose(): void
      getColorModel(): java.awt.image.ColorModel
      getRaster(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): java.awt.image.Raster
    }

  }
}
