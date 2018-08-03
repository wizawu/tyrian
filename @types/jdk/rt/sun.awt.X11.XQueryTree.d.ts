declare namespace sun {
    namespace awt {
        namespace X11 {
            class XQueryTree {
                public constructor(arg0: long)
                public execute(): int
                public execute(arg0: sun.awt.X11.XErrorHandler | sun.awt.X11.XErrorHandler$$Lambda): int
                public isExecuted(): boolean
                public isDisposed(): boolean
                public dispose(): void
                public get_w(): long
                public set_w(arg0: long): void
                public get_root(): long
                public set_root(arg0: long): void
                public get_parent(): long
                public set_parent(arg0: long): void
                public get_children(): long
                public set_children(arg0: long): void
                public get_nchildren(): int
                public set_nchildren(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}