declare namespace java {
  namespace awt {

    interface CompositeContext {
      dispose(): void
      compose(arg0: java.awt.image.Raster, arg1: java.awt.image.Raster, arg2: java.awt.image.WritableRaster): void
    }

  }
}
