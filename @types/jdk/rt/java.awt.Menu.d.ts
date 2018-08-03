declare namespace java {
    namespace awt {
        class Menu extends java.awt.MenuItem implements java.awt.MenuContainer , javax.accessibility.Accessible {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: boolean)
            public addNotify(): void
            public removeNotify(): void
            public isTearOff(): boolean
            public getItemCount(): int
            public countItems(): int
            public getItem(arg0: int): java.awt.MenuItem
            public add(arg0: java.awt.MenuItem): java.awt.MenuItem
            public add(arg0: java.lang.String | string): void
            public insert(arg0: java.awt.MenuItem, arg1: int): void
            public insert(arg0: java.lang.String | string, arg1: int): void
            public addSeparator(): void
            public insertSeparator(arg0: int): void
            public remove(arg0: int): void
            public remove(arg0: java.awt.MenuComponent): void
            public removeAll(): void
            public paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}