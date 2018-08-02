declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbAnyEvent extends sun.awt.X11.XWrapperBase {
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
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}