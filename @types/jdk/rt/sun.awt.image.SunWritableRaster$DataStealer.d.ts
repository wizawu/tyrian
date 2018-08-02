declare namespace sun {
    namespace awt {
        namespace image {
interface SunWritableRaster$DataStealer {
    getData(arg0: java.awt.image.DataBufferByte, arg1: int): byte[]
    getData(arg0: java.awt.image.DataBufferUShort, arg1: int): short[]
    getData(arg0: java.awt.image.DataBufferInt, arg1: int): int[]
    getTrackable(arg0: java.awt.image.DataBuffer): sun.java2d.StateTrackableDelegate
    setTrackable(arg0: java.awt.image.DataBuffer, arg1: sun.java2d.StateTrackableDelegate): void
}

        }
    }
}