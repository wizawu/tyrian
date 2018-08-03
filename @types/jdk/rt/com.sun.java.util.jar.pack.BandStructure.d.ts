declare namespace com {
    namespace sun {
        namespace java {
            namespace util {
                namespace jar {
                    namespace pack {
                        abstract class BandStructure {
                            protected bandHeaderBytes: byte[]
                            protected bandHeaderBytePos: int
                            protected bandHeaderBytePos0: int
                            public static readonly NO_PHASE: int
                            public static readonly COLLECT_PHASE: int
                            public static readonly FROZEN_PHASE: int
                            public static readonly WRITE_PHASE: int
                            public static readonly EXPECT_PHASE: int
                            public static readonly READ_PHASE: int
                            public static readonly DISBURSE_PHASE: int
                            public static readonly DONE_PHASE: int
                            protected archiveOptions: int
                            protected archiveSize0: long
                            protected archiveSize1: long
                            protected archiveNextCount: int
                            protected metadataBands: com.sun.java.util.jar.pack.BandStructure$MultiBand[]
                            protected typeMetadataBands: com.sun.java.util.jar.pack.BandStructure$MultiBand[]
                            public static readonly ADH_CONTEXT_MASK: int
                            public static readonly ADH_BIT_SHIFT: int
                            public static readonly ADH_BIT_IS_LSB: int
                            public static readonly ATTR_INDEX_OVERFLOW: int
                            public attrIndexLimit: int[]
                            protected attrFlagMask: long[]
                            protected attrDefSeen: long[]
                            protected attrOverflowMask: int[]
                            protected attrClassFileVersionMask: int
                            protected attrBandTable: java.util.Map<com.sun.java.util.jar.pack.Attribute$Layout, com.sun.java.util.jar.pack.BandStructure$Band[]>
                            protected readonly attrCodeEmpty: com.sun.java.util.jar.pack.Attribute$Layout
                            protected readonly attrInnerClassesEmpty: com.sun.java.util.jar.pack.Attribute$Layout
                            protected readonly attrClassFileVersion: com.sun.java.util.jar.pack.Attribute$Layout
                            protected readonly attrConstantValue: com.sun.java.util.jar.pack.Attribute$Layout
                            protected attrDefs: java.util.List<java.util.List<com.sun.java.util.jar.pack.Attribute$Layout>>
                            protected attrBands: com.sun.java.util.jar.pack.BandStructure$MultiBand[]
                            public readonly shortCodeHeader_h_limit: int
                            protected abstract getCPIndex(arg0: byte): com.sun.java.util.jar.pack.ConstantPool$Index
                            public initHighestClassVersion(arg0: com.sun.java.util.jar.pack.Package$Version): void
                            public getHighestClassVersion(): com.sun.java.util.jar.pack.Package$Version
                            protected constructor()
                            public static codingForIndex(arg0: int): com.sun.java.util.jar.pack.Coding
                            public static indexOf(arg0: com.sun.java.util.jar.pack.Coding): int
                            public static getBasicCodings(): com.sun.java.util.jar.pack.Coding[]
                            protected getBandHeader(arg0: int, arg1: com.sun.java.util.jar.pack.Coding): com.sun.java.util.jar.pack.CodingMethod
                            public static parseMetaCoding(arg0: byte[], arg1: int, arg2: com.sun.java.util.jar.pack.Coding, arg3: com.sun.java.util.jar.pack.CodingMethod[]): int
                            protected getCodingChooser(): com.sun.java.util.jar.pack.CodingChooser
                            public chooseCoding(arg0: int[], arg1: int, arg2: int, arg3: com.sun.java.util.jar.pack.Coding, arg4: java.lang.String | string, arg5: int[]): com.sun.java.util.jar.pack.CodingMethod
                            protected static decodeEscapeValue(arg0: int, arg1: com.sun.java.util.jar.pack.Coding): int
                            protected static encodeEscapeValue(arg0: int, arg1: com.sun.java.util.jar.pack.Coding): int
                            protected setBandIndexes(): void
                            protected setBandIndex(arg0: com.sun.java.util.jar.pack.BandStructure$CPRefBand, arg1: byte): void
                            protected setConstantValueIndex(arg0: com.sun.java.util.jar.pack.Package$Class$Field): void
                            protected initAttrIndexLimit(): void
                            protected haveFlagsHi(arg0: int): boolean
                            protected getPredefinedAttrs(arg0: int): java.util.List<com.sun.java.util.jar.pack.Attribute$Layout>
                            protected isPredefinedAttr(arg0: int, arg1: int): boolean
                            protected adjustSpecialAttrMasks(): void
                            protected makeClassFileVersionAttr(arg0: com.sun.java.util.jar.pack.Package$Version): com.sun.java.util.jar.pack.Attribute
                            protected parseClassFileVersionAttr(arg0: com.sun.java.util.jar.pack.Attribute): com.sun.java.util.jar.pack.Package$Version
                            protected setAttributeLayoutIndex(arg0: com.sun.java.util.jar.pack.Attribute$Layout, arg1: int): int
                            protected putLabel(arg0: com.sun.java.util.jar.pack.BandStructure$IntBand, arg1: com.sun.java.util.jar.pack.Code, arg2: int, arg3: int): void
                            protected getLabel(arg0: com.sun.java.util.jar.pack.BandStructure$IntBand, arg1: com.sun.java.util.jar.pack.Code, arg2: int): int
                            protected getCPRefOpBand(arg0: int): com.sun.java.util.jar.pack.BandStructure$CPRefBand
                            protected selfOpRefBand(arg0: int): com.sun.java.util.jar.pack.BandStructure$CPRefBand
                            protected static testBit(arg0: int, arg1: int): boolean
                            protected static setBit(arg0: int, arg1: int, arg2: boolean): int
                            protected static testBit(arg0: long, arg1: long): boolean
                            protected static setBit(arg0: long, arg1: long, arg2: boolean): long
                            protected static realloc(arg0: java.lang.Object[], arg1: int): java.lang.Object[]
                            protected static realloc(arg0: java.lang.Object[]): java.lang.Object[]
                            protected static realloc(arg0: int[], arg1: int): int[]
                            protected static realloc(arg0: int[]): int[]
                            protected static realloc(arg0: byte[], arg1: int): byte[]
                            protected static realloc(arg0: byte[]): byte[]
                            public static class: java.lang.Class<any>
                        }
                        interface BandStructure$$Lambda {
                            (arg0: byte): com.sun.java.util.jar.pack.ConstantPool$Index
                        }
                    }
                }
            }
        }
    }
}