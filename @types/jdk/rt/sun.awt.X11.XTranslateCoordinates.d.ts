declare namespace sun {
    namespace awt {
        namespace X11 {
            class XTranslateCoordinates {
                public constructor(arg0: long, arg1: long, arg2: int, arg3: int)
                public execute(): int
                public execute(arg0: sun.awt.X11.XErrorHandler): int
                public isExecuted(): boolean
                public isDisposed(): boolean
                public dispose(): void
                public get_scr_w(): long
                public set_scr_w(arg0: long): void
                public get_dest_w(): long
                public set_dest_w(arg0: long): void
                public get_src_x(): int
                public set_src_x(arg0: int): void
                public get_src_y(): int
                public set_src_y(arg0: int): void
                public get_dest_x(): int
                public set_dest_x(arg0: int): void
                public get_dest_y(): int
                public set_dest_y(arg0: int): void
                public get_child(): long
                public set_child(arg0: long): void
                public static class: java.lang.Class<any>
            }
        }
    }
}