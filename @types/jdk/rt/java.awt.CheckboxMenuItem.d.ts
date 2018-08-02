declare namespace java {
    namespace awt {
class CheckboxMenuItem extends java.awt.MenuItem implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public addNotify(): void
    public getState(): boolean
    public setState(arg0: boolean): void
    public getSelectedObjects(): java.lang.Object[]
    public addItemListener(arg0: java.awt.event.ItemListener): void
    public removeItemListener(arg0: java.awt.event.ItemListener): void
    public getItemListeners(): java.awt.event.ItemListener[]
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
    protected processItemEvent<T extends java.util.EventListener>(arg0: java.awt.event.ItemEvent): void
    public paramString<T extends java.util.EventListener>(): string
    public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class CheckboxMenuItem$$Lambda extends java.awt.MenuItem implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
}

    }
}