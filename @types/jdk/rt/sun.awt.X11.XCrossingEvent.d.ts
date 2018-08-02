declare namespace sun {
    namespace awt {
        namespace X11 {
            class XCrossingEvent extends sun.awt.X11.XWrapperBase {
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
                public get_window(): long
                public set_window(arg0: long): void
                public get_root(): long
                public set_root(arg0: long): void
                public get_subwindow(): long
                public set_subwindow(arg0: long): void
                public get_time(): long
                public set_time(arg0: long): void
                public get_x(): int
                public set_x(arg0: int): void
                public get_y(): int
                public set_y(arg0: int): void
                public get_x_root(): int
                public set_x_root(arg0: int): void
                public get_y_root(): int
                public set_y_root(arg0: int): void
                public get_mode(): int
                public set_mode(arg0: int): void
                public get_detail(): int
                public set_detail(arg0: int): void
                public get_same_screen(): boolean
                public set_same_screen(arg0: boolean): void
                public get_focus(): boolean
                public set_focus(arg0: boolean): void
                public get_state(): int
                public set_state(arg0: int): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}