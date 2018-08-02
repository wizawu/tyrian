declare namespace sun {
    namespace awt {
        namespace X11 {
class Screen extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_ext_data(arg0: int): sun.awt.X11.XExtData
    public get_ext_data(): long
    public set_ext_data(arg0: long): void
    public get_display(arg0: int): long
    public get_display(): long
    public set_display(arg0: long): void
    public get_root(): long
    public set_root(arg0: long): void
    public get_width(): int
    public set_width(arg0: int): void
    public get_height(): int
    public set_height(arg0: int): void
    public get_mwidth(): int
    public set_mwidth(arg0: int): void
    public get_mheight(): int
    public set_mheight(arg0: int): void
    public get_ndepths(): int
    public set_ndepths(arg0: int): void
    public get_depths(arg0: int): sun.awt.X11.Depth
    public get_depths(): long
    public set_depths(arg0: long): void
    public get_root_depth(): int
    public set_root_depth(arg0: int): void
    public get_root_visual(arg0: int): sun.awt.X11.Visual
    public get_root_visual(): long
    public set_root_visual(arg0: long): void
    public get_default_gc(): long
    public set_default_gc(arg0: long): void
    public get_cmap(): long
    public set_cmap(arg0: long): void
    public get_white_pixel(): long
    public set_white_pixel(arg0: long): void
    public get_black_pixel(): long
    public set_black_pixel(arg0: long): void
    public get_max_maps(): int
    public set_max_maps(arg0: int): void
    public get_min_maps(): int
    public set_min_maps(arg0: int): void
    public get_backing_store(): int
    public set_backing_store(arg0: int): void
    public get_save_unders(): boolean
    public set_save_unders(arg0: boolean): void
    public get_root_input_mask(): long
    public set_root_input_mask(arg0: long): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}