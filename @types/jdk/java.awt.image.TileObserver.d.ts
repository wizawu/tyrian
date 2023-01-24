declare namespace java {
  namespace awt {
    namespace image {
      interface TileObserver$$lambda {
        (
          arg0: java.awt.image.WritableRenderedImage,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: boolean | java.lang.Boolean
        ): void
      }

      interface TileObserver {
        tileUpdate(
          arg0: java.awt.image.WritableRenderedImage,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: boolean | java.lang.Boolean
        ): void
      }
    }
  }
}
