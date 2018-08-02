declare namespace sun {
    namespace awt {
        namespace image {
            interface MultiResolutionImage {
                getResolutionVariant(arg0: int, arg1: int): java.awt.Image
                getResolutionVariants(): java.util.List<java.awt.Image>
            }
        }
    }
}