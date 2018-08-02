declare namespace sun {
    namespace java2d {
        namespace xr {
class MaskTileManager {
    public static MASK_SIZE: int
    public constructor(arg0: sun.java2d.xr.XRCompositeManager, arg1: int)
    public fillMask(arg0: sun.java2d.xr.XRSurfaceData): void
    public uploadMask(arg0: int, arg1: int, arg2: int, arg3: int, arg4: byte[]): int
    public clearUploadMask(arg0: int, arg1: int, arg2: int): void
    protected compositeSingleTile(arg0: sun.java2d.xr.XRSurfaceData, arg1: sun.java2d.xr.MaskTile, arg2: sun.java2d.xr.DirtyRegion, arg3: boolean, arg4: int, arg5: int, arg6: sun.java2d.xr.XRColor): void
    protected allocTiles(arg0: sun.java2d.xr.DirtyRegion): void
    protected tileRects(): void
    public getMainTile(): sun.java2d.xr.MaskTile
    public static class: java.lang.Class<any>
}

        }
    }
}