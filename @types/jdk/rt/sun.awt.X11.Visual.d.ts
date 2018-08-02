declare namespace sun {
    namespace awt {
        namespace X11 {
            class Visual extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_ext_data(arg0: int): sun.awt.X11.XExtData
                public get_ext_data(): long
                public set_ext_data(arg0: long): void
                public get_visualid(): long
                public set_visualid(arg0: long): void
                public get_class(): int
                public set_class(arg0: int): void
                public get_red_mask(): long
                public set_red_mask(arg0: long): void
                public get_green_mask(): long
                public set_green_mask(arg0: long): void
                public get_blue_mask(): long
                public set_blue_mask(arg0: long): void
                public get_bits_per_rgb(): int
                public set_bits_per_rgb(arg0: int): void
                public get_map_entries(): int
                public set_map_entries(arg0: int): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}