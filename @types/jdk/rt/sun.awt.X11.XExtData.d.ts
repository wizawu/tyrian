declare namespace sun {
    namespace awt {
        namespace X11 {
class XExtData extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_number(): int
    public set_number(arg0: int): void
    public get_next(arg0: int): sun.awt.X11.XExtData
    public get_next(): long
    public set_next(arg0: long): void
    public get_free_private(arg0: int): long
    public get_free_private(): long
    public set_free_private(arg0: long): void
    public get_private_data(arg0: int): long
    public get_private_data(): long
    public set_private_data(arg0: long): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}