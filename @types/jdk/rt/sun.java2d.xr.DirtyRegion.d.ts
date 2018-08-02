declare namespace sun {
    namespace java2d {
        namespace xr {
class DirtyRegion implements java.lang.Cloneable {
    public constructor()
    public clear(): void
    public growDirtyRegion(arg0: int, arg1: int, arg2: int, arg3: int): void
    public getWidth(): int
    public getHeight(): int
    public growDirtyRegionTileLimit(arg0: int, arg1: int, arg2: int, arg3: int): void
    public static combineRegion(arg0: sun.java2d.xr.DirtyRegion, arg1: sun.java2d.xr.DirtyRegion): sun.java2d.xr.DirtyRegion
    public setDirtyLineRegion(arg0: int, arg1: int, arg2: int, arg3: int): void
    public translate(arg0: int, arg1: int): void
    public toString(): string
    public cloneRegion(): sun.java2d.xr.DirtyRegion
    public static class: java.lang.Class<any>
}

        }
    }
}