declare namespace java {
    namespace awt {
class Choice extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
    public addNotify(): void
    public getItemCount(): int
    public countItems(): int
    public getItem(arg0: int): string
    public add(arg0: java.lang.String | string): void
    public addItem(arg0: java.lang.String | string): void
    public insert(arg0: java.lang.String | string, arg1: int): void
    public remove(arg0: java.lang.String | string): void
    public remove(arg0: int): void
    public removeAll(): void
    public getSelectedItem(): string
    public getSelectedObjects(): java.lang.Object[]
    public getSelectedIndex(): int
    public select(arg0: int): void
    public select(arg0: java.lang.String | string): void
    public addItemListener(arg0: java.awt.event.ItemListener): void
    public removeItemListener(arg0: java.awt.event.ItemListener): void
    public getItemListeners(): java.awt.event.ItemListener[]
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
    protected processItemEvent<T extends java.util.EventListener>(arg0: java.awt.event.ItemEvent): void
    protected paramString<T extends java.util.EventListener>(): string
    public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class Choice$$Lambda extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
}

    }
}