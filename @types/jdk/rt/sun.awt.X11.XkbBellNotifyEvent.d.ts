declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbBellNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_time(): long
    public set_time(arg0: long): void
    public get_xkb_type(): int
    public set_xkb_type(arg0: int): void
    public get_device(): int
    public set_device(arg0: int): void
    public get_percent(): int
    public set_percent(arg0: int): void
    public get_pitch(): int
    public set_pitch(arg0: int): void
    public get_duration(): int
    public set_duration(arg0: int): void
    public get_bell_class(): int
    public set_bell_class(arg0: int): void
    public get_bell_id(): int
    public set_bell_id(arg0: int): void
    public get_name(): long
    public set_name(arg0: long): void
    public get_window(): long
    public set_window(arg0: long): void
    public get_event_only(): boolean
    public set_event_only(arg0: boolean): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}