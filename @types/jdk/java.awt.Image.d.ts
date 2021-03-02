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
      public abstract getWidth(arg0: java.awt.image.ImageObserver): int
      public abstract getHeight(arg0: java.awt.image.ImageObserver): int
      public abstract getSource(): java.awt.image.ImageProducer
      public abstract getGraphics(): java.awt.Graphics
      public abstract getProperty(arg0: java.lang.String, arg1: java.awt.image.ImageObserver): java.lang.Object
      public getScaledInstance(arg0: int, arg1: int, arg2: int): java.awt.Image
      public flush(): void
      public getCapabilities(arg0: java.awt.GraphicsConfiguration): java.awt.ImageCapabilities
      public setAccelerationPriority(arg0: float): void
      public getAccelerationPriority(): float
    }

  }
}
