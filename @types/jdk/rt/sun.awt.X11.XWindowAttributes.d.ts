declare namespace sun {
    namespace awt {
        namespace X11 {
            class XWindowAttributes extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_x(): int
                public set_x(arg0: int): void
                public get_y(): int
                public set_y(arg0: int): void
                public get_width(): int
                public set_width(arg0: int): void
                public get_height(): int
                public set_height(arg0: int): void
                public get_border_width(): int
                public set_border_width(arg0: int): void
                public get_depth(): int
                public set_depth(arg0: int): void
                public get_visual(arg0: int): sun.awt.X11.Visual
                public get_visual(): long
                public set_visual(arg0: long): void
                public get_root(): long
                public set_root(arg0: long): void
                public get_class(): int
                public set_class(arg0: int): void
                public get_bit_gravity(): int
                public set_bit_gravity(arg0: int): void
                public get_win_gravity(): int
                public set_win_gravity(arg0: int): void
                public get_backing_store(): int
                public set_backing_store(arg0: int): void
                public get_backing_planes(): long
                public set_backing_planes(arg0: long): void
                public get_backing_pixel(): long
                public set_backing_pixel(arg0: long): void
                public get_save_under(): boolean
                public set_save_under(arg0: boolean): void
                public get_colormap(): long
                public set_colormap(arg0: long): void
                public get_map_installed(): boolean
                public set_map_installed(arg0: boolean): void
                public get_map_state(): int
                public set_map_state(arg0: int): void
                public get_all_event_masks(): long
                public set_all_event_masks(arg0: long): void
                public get_your_event_mask(): long
                public set_your_event_mask(arg0: long): void
                public get_do_not_propagate_mask(): long
                public set_do_not_propagate_mask(arg0: long): void
                public get_override_redirect(): boolean
                public set_override_redirect(arg0: boolean): void
                public get_screen(arg0: int): sun.awt.X11.Screen
                public get_screen(): long
                public set_screen(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}