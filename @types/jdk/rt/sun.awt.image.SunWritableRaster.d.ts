declare namespace sun {
    namespace awt {
        namespace image {
class SunWritableRaster extends java.awt.image.WritableRaster {
    public static setDataStealer(arg0: sun.awt.image.SunWritableRaster$DataStealer): void
    public static stealData(arg0: java.awt.image.DataBufferByte, arg1: int): byte[]
    public static stealData(arg0: java.awt.image.DataBufferUShort, arg1: int): short[]
    public static stealData(arg0: java.awt.image.DataBufferInt, arg1: int): int[]
    public static stealTrackable(arg0: java.awt.image.DataBuffer): sun.java2d.StateTrackableDelegate
    public static setTrackable(arg0: java.awt.image.DataBuffer, arg1: sun.java2d.StateTrackableDelegate): void
    public static makeTrackable(arg0: java.awt.image.DataBuffer): void
    public static markDirty(arg0: java.awt.image.DataBuffer): void
    public static markDirty(arg0: java.awt.image.WritableRaster): void
    public static markDirty(arg0: java.awt.Image): void
    public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.Point)
    public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Point)
    public constructor(arg0: java.awt.image.SampleModel, arg1: java.awt.image.DataBuffer, arg2: java.awt.Rectangle, arg3: java.awt.Point, arg4: java.awt.image.WritableRaster)
    public markDirty(): void
    public static class: java.lang.Class<any>
}

        }
    }
}