declare namespace sun {
    namespace awt {
        namespace X11 {
class XErrorEvent extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_type(): int
    public set_type(arg0: int): void
    public get_display(): long
    public set_display(arg0: long): void
    public get_resourceid(): long
    public set_resourceid(arg0: long): void
    public get_serial(): long
    public set_serial(arg0: long): void
    public get_error_code(): byte
    public set_error_code(arg0: byte): void
    public get_request_code(): byte
    public set_request_code(arg0: byte): void
    public get_minor_code(): byte
    public set_minor_code(arg0: byte): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}