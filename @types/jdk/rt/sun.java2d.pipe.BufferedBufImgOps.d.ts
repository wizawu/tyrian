declare namespace sun {
    namespace java2d {
        namespace pipe {
class BufferedBufImgOps {
    public constructor()
    public static enableBufImgOp(arg0: sun.java2d.pipe.RenderQueue, arg1: sun.java2d.SurfaceData, arg2: java.awt.image.BufferedImage, arg3: java.awt.image.BufferedImageOp): void
    public static disableBufImgOp(arg0: sun.java2d.pipe.RenderQueue, arg1: java.awt.image.BufferedImageOp): void
    public static isConvolveOpValid(arg0: java.awt.image.ConvolveOp): boolean
    public static isRescaleOpValid(arg0: java.awt.image.RescaleOp, arg1: java.awt.image.BufferedImage): boolean
    public static isLookupOpValid(arg0: java.awt.image.LookupOp, arg1: java.awt.image.BufferedImage): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}