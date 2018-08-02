declare namespace sun {
    namespace awt {
        namespace X11 {
            class PropMwmHints extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_flags(): long
                public set_flags(arg0: long): void
                public get_functions(): long
                public set_functions(arg0: long): void
                public get_decorations(): long
                public set_decorations(arg0: long): void
                public get_inputMode(): long
                public set_inputMode(arg0: long): void
                public get_status(): long
                public set_status(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}