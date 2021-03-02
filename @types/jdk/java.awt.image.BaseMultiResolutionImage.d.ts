declare namespace java {
  namespace awt {
    namespace image {

      class BaseMultiResolutionImage extends java.awt.image.AbstractMultiResolutionImage {
        public constructor(...vargs: (java.awt.Image)[])
        public constructor(arg0: number | java.lang.Integer, ...vargs: (java.awt.Image)[])
        public getResolutionVariant(arg0: number | java.lang.Double, arg1: number | java.lang.Double): java.awt.Image
        public getResolutionVariants(): java.util.List<java.awt.Image>
        protected getBaseImage(): java.awt.Image
      }

    }
  }
}
