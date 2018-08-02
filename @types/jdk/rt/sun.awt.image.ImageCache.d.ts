declare namespace sun {
    namespace awt {
        namespace image {
            class ImageCache {
                public static getInstance(): sun.awt.image.ImageCache
                public flush(): void
                public getImage(arg0: sun.awt.image.ImageCache$PixelsKey | sun.awt.image.ImageCache$PixelsKey$$Lambda): java.awt.Image
                public setImage(arg0: sun.awt.image.ImageCache$PixelsKey | sun.awt.image.ImageCache$PixelsKey$$Lambda, arg1: java.awt.Image): void
                public static class: java.lang.Class<any>
            }
        }
    }
}