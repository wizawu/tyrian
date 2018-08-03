declare namespace sun {
    namespace java2d {
        namespace loops {
            class SurfaceType {
                public static readonly DESC_ANY: string
                public static readonly DESC_INT_RGB: string
                public static readonly DESC_INT_ARGB: string
                public static readonly DESC_INT_ARGB_PRE: string
                public static readonly DESC_INT_BGR: string
                public static readonly DESC_3BYTE_BGR: string
                public static readonly DESC_4BYTE_ABGR: string
                public static readonly DESC_4BYTE_ABGR_PRE: string
                public static readonly DESC_USHORT_565_RGB: string
                public static readonly DESC_USHORT_555_RGB: string
                public static readonly DESC_USHORT_555_RGBx: string
                public static readonly DESC_USHORT_4444_ARGB: string
                public static readonly DESC_BYTE_GRAY: string
                public static readonly DESC_USHORT_INDEXED: string
                public static readonly DESC_USHORT_GRAY: string
                public static readonly DESC_BYTE_BINARY: string
                public static readonly DESC_BYTE_INDEXED: string
                public static readonly DESC_ANY_INT: string
                public static readonly DESC_ANY_SHORT: string
                public static readonly DESC_ANY_BYTE: string
                public static readonly DESC_ANY_3BYTE: string
                public static readonly DESC_ANY_4BYTE: string
                public static readonly DESC_ANY_INT_DCM: string
                public static readonly DESC_INT_RGBx: string
                public static readonly DESC_INT_BGRx: string
                public static readonly DESC_3BYTE_RGB: string
                public static readonly DESC_INT_ARGB_BM: string
                public static readonly DESC_BYTE_INDEXED_BM: string
                public static readonly DESC_BYTE_INDEXED_OPAQUE: string
                public static readonly DESC_INDEX8_GRAY: string
                public static readonly DESC_INDEX12_GRAY: string
                public static readonly DESC_BYTE_BINARY_1BIT: string
                public static readonly DESC_BYTE_BINARY_2BIT: string
                public static readonly DESC_BYTE_BINARY_4BIT: string
                public static readonly DESC_ANY_PAINT: string
                public static readonly DESC_ANY_COLOR: string
                public static readonly DESC_OPAQUE_COLOR: string
                public static readonly DESC_GRADIENT_PAINT: string
                public static readonly DESC_OPAQUE_GRADIENT_PAINT: string
                public static readonly DESC_TEXTURE_PAINT: string
                public static readonly DESC_OPAQUE_TEXTURE_PAINT: string
                public static readonly DESC_LINEAR_GRADIENT_PAINT: string
                public static readonly DESC_OPAQUE_LINEAR_GRADIENT_PAINT: string
                public static readonly DESC_RADIAL_GRADIENT_PAINT: string
                public static readonly DESC_OPAQUE_RADIAL_GRADIENT_PAINT: string
                public static readonly Any: sun.java2d.loops.SurfaceType
                public static readonly AnyInt: sun.java2d.loops.SurfaceType
                public static readonly AnyShort: sun.java2d.loops.SurfaceType
                public static readonly AnyByte: sun.java2d.loops.SurfaceType
                public static readonly AnyByteBinary: sun.java2d.loops.SurfaceType
                public static readonly Any3Byte: sun.java2d.loops.SurfaceType
                public static readonly Any4Byte: sun.java2d.loops.SurfaceType
                public static readonly AnyDcm: sun.java2d.loops.SurfaceType
                public static readonly Custom: sun.java2d.loops.SurfaceType
                public static readonly IntRgb: sun.java2d.loops.SurfaceType
                public static readonly IntArgb: sun.java2d.loops.SurfaceType
                public static readonly IntArgbPre: sun.java2d.loops.SurfaceType
                public static readonly IntBgr: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteBgr: sun.java2d.loops.SurfaceType
                public static readonly FourByteAbgr: sun.java2d.loops.SurfaceType
                public static readonly FourByteAbgrPre: sun.java2d.loops.SurfaceType
                public static readonly Ushort565Rgb: sun.java2d.loops.SurfaceType
                public static readonly Ushort555Rgb: sun.java2d.loops.SurfaceType
                public static readonly Ushort555Rgbx: sun.java2d.loops.SurfaceType
                public static readonly Ushort4444Argb: sun.java2d.loops.SurfaceType
                public static readonly UshortIndexed: sun.java2d.loops.SurfaceType
                public static readonly ByteGray: sun.java2d.loops.SurfaceType
                public static readonly UshortGray: sun.java2d.loops.SurfaceType
                public static readonly ByteBinary1Bit: sun.java2d.loops.SurfaceType
                public static readonly ByteBinary2Bit: sun.java2d.loops.SurfaceType
                public static readonly ByteBinary4Bit: sun.java2d.loops.SurfaceType
                public static readonly ByteIndexed: sun.java2d.loops.SurfaceType
                public static readonly IntRgbx: sun.java2d.loops.SurfaceType
                public static readonly IntBgrx: sun.java2d.loops.SurfaceType
                public static readonly ThreeByteRgb: sun.java2d.loops.SurfaceType
                public static readonly IntArgbBm: sun.java2d.loops.SurfaceType
                public static readonly ByteIndexedBm: sun.java2d.loops.SurfaceType
                public static readonly ByteIndexedOpaque: sun.java2d.loops.SurfaceType
                public static readonly Index8Gray: sun.java2d.loops.SurfaceType
                public static readonly Index12Gray: sun.java2d.loops.SurfaceType
                public static readonly AnyPaint: sun.java2d.loops.SurfaceType
                public static readonly AnyColor: sun.java2d.loops.SurfaceType
                public static readonly OpaqueColor: sun.java2d.loops.SurfaceType
                public static readonly GradientPaint: sun.java2d.loops.SurfaceType
                public static readonly OpaqueGradientPaint: sun.java2d.loops.SurfaceType
                public static readonly LinearGradientPaint: sun.java2d.loops.SurfaceType
                public static readonly OpaqueLinearGradientPaint: sun.java2d.loops.SurfaceType
                public static readonly RadialGradientPaint: sun.java2d.loops.SurfaceType
                public static readonly OpaqueRadialGradientPaint: sun.java2d.loops.SurfaceType
                public static readonly TexturePaint: sun.java2d.loops.SurfaceType
                public static readonly OpaqueTexturePaint: sun.java2d.loops.SurfaceType
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