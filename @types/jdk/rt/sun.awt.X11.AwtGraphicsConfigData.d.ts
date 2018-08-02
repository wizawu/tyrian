declare namespace sun {
    namespace awt {
        namespace X11 {
            class AwtGraphicsConfigData extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_awt_depth(): int
                public set_awt_depth(arg0: int): void
                public get_awt_cmap(): long
                public set_awt_cmap(arg0: long): void
                public get_awt_visInfo(): sun.awt.X11.XVisualInfo
                public get_awt_num_colors(): int
                public set_awt_num_colors(arg0: int): void
                public get_awtImage(arg0: int): sun.awt.X11.awtImageData
                public get_awtImage(): long
                public set_awtImage(arg0: long): void
                public get_AwtColorMatch(arg0: int): long
                public get_AwtColorMatch(): long
                public set_AwtColorMatch(arg0: long): void
                public get_monoImage(arg0: int): long
                public get_monoImage(): long
                public set_monoImage(arg0: long): void
                public get_monoPixmap(): long
                public set_monoPixmap(arg0: long): void
                public get_monoPixmapWidth(): int
                public set_monoPixmapWidth(arg0: int): void
                public get_monoPixmapHeight(): int
                public set_monoPixmapHeight(arg0: int): void
                public get_monoPixmapGC(): long
                public set_monoPixmapGC(arg0: long): void
                public get_pixelStride(): int
                public set_pixelStride(arg0: int): void
                public get_color_data(arg0: int): sun.awt.X11.ColorData
                public get_color_data(): long
                public set_color_data(arg0: long): void
                public get_glxInfo(arg0: int): long
                public get_glxInfo(): long
                public set_glxInfo(arg0: long): void
                public get_isTranslucencySupported(): int
                public set_isTranslucencySupported(arg0: int): void
                public get_renderPictFormat(): sun.awt.X11.XRenderPictFormat
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}