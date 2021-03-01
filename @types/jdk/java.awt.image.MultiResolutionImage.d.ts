declare namespace java {
  namespace awt {
    namespace image {

      interface MultiResolutionImage {

        getResolutionVariant(arg0: double, arg1: double): java.awt.Image
        getResolutionVariants(): java.util.List<java.awt.Image>
      }

    }
  }
}
