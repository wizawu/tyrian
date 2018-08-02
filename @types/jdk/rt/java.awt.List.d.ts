declare namespace java {
    namespace awt {
class List extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: int, arg1: boolean)
    public addNotify(): void
    public removeNotify(): void
    public getItemCount(): int
    public countItems(): int
    public getItem(arg0: int): string
    public getItems(): java.lang.String[]
    public add(arg0: java.lang.String | string): void
    public addItem(arg0: java.lang.String | string): void
    public add(arg0: java.lang.String | string, arg1: int): void
    public addItem(arg0: java.lang.String | string, arg1: int): void
    public replaceItem(arg0: java.lang.String | string, arg1: int): void
    public removeAll(): void
    public clear(): void
    public remove(arg0: java.lang.String | string): void
    public remove(arg0: int): void
    public delItem(arg0: int): void
    public getSelectedIndex(): int
    public getSelectedIndexes(): int[]
    public getSelectedItem(): string
    public getSelectedItems(): java.lang.String[]
    public getSelectedObjects(): java.lang.Object[]
    public select(arg0: int): void
    public deselect(arg0: int): void
    public isIndexSelected(arg0: int): boolean
    public isSelected(arg0: int): boolean
    public getRows(): int
    public isMultipleMode(): boolean
    public allowsMultipleSelections(): boolean
    public setMultipleMode(arg0: boolean): void
    public setMultipleSelections(arg0: boolean): void
    public getVisibleIndex(): int
    public makeVisible(arg0: int): void
    public getPreferredSize(arg0: int): java.awt.Dimension
    public preferredSize(arg0: int): java.awt.Dimension
    public getPreferredSize(): java.awt.Dimension
    public preferredSize(): java.awt.Dimension
    public getMinimumSize(arg0: int): java.awt.Dimension
    public minimumSize(arg0: int): java.awt.Dimension
    public getMinimumSize(): java.awt.Dimension
    public minimumSize(): java.awt.Dimension
    public addItemListener(arg0: java.awt.event.ItemListener): void
    public removeItemListener(arg0: java.awt.event.ItemListener): void
    public getItemListeners(): java.awt.event.ItemListener[]
    public addActionListener(arg0: java.awt.event.ActionListener): void
    public removeActionListener(arg0: java.awt.event.ActionListener): void
    public getActionListeners(): java.awt.event.ActionListener[]
    public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
    protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
    protected processItemEvent<T extends java.util.EventListener>(arg0: java.awt.event.ItemEvent): void
    protected processActionEvent<T extends java.util.EventListener>(arg0: java.awt.event.ActionEvent): void
    protected paramString<T extends java.util.EventListener>(): string
    public delItems<T extends java.util.EventListener>(arg0: int, arg1: int): void
    public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class List$$Lambda extends java.awt.Component implements java.awt.ItemSelectable , javax.accessibility.Accessible {
    public constructor()
}

    }
}