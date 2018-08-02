declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbNewKeyboardNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_old_device(): int
    public set_old_device(arg0: int): void
    public get_min_key_code(): int
    public set_min_key_code(arg0: int): void
    public get_max_key_code(): int
    public set_max_key_code(arg0: int): void
    public get_old_min_key_code(): int
    public set_old_min_key_code(arg0: int): void
    public get_old_max_key_code(): int
    public set_old_max_key_code(arg0: int): void
    public get_changed(): int
    public set_changed(arg0: int): void
    public get_req_major(): byte
    public set_req_major(arg0: byte): void
    public get_req_minor(): byte
    public set_req_minor(arg0: byte): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}