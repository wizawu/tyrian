declare namespace sun {
    namespace font {
        abstract class FontScaler implements sun.java2d.DisposerRecord {
            protected font: java.lang.ref.WeakReference<sun.font.Font2D>
            protected nativeScaler: long
            protected disposed: boolean
            public constructor()
            public static getScaler(arg0: sun.font.Font2D, arg1: int, arg2: boolean, arg3: int): sun.font.FontScaler
            public static getNullScaler(): sun.font.FontScaler
            public dispose(): void
            public disposeScaler(): void
            public static class: java.lang.Class<any>
        }
    }
}