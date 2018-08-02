declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbMapNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_flags(): int
    public set_flags(arg0: int): void
    public get_first_type(): int
    public set_first_type(arg0: int): void
    public get_num_types(): int
    public set_num_types(arg0: int): void
    public get_min_key_code(): int
    public set_min_key_code(arg0: int): void
    public get_max_key_code(): int
    public set_max_key_code(arg0: int): void
    public get_first_key_sym(): int
    public set_first_key_sym(arg0: int): void
    public get_first_key_act(): int
    public set_first_key_act(arg0: int): void
    public get_first_key_behavior(): int
    public set_first_key_behavior(arg0: int): void
    public get_first_key_explicit(): int
    public set_first_key_explicit(arg0: int): void
    public get_first_modmap_key(): int
    public set_first_modmap_key(arg0: int): void
    public get_first_vmodmap_key(): int
    public set_first_vmodmap_key(arg0: int): void
    public get_num_key_syms(): int
    public set_num_key_syms(arg0: int): void
    public get_num_key_acts(): int
    public set_num_key_acts(arg0: int): void
    public get_num_key_behaviors(): int
    public set_num_key_behaviors(arg0: int): void
    public get_num_key_explicit(): int
    public set_num_key_explicit(arg0: int): void
    public get_num_modmap_keys(): int
    public set_num_modmap_keys(arg0: int): void
    public get_num_vmodmap_keys(): int
    public set_num_vmodmap_keys(arg0: int): void
    public get_vmods(): int
    public set_vmods(arg0: int): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}