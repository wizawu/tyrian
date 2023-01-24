declare namespace java {
  namespace awt {
    abstract class Image {
      protected accelerationPriority: float
      public static readonly UndefinedProperty: java.lang.Object
      public static readonly SCALE_DEFAULT: int
      public static readonly SCALE_FAST: int
      public static readonly SCALE_SMOOTH: int
      public static readonly SCALE_REPLICATE: int
      public static readonly SCALE_AREA_AVERAGING: int
      surfaceManager: sun.awt.image.SurfaceManager
      public constructor()
      public abstract getWidth(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
      public abstract getHeight(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): number
      public abstract getSource(): java.awt.image.ImageProducer
      public abstract getGraphics(): java.awt.Graphics
      public abstract getProperty(
        arg0: java.lang.String | string,
        arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): java.lang.Object
      public getScaledInstance(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.awt.Image
      public flush(): void
      public getCapabilities(arg0: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
      public setAccelerationPriority(arg0: number | java.lang.Float): void
      public getAccelerationPriority(): number
    }
  }
}
