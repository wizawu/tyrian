declare namespace sun {
    namespace awt {
        namespace X11 {
            class XkbNamesNotifyEvent extends sun.awt.X11.XWrapperBase {
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
                public get_first_type(): int
                public set_first_type(arg0: int): void
                public get_num_types(): int
                public set_num_types(arg0: int): void
                public get_first_lvl(): int
                public set_first_lvl(arg0: int): void
                public get_num_lvls(): int
                public set_num_lvls(arg0: int): void
                public get_num_aliases(): int
                public set_num_aliases(arg0: int): void
                public get_num_radio_groups(): int
                public set_num_radio_groups(arg0: int): void
                public get_changed_vmods(): int
                public set_changed_vmods(arg0: int): void
                public get_changed_groups(): int
                public set_changed_groups(arg0: int): void
                public get_changed_indicators(): int
                public set_changed_indicators(arg0: int): void
                public get_first_key(): int
                public set_first_key(arg0: int): void
                public get_num_keys(): int
                public set_num_keys(arg0: int): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}