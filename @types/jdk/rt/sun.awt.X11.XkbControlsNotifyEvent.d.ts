declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbControlsNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_changed_ctrls(): int
    public set_changed_ctrls(arg0: int): void
    public get_enabled_ctrls(): int
    public set_enabled_ctrls(arg0: int): void
    public get_enabled_ctrl_changes(): int
    public set_enabled_ctrl_changes(arg0: int): void
    public get_num_groups(): int
    public set_num_groups(arg0: int): void
    public get_keycode(): int
    public set_keycode(arg0: int): void
    public get_event_type(): byte
    public set_event_type(arg0: byte): void
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