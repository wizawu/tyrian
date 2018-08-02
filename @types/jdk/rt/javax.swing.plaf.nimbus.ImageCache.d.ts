declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                class ImageCache {
                    public constructor()
                    public constructor(arg0: int, arg1: int)
                    public flush(): void
                    public isImageCachable(arg0: int, arg1: int): boolean
                    public getImage(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, ...arg3: java.lang.Object[]): java.awt.Image
                    public setImage(arg0: java.awt.Image, arg1: java.awt.GraphicsConfiguration, arg2: int, arg3: int, ...arg4: java.lang.Object[]): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}