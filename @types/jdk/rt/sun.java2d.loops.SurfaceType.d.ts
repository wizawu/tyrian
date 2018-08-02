declare namespace sun {
    namespace java2d {
        namespace loops {
            class SurfaceType {
                public static DESC_ANY: string
                public static DESC_INT_RGB: string
                public static DESC_INT_ARGB: string
                public static DESC_INT_ARGB_PRE: string
                public static DESC_INT_BGR: string
                public static DESC_3BYTE_BGR: string
                public static DESC_4BYTE_ABGR: string
                public static DESC_4BYTE_ABGR_PRE: string
                public static DESC_USHORT_565_RGB: string
                public static DESC_USHORT_555_RGB: string
                public static DESC_USHORT_555_RGBx: string
                public static DESC_USHORT_4444_ARGB: string
                public static DESC_BYTE_GRAY: string
                public static DESC_USHORT_INDEXED: string
                public static DESC_USHORT_GRAY: string
                public static DESC_BYTE_BINARY: string
                public static DESC_BYTE_INDEXED: string
                public static DESC_ANY_INT: string
                public static DESC_ANY_SHORT: string
                public static DESC_ANY_BYTE: string
                public static DESC_ANY_3BYTE: string
                public static DESC_ANY_4BYTE: string
                public static DESC_ANY_INT_DCM: string
                public static DESC_INT_RGBx: string
                public static DESC_INT_BGRx: string
                public static DESC_3BYTE_RGB: string
                public static DESC_INT_ARGB_BM: string
                public static DESC_BYTE_INDEXED_BM: string
                public static DESC_BYTE_INDEXED_OPAQUE: string
                public static DESC_INDEX8_GRAY: string
                public static DESC_INDEX12_GRAY: string
                public static DESC_BYTE_BINARY_1BIT: string
                public static DESC_BYTE_BINARY_2BIT: string
                public static DESC_BYTE_BINARY_4BIT: string
                public static DESC_ANY_PAINT: string
                public static DESC_ANY_COLOR: string
                public static DESC_OPAQUE_COLOR: string
                public static DESC_GRADIENT_PAINT: string
                public static DESC_OPAQUE_GRADIENT_PAINT: string
                public static DESC_TEXTURE_PAINT: string
                public static DESC_OPAQUE_TEXTURE_PAINT: string
                public static DESC_LINEAR_GRADIENT_PAINT: string
                public static DESC_OPAQUE_LINEAR_GRADIENT_PAINT: string
                public static DESC_RADIAL_GRADIENT_PAINT: string
                public static DESC_OPAQUE_RADIAL_GRADIENT_PAINT: string
                public static Any: sun.java2d.loops.SurfaceType
                public static AnyInt: sun.java2d.loops.SurfaceType
                public static AnyShort: sun.java2d.loops.SurfaceType
                public static AnyByte: sun.java2d.loops.SurfaceType
                public static AnyByteBinary: sun.java2d.loops.SurfaceType
                public static Any3Byte: sun.java2d.loops.SurfaceType
                public static Any4Byte: sun.java2d.loops.SurfaceType
                public static AnyDcm: sun.java2d.loops.SurfaceType
                public static Custom: sun.java2d.loops.SurfaceType
                public static IntRgb: sun.java2d.loops.SurfaceType
                public static IntArgb: sun.java2d.loops.SurfaceType
                public static IntArgbPre: sun.java2d.loops.SurfaceType
                public static IntBgr: sun.java2d.loops.SurfaceType
                public static ThreeByteBgr: sun.java2d.loops.SurfaceType
                public static FourByteAbgr: sun.java2d.loops.SurfaceType
                public static FourByteAbgrPre: sun.java2d.loops.SurfaceType
                public static Ushort565Rgb: sun.java2d.loops.SurfaceType
                public static Ushort555Rgb: sun.java2d.loops.SurfaceType
                public static Ushort555Rgbx: sun.java2d.loops.SurfaceType
                public static Ushort4444Argb: sun.java2d.loops.SurfaceType
                public static UshortIndexed: sun.java2d.loops.SurfaceType
                public static ByteGray: sun.java2d.loops.SurfaceType
                public static UshortGray: sun.java2d.loops.SurfaceType
                public static ByteBinary1Bit: sun.java2d.loops.SurfaceType
                public static ByteBinary2Bit: sun.java2d.loops.SurfaceType
                public static ByteBinary4Bit: sun.java2d.loops.SurfaceType
                public static ByteIndexed: sun.java2d.loops.SurfaceType
                public static IntRgbx: sun.java2d.loops.SurfaceType
                public static IntBgrx: sun.java2d.loops.SurfaceType
                public static ThreeByteRgb: sun.java2d.loops.SurfaceType
                public static IntArgbBm: sun.java2d.loops.SurfaceType
                public static ByteIndexedBm: sun.java2d.loops.SurfaceType
                public static ByteIndexedOpaque: sun.java2d.loops.SurfaceType
                public static Index8Gray: sun.java2d.loops.SurfaceType
                public static Index12Gray: sun.java2d.loops.SurfaceType
                public static AnyPaint: sun.java2d.loops.SurfaceType
                public static AnyColor: sun.java2d.loops.SurfaceType
                public static OpaqueColor: sun.java2d.loops.SurfaceType
                public static GradientPaint: sun.java2d.loops.SurfaceType
                public static OpaqueGradientPaint: sun.java2d.loops.SurfaceType
                public static LinearGradientPaint: sun.java2d.loops.SurfaceType
                public static OpaqueLinearGradientPaint: sun.java2d.loops.SurfaceType
                public static RadialGradientPaint: sun.java2d.loops.SurfaceType
                public static OpaqueRadialGradientPaint: sun.java2d.loops.SurfaceType
                public static TexturePaint: sun.java2d.loops.SurfaceType
                public static OpaqueTexturePaint: sun.java2d.loops.SurfaceType
                protected pixelConverter: sun.awt.image.PixelConverter
                public deriveSubType(arg0: java.lang.String | string): sun.java2d.loops.SurfaceType
                public deriveSubType(arg0: java.lang.String | string, arg1: sun.awt.image.PixelConverter): sun.java2d.loops.SurfaceType
                public static makeUniqueID(arg0: java.lang.String | string): int
                public getUniqueID(): int
                public getDescriptor(): string
                public getSuperType(): sun.java2d.loops.SurfaceType
                public getPixelConverter(): sun.awt.image.PixelConverter
                public pixelFor(arg0: int, arg1: java.awt.image.ColorModel): int
                public rgbFor(arg0: int, arg1: java.awt.image.ColorModel): int
                public getAlphaMask(): int
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}