declare namespace java {
    namespace awt {
class MenuItem extends java.awt.MenuComponent implements javax.accessibility.Accessible {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.awt.MenuShortcut)
    public addNotify(): void
    public getLabel(): string
    public setLabel(arg0: java.lang.String | string): void
    public isEnabled(): boolean
    public setEnabled(arg0: boolean): void
    public enable(): void
    public enable(arg0: boolean): void
    public disable(): void
    public getShortcut(): java.awt.MenuShortcut
    public setShortcut(arg0: java.awt.MenuShortcut): void
    public deleteShortcut(): void
    protected enableEvents(arg0: long): void
    protected disableEvents(arg0: long): void
    public setActionCommand(arg0: java.lang.String | string): void
    public getActionCommand(): string
    public addActionListener(arg0: java.awt.event.ActionListener): void
    public removeActionListener(arg0: java.awt.event.ActionListener): void
    public getActionListeners(): java.awt.event.ActionListener[]
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
    protected processActionEvent<T extends java.util.EventListener>(arg0: java.awt.event.ActionEvent): void
    public paramString<T extends java.util.EventListener>(): string
    public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class MenuItem$$Lambda extends java.awt.MenuComponent implements javax.accessibility.Accessible {
    public constructor()
}

    }
}