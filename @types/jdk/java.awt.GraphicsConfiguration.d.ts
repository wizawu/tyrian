declare namespace java {
  namespace awt {
    abstract class GraphicsConfiguration {
      static readonly $assertionsDisabled: boolean
      protected constructor()
      public abstract getDevice(): java.awt.GraphicsDevice
      public createCompatibleImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.awt.image.BufferedImage
      public createCompatibleImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.awt.image.BufferedImage
      public createCompatibleVolatileImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer
      ): java.awt.image.VolatileImage
      public createCompatibleVolatileImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.awt.image.VolatileImage
      public createCompatibleVolatileImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.awt.ImageCapabilities
      ): java.awt.image.VolatileImage
      public createCompatibleVolatileImage(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.awt.ImageCapabilities,
        arg3: number | java.lang.Integer
      ): java.awt.image.VolatileImage
      public abstract getColorModel(): java.awt.image.ColorModel
      public abstract getColorModel(arg0: number | java.lang.Integer): java.awt.image.ColorModel
      public abstract getDefaultTransform(): java.awt.geom.AffineTransform
      public abstract getNormalizingTransform(): java.awt.geom.AffineTransform
      public abstract getBounds(): java.awt.Rectangle
      public getBufferCapabilities(): java.awt.BufferCapabilities
      public getImageCapabilities(): java.awt.ImageCapabilities
      public isTranslucencyCapable(): boolean
    }
  }
}
