declare namespace sun {
    namespace awt {
        namespace X11 {
            class XSetWindowAttributes extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_background_pixmap(): long
                public set_background_pixmap(arg0: long): void
                public get_background_pixel(): long
                public set_background_pixel(arg0: long): void
                public get_border_pixmap(): long
                public set_border_pixmap(arg0: long): void
                public get_border_pixel(): long
                public set_border_pixel(arg0: long): void
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
                public get_event_mask(): long
                public set_event_mask(arg0: long): void
                public get_do_not_propagate_mask(): long
                public set_do_not_propagate_mask(arg0: long): void
                public get_override_redirect(): boolean
                public set_override_redirect(arg0: boolean): void
                public get_colormap(): long
                public set_colormap(arg0: long): void
                public get_cursor(): long
                public set_cursor(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}