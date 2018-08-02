declare namespace sun {
    namespace awt {
        namespace X11 {
            class XModifierKeymap extends sun.awt.X11.XWrapperBase {
                public static getSize(): int
                public getDataSize(): int
                public getPData(): long
                public constructor(arg0: long)
                public constructor()
                public dispose(): void
                public get_max_keypermod(): int
                public set_max_keypermod(arg0: int): void
                public get_modifiermap(arg0: int): long
                public get_modifiermap(): long
                public set_modifiermap(arg0: long): void
                public clone(): sun.awt.X11.XEvent
                public zero(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}