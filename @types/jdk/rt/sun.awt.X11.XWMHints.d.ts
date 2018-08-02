declare namespace sun {
    namespace awt {
        namespace X11 {
class XWMHints extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_flags(): long
    public set_flags(arg0: long): void
    public get_initial_state(): int
    public set_initial_state(arg0: int): void
    public get_icon_pixmap(arg0: int): long
    public get_icon_pixmap(): long
    public set_icon_pixmap(arg0: long): void
    public get_icon_window(): long
    public set_icon_window(arg0: long): void
    public get_icon_x(): int
    public set_icon_x(arg0: int): void
    public get_icon_y(): int
    public set_icon_y(arg0: int): void
    public get_icon_mask(): long
    public set_icon_mask(arg0: long): void
    public get_input(): boolean
    public set_input(arg0: boolean): void
    public get_window_group(): long
    public set_window_group(arg0: long): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}