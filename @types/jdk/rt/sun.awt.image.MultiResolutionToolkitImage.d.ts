declare namespace sun {
    namespace awt {
        namespace image {
            class MultiResolutionToolkitImage extends sun.awt.image.ToolkitImage implements sun.awt.image.MultiResolutionImage {
                public constructor(arg0: java.awt.Image, arg1: java.awt.Image)
                public getResolutionVariant(arg0: int, arg1: int): java.awt.Image
                public getResolutionVariant(): java.awt.Image
                public getResolutionVariants(): java.util.List<java.awt.Image>
                public static getResolutionVariantObserver(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver, arg2: int, arg3: int, arg4: int, arg5: int): java.awt.image.ImageObserver
                public static getResolutionVariantObserver(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean): java.awt.image.ImageObserver
                public static class: java.lang.Class<any>
            }
        }
    }
}