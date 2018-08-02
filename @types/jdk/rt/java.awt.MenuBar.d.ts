declare namespace java {
    namespace awt {
        class MenuBar extends java.awt.MenuComponent implements java.awt.MenuContainer , javax.accessibility.Accessible {
            public constructor()
            public addNotify(): void
            public removeNotify(): void
            public getHelpMenu(): java.awt.Menu
            public setHelpMenu(arg0: java.awt.Menu | java.awt.Menu$$Lambda): void
            public add(arg0: java.awt.Menu | java.awt.Menu$$Lambda): java.awt.Menu
            public remove(arg0: int): void
            public remove(arg0: java.awt.MenuComponent): void
            public getMenuCount(): int
            public countMenus(): int
            public getMenu(arg0: int): java.awt.Menu
            public shortcuts(): java.util.Enumeration<java.awt.MenuShortcut>
            public getShortcutMenuItem(arg0: java.awt.MenuShortcut): java.awt.MenuItem
            public deleteShortcut(arg0: java.awt.MenuShortcut): void
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class MenuBar$$Lambda extends java.awt.MenuComponent implements java.awt.MenuContainer , javax.accessibility.Accessible {
            public constructor()
        }
    }
}