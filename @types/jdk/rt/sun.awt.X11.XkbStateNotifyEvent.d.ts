declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbStateNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_changed(): int
    public set_changed(arg0: int): void
    public get_group(): int
    public set_group(arg0: int): void
    public get_base_group(): int
    public set_base_group(arg0: int): void
    public get_latched_group(): int
    public set_latched_group(arg0: int): void
    public get_locked_group(): int
    public set_locked_group(arg0: int): void
    public get_mods(): int
    public set_mods(arg0: int): void
    public get_base_mods(): int
    public set_base_mods(arg0: int): void
    public get_latched_mods(): int
    public set_latched_mods(arg0: int): void
    public get_locked_mods(): int
    public set_locked_mods(arg0: int): void
    public get_compat_state(): int
    public set_compat_state(arg0: int): void
    public get_grab_mods(): byte
    public set_grab_mods(arg0: byte): void
    public get_compat_grab_mods(): byte
    public set_compat_grab_mods(arg0: byte): void
    public get_lookup_mods(): byte
    public set_lookup_mods(arg0: byte): void
    public get_compat_lookup_mods(): byte
    public set_compat_lookup_mods(arg0: byte): void
    public get_ptr_buttons(): int
    public set_ptr_buttons(arg0: int): void
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