declare namespace sun {
    namespace awt {
        namespace X11 {
class XkbEvent extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_type(): int
    public set_type(arg0: int): void
    public get_any(): sun.awt.X11.XkbAnyEvent
    public get_new_kbd(): sun.awt.X11.XkbNewKeyboardNotifyEvent
    public get_map(): sun.awt.X11.XkbMapNotifyEvent
    public get_state(): sun.awt.X11.XkbStateNotifyEvent
    public get_ctrls(): sun.awt.X11.XkbControlsNotifyEvent
    public get_indicators(): sun.awt.X11.XkbIndicatorNotifyEvent
    public get_names(): sun.awt.X11.XkbNamesNotifyEvent
    public get_compat(): sun.awt.X11.XkbCompatMapNotifyEvent
    public get_bell(): sun.awt.X11.XkbBellNotifyEvent
    public get_message(): sun.awt.X11.XkbActionMessageEvent
    public get_accessx(): sun.awt.X11.XkbAccessXNotifyEvent
    public get_device(): sun.awt.X11.XkbExtensionDeviceNotifyEvent
    public get_core(): sun.awt.X11.XEvent
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}