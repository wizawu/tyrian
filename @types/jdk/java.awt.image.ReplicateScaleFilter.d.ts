declare namespace java {
  namespace awt {
    namespace image {

      class ReplicateScaleFilter extends java.awt.image.ImageFilter {
        protected srcWidth: int
        protected srcHeight: int
        protected destWidth: int
        protected destHeight: int
        protected srcrows: int[]
        protected srccols: int[]
        protected outpixbuf: java.lang.Object
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
        public setProperties(arg0: java.util.Hashtable<unknown,unknown>): void
        public setDimensions(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Byte[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
        public setPixels(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: java.awt.image.ColorModel, arg5: number[] | java.lang.Integer[], arg6: number | java.lang.Integer, arg7: number | java.lang.Integer): void
      }

    }
  }
}
