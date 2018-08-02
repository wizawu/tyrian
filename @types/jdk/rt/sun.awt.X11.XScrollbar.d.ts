declare namespace sun {
    namespace awt {
        namespace X11 {
abstract class XScrollbar {
    public static ALIGNMENT_VERTICAL: int
    public static ALIGNMENT_HORIZONTAL: int
    public constructor(arg0: int, arg1: sun.awt.X11.XScrollbarClient)
    public needsRepaint(): boolean
    protected rebuildArrows(): void
    public setSize(arg0: int, arg1: int): void
    protected createArrowShape(arg0: boolean, arg1: boolean): java.awt.Polygon
    protected getThumbArea(): java.awt.Rectangle
    public setMode(arg0: int): void
    public handleMouseEvent(arg0: int, arg1: int, arg2: int, arg3: int): void
    protected calculateThumbRect(): java.awt.Rectangle
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}