declare namespace sun {
    namespace awt {
        namespace X11 {
            class XRenderPictFormat extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_id(): long
                public set_id(arg0: long): void
                public get_type(): int
                public set_type(arg0: int): void
                public get_depth(): int
                public set_depth(arg0: int): void
                public get_direct(): sun.awt.X11.XRenderDirectFormat
                public get_colormap(): long
                public set_colormap(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}