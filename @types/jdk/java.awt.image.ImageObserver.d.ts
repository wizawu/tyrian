declare namespace java {
  namespace awt {
    namespace image {

      interface ImageObserver$$lambda {
        (arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
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
        imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
      }

    }
  }
}
