declare namespace sun {
    namespace awt {
        namespace X11 {
            class XRenderDirectFormat extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_red(): short
                public set_red(arg0: short): void
                public get_redMask(): short
                public set_redMask(arg0: short): void
                public get_green(): short
                public set_green(arg0: short): void
                public get_greenMask(): short
                public set_greenMask(arg0: short): void
                public get_blue(): short
                public set_blue(arg0: short): void
                public get_blueMask(): short
                public set_blueMask(arg0: short): void
                public get_alpha(): short
                public set_alpha(arg0: short): void
                public get_alphaMask(): short
                public set_alphaMask(arg0: short): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}