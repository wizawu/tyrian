declare namespace sun {
    namespace awt {
        namespace image {
class BufImgSurfaceManager extends sun.awt.image.SurfaceManager {
    protected bImg: java.awt.image.BufferedImage
    protected sdDefault: sun.java2d.SurfaceData
    public constructor(arg0: java.awt.image.BufferedImage)
    public getPrimarySurfaceData(): sun.java2d.SurfaceData
    public restoreContents(): sun.java2d.SurfaceData
    public static class: java.lang.Class<any>
}

        }
    }
}