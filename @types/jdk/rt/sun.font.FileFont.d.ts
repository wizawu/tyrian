declare namespace sun {
    namespace font {
        abstract class FileFont extends sun.font.PhysicalFont {
            protected useJavaRasterizer: boolean
            protected fileSize: int
            protected scaler: sun.font.FontScaler
            protected checkedNatives: boolean
            protected useNatives: boolean
            protected nativeFonts: sun.font.NativeFont[]
            protected glyphToCharMap: char[]
            protected checkUseNatives(): boolean
            protected close(): void
            public canDoStyle(arg0: int): boolean
            protected getScaler(): sun.font.FontScaler
            protected getUnitsPerEm(): long
            protected getPublicFileName(): string
            public static class: java.lang.Class<any>
        }
    }
}