declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbExtensionDeviceNotifyEvent extends sun.awt.X11.XWrapperBase {
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
    public get_reason(): int
    public set_reason(arg0: int): void
    public get_supported(): int
    public set_supported(arg0: int): void
    public get_unsupported(): int
    public set_unsupported(arg0: int): void
    public get_first_btn(): int
    public set_first_btn(arg0: int): void
    public get_num_btns(): int
    public set_num_btns(arg0: int): void
    public get_leds_defined(): int
    public set_leds_defined(arg0: int): void
    public get_led_state(): int
    public set_led_state(arg0: int): void
    public get_led_class(): int
    public set_led_class(arg0: int): void
    public get_led_id(): int
    public set_led_id(arg0: int): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}