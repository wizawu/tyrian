declare namespace sun {
    namespace awt {
        namespace X11 {
class XConfigureEvent extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_type(): int
    public set_type(arg0: int): void
    public get_serial(): long
    public set_serial(arg0: long): void
    public get_send_event(): boolean
    public set_send_event(arg0: boolean): void
    public get_display(): long
    public set_display(arg0: long): void
    public get_event(): long
    public set_event(arg0: long): void
    public get_window(): long
    public set_window(arg0: long): void
    public get_x(): int
    public set_x(arg0: int): void
    public get_y(): int
    public set_y(arg0: int): void
    public get_width(): int
    public set_width(arg0: int): void
    public get_height(): int
    public set_height(arg0: int): void
    public get_border_width(): int
    public set_border_width(arg0: int): void
    public get_above(): long
    public set_above(arg0: long): void
    public get_override_redirect(): boolean
    public set_override_redirect(arg0: boolean): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}