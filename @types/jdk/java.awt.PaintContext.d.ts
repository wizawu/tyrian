declare namespace java {
  namespace awt {

    interface PaintContext {
      dispose(): void
      getColorModel(): java.awt.image.ColorModel
      getRaster(arg0: int, arg1: int, arg2: int, arg3: int): java.awt.image.Raster
    }

  }
}
