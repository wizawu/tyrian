declare namespace com {
    namespace sun {
        namespace imageio {
            namespace plugins {
                namespace png {
                    class PNGMetadata extends javax.imageio.metadata.IIOMetadata implements java.lang.Cloneable {
                        public static nativeMetadataFormatName: string
                        protected static nativeMetadataFormatClassName: string
                        public static PHYS_UNIT_UNKNOWN: int
                        public static PHYS_UNIT_METER: int
                        public IHDR_present: boolean
                        public IHDR_width: int
                        public IHDR_height: int
                        public IHDR_bitDepth: int
                        public IHDR_colorType: int
                        public IHDR_compressionMethod: int
                        public IHDR_filterMethod: int
                        public IHDR_interlaceMethod: int
                        public PLTE_present: boolean
                        public PLTE_red: byte[]
                        public PLTE_green: byte[]
                        public PLTE_blue: byte[]
                        public PLTE_order: int[]
                        public bKGD_present: boolean
                        public bKGD_colorType: int
                        public bKGD_index: int
                        public bKGD_gray: int
                        public bKGD_red: int
                        public bKGD_green: int
                        public bKGD_blue: int
                        public cHRM_present: boolean
                        public cHRM_whitePointX: int
                        public cHRM_whitePointY: int
                        public cHRM_redX: int
                        public cHRM_redY: int
                        public cHRM_greenX: int
                        public cHRM_greenY: int
                        public cHRM_blueX: int
                        public cHRM_blueY: int
                        public gAMA_present: boolean
                        public gAMA_gamma: int
                        public hIST_present: boolean
                        public hIST_histogram: char[]
                        public iCCP_present: boolean
                        public iCCP_profileName: string
                        public iCCP_compressionMethod: int
                        public iCCP_compressedProfile: byte[]
                        public iTXt_keyword: java.util.ArrayList<java.lang.String>
                        public iTXt_compressionFlag: java.util.ArrayList<java.lang.Boolean>
                        public iTXt_compressionMethod: java.util.ArrayList<java.lang.Integer>
                        public iTXt_languageTag: java.util.ArrayList<java.lang.String>
                        public iTXt_translatedKeyword: java.util.ArrayList<java.lang.String>
                        public iTXt_text: java.util.ArrayList<java.lang.String>
                        public pHYs_present: boolean
                        public pHYs_pixelsPerUnitXAxis: int
                        public pHYs_pixelsPerUnitYAxis: int
                        public pHYs_unitSpecifier: int
                        public sBIT_present: boolean
                        public sBIT_colorType: int
                        public sBIT_grayBits: int
                        public sBIT_redBits: int
                        public sBIT_greenBits: int
                        public sBIT_blueBits: int
                        public sBIT_alphaBits: int
                        public sPLT_present: boolean
                        public sPLT_paletteName: string
                        public sPLT_sampleDepth: int
                        public sPLT_red: int[]
                        public sPLT_green: int[]
                        public sPLT_blue: int[]
                        public sPLT_alpha: int[]
                        public sPLT_frequency: int[]
                        public sRGB_present: boolean
                        public sRGB_renderingIntent: int
                        public tEXt_keyword: java.util.ArrayList<java.lang.String>
                        public tEXt_text: java.util.ArrayList<java.lang.String>
                        public tIME_present: boolean
                        public tIME_year: int
                        public tIME_month: int
                        public tIME_day: int
                        public tIME_hour: int
                        public tIME_minute: int
                        public tIME_second: int
                        public tRNS_present: boolean
                        public tRNS_colorType: int
                        public tRNS_alpha: byte[]
                        public tRNS_gray: int
                        public tRNS_red: int
                        public tRNS_green: int
                        public tRNS_blue: int
                        public zTXt_keyword: java.util.ArrayList<java.lang.String>
                        public zTXt_compressionMethod: java.util.ArrayList<java.lang.Integer>
                        public zTXt_text: java.util.ArrayList<java.lang.String>
                        public unknownChunkType: java.util.ArrayList<java.lang.String>
                        public unknownChunkData: java.util.ArrayList<byte[]>
                        public constructor()
                        public constructor(arg0: javax.imageio.metadata.IIOMetadata)
                        public initialize(arg0: javax.imageio.ImageTypeSpecifier, arg1: int): void
                        public isReadOnly(): boolean
                        public clone(): java.lang.Object
                        public getAsTree(arg0: java.lang.String | string): org.w3c.dom.Node
                        public getStandardChromaNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardCompressionNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDataNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDimensionNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardDocumentNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardTextNode(): javax.imageio.metadata.IIOMetadataNode
                        public getStandardTransparencyNode(): javax.imageio.metadata.IIOMetadataNode
                        public mergeTree(arg0: java.lang.String | string, arg1: org.w3c.dom.Node): void
                        public reset(): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}