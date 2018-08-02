declare namespace sun {
    namespace awt {
        namespace image {
            class MultiResolutionCachedImage extends sun.awt.image.AbstractMultiResolutionImage {
                public constructor(arg0: int, arg1: int, arg2: java.util.function$.BiFunction<java.lang.Integer, java.lang.Integer, java.awt.Image>)
                public constructor(arg0: int, arg1: int, arg2: java.awt.geom.Dimension2D[], arg3: java.util.function$.BiFunction<java.lang.Integer, java.lang.Integer, java.awt.Image>)
                public getResolutionVariant(arg0: int, arg1: int): java.awt.Image
                public getResolutionVariants(): java.util.List<java.awt.Image>
                public map(arg0: java.util.function$.Function<java.awt.Image, java.awt.Image>): sun.awt.image.MultiResolutionCachedImage
                public getWidth(arg0: java.awt.image.ImageObserver): int
                public getHeight(arg0: java.awt.image.ImageObserver): int
                public getProperty(arg0: java.lang.String | string, arg1: java.awt.image.ImageObserver): java.lang.Object
                protected getBaseImage(): java.awt.Image
                public static class: java.lang.Class<any>
            }
        }
    }
}