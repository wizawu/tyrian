declare namespace sun {
    namespace java2d {
        namespace pipe {
            namespace hw {
                interface AccelSurface extends sun.java2d.pipe.hw.BufferedContextProvider , sun.java2d.Surface {
                    UNDEFINED: int
                    WINDOW: int
                    RT_PLAIN: int
                    TEXTURE: int
                    FLIP_BACKBUFFER: int
                    RT_TEXTURE: int
                    getType(): int
                    getNativeOps(): long
                    getNativeResource(arg0: int): long
                    markDirty(): void
                    isValid(): boolean
                    isSurfaceLost(): boolean
                    getBounds(): java.awt.Rectangle
                    getNativeBounds(): java.awt.Rectangle
                }
            }
        }
    }
}