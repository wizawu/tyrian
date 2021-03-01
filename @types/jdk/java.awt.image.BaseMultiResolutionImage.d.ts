declare namespace java {
  namespace awt {
    namespace image {

      class BaseMultiResolutionImage extends java.awt.image.AbstractMultiResolutionImage {

        public constructor(...arg0: java.awt.Image[])
        public constructor(arg0: int, ...arg1: java.awt.Image[])
        public getResolutionVariant(arg0: double, arg1: double): java.awt.Image
        public getResolutionVariants(): java.util.List<java.awt.Image>
        protected getBaseImage(): java.awt.Image
      }

    }
  }
}
