declare namespace sun {
    namespace font {
        class CompositeFont extends sun.font.Font2D {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.lang.String[], arg3: int, arg4: int[], arg5: int[], arg6: boolean, arg7: sun.font.SunFontManager)
            public isExcludedChar(arg0: int, arg1: int): boolean
            public getStyleMetrics(arg0: float, arg1: float[], arg2: int): void
            public getNumSlots(): int
            public getSlotFont(arg0: int): sun.font.PhysicalFont
            public isStdComposite(): boolean
            protected getValidatedGlyphCode(arg0: int): int
            public getMapper(): sun.font.CharToGlyphMapper
            public hasSupplementaryChars(): boolean
            public getNumGlyphs(): int
            public getMissingGlyphCode(): int
            public canDisplay(arg0: char): boolean
            public useAAForPtSize(arg0: int): boolean
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}