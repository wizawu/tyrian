declare namespace sun {
    namespace awt {
        namespace X11 {
class WindowDimensions {
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean)
    public constructor(arg0: java.awt.Rectangle, arg1: java.awt.Insets, arg2: boolean)
    public constructor(arg0: java.awt.Point, arg1: java.awt.Dimension, arg2: java.awt.Insets, arg3: boolean)
    public constructor(arg0: java.awt.Rectangle, arg1: boolean)
    public constructor(arg0: sun.awt.X11.WindowDimensions)
    public getClientRect(): java.awt.Rectangle
    public setClientSize(arg0: java.awt.Dimension): void
    public setClientSize(arg0: int, arg1: int): void
    public getClientSize(): java.awt.Dimension
    public setSize(arg0: int, arg1: int): void
    public getSize(): java.awt.Dimension
    public getInsets(): java.awt.Insets
    public getBounds(): java.awt.Rectangle
    public getLocation(): java.awt.Point
    public setLocation(arg0: int, arg1: int): void
    public getScreenBounds(): java.awt.Rectangle
    public setInsets(arg0: java.awt.Insets): void
    public isClientSizeSet(): boolean
    public toString(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

        }
    }
}