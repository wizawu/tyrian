declare namespace sun {
    namespace awt {
        namespace X11 {
            class XkbActionMessageEvent extends sun.awt.X11.XWrapperBase {
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
                public get_keycode(): int
                public set_keycode(arg0: int): void
                public get_press(): boolean
                public set_press(arg0: boolean): void
                public get_key_event_follows(): boolean
                public set_key_event_follows(arg0: boolean): void
                public get_group(): int
                public set_group(arg0: int): void
                public get_mods(): int
                public set_mods(arg0: int): void
                public get_message(arg0: int): byte
                public set_message(arg0: int, arg1: byte): void
                public get_message(): long
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}