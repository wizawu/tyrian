declare namespace java {
  namespace awt {
    namespace image {
      interface ImageObserver$$lambda {
        (
          arg0: java.awt.Image,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): boolean | java.lang.Boolean
      }

      interface ImageObserver {
        readonly WIDTH: int
        readonly HEIGHT: int
        readonly PROPERTIES: int
        readonly SOMEBITS: int
        readonly FRAMEBITS: int
        readonly ALLBITS: int
        readonly ERROR: int
        readonly ABORT: int
        imageUpdate(
          arg0: java.awt.Image,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer
        ): boolean
      }
    }
  }
}
