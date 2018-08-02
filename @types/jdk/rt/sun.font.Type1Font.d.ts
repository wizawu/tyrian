declare namespace sun {
    namespace font {
        class Type1Font extends sun.font.FileFont {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean)
            protected close(): void
            public readBlock(arg0: int, arg1: int): java.nio.ByteBuffer
            public getFileSize(): int
            public getPostscriptName(): string
            protected getScaler(): sun.font.FontScaler
            public getNumGlyphs(): int
            public getMissingGlyphCode(): int
            public getGlyphCode(arg0: char): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
    }
}