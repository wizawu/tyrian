declare namespace sun {
    namespace awt {
        abstract class UNIXToolkit extends sun.awt.SunToolkit {
            public static readonly GTK_LOCK: java.lang.Object
            public static readonly FONTCONFIGAAHINT: string
            public constructor()
            public static getDatatransferTimeout(): int
            public isNativeGTKAvailable(): boolean
            public loadGTK(): boolean
            protected lazilyLoadDesktopProperty(arg0: java.lang.String | string): java.lang.Object
            protected lazilyLoadGTKIcon(arg0: java.lang.String | string): java.lang.Object
            public getGTKIcon(arg0: java.lang.String | string): java.awt.image.BufferedImage
            public getStockIcon(arg0: int, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: java.lang.String | string): java.awt.image.BufferedImage
            public loadIconCallback(arg0: byte[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean): void
            public sync(): void
            protected getDesktopAAHints(): java.awt.RenderingHints
            public checkGtkVersion(arg0: int, arg1: int, arg2: int): boolean
            public static class: java.lang.Class<any>
        }
    }
}