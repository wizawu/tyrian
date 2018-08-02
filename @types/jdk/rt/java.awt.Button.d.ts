declare namespace java {
    namespace awt {
class Button extends java.awt.Component implements javax.accessibility.Accessible {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public addNotify(): void
    public getLabel(): string
    public setLabel(arg0: java.lang.String | string): void
    public setActionCommand(arg0: java.lang.String | string): void
    public getActionCommand(): string
    public addActionListener(arg0: java.awt.event.ActionListener): void
    public removeActionListener(arg0: java.awt.event.ActionListener): void
    public getActionListeners(): java.awt.event.ActionListener[]
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
    protected processActionEvent<T extends java.util.EventListener>(arg0: java.awt.event.ActionEvent): void
    protected paramString<T extends java.util.EventListener>(): string
    public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class Button$$Lambda extends java.awt.Component implements javax.accessibility.Accessible {
    public constructor()
}

    }
}