declare namespace java {
    namespace awt {
class Checkbox extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: boolean)
    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: java.awt.CheckboxGroup)
    public constructor(arg0: java.lang.String | string, arg1: java.awt.CheckboxGroup, arg2: boolean)
    public addNotify(): void
    public getLabel(): string
    public setLabel(arg0: java.lang.String | string): void
    public getState(): boolean
    public setState(arg0: boolean): void
    public getSelectedObjects(): java.lang.Object[]
    public getCheckboxGroup(): java.awt.CheckboxGroup
    public setCheckboxGroup(arg0: java.awt.CheckboxGroup): void
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

class Checkbox$$Lambda extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
}

    }
}