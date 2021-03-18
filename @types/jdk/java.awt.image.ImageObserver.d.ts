declare namespace java {
  namespace awt {
    namespace image {

      interface ImageObserver$$lambda {
        (arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean | java.lang.Boolean
      }

      interface ImageObserver {
        public static readonly WIDTH: int
        public static readonly HEIGHT: int
        public static readonly PROPERTIES: int
        public static readonly SOMEBITS: int
        public static readonly FRAMEBITS: int
        public static readonly ALLBITS: int
        public static readonly ERROR: int
        public static readonly ABORT: int
        imageUpdate(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      }

    }
  }
}
