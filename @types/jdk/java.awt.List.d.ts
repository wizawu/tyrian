declare namespace java {
  namespace awt {

    class List extends java.awt.Component implements java.awt.ItemSelectable, javax.accessibility.Accessible {
      items: java.util.Vector<java.lang.String>
      rows: int
      multipleMode: boolean
      selected: int[]
      visibleIndex: int
      actionListener: java.awt.event.ActionListener
      itemListener: java.awt.event.ItemListener
      static readonly DEFAULT_VISIBLE_ROWS: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public removeNotify(): void
      public getItemCount(): number
      public countItems(): number
      public getItem(arg0: number | java.lang.Integer): java.lang.String
      getItemImpl(arg0: number | java.lang.Integer): java.lang.String
      public getItems(): java.lang.String[]
      public add(arg0: java.lang.String | string): void
      public addItem(arg0: java.lang.String | string): void
      public add(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public addItem(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public replaceItem(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      public removeAll(): void
      public clear(): void
      public remove(arg0: java.lang.String | string): void
      public remove(arg0: number | java.lang.Integer): void
      public delItem(arg0: number | java.lang.Integer): void
      public getSelectedIndex(): number
      public getSelectedIndexes(): number[]
      public getSelectedItem(): java.lang.String
      public getSelectedItems(): java.lang.String[]
      public getSelectedObjects(): java.lang.Object[]
      public select(arg0: number | java.lang.Integer): void
      public deselect(arg0: number | java.lang.Integer): void
      public isIndexSelected(arg0: number | java.lang.Integer): boolean
      public isSelected(arg0: number | java.lang.Integer): boolean
      public getRows(): number
      public isMultipleMode(): boolean
      public allowsMultipleSelections(): boolean
      public setMultipleMode(arg0: boolean | java.lang.Boolean): void
      public setMultipleSelections(arg0: boolean | java.lang.Boolean): void
      public getVisibleIndex(): number
      public makeVisible(arg0: number | java.lang.Integer): void
      public getPreferredSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public preferredSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public getPreferredSize(): java.awt.Dimension
      public preferredSize(): java.awt.Dimension
      public getMinimumSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public minimumSize(arg0: number | java.lang.Integer): java.awt.Dimension
      public getMinimumSize(): java.awt.Dimension
      public minimumSize(): java.awt.Dimension
      public addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
      public getItemListeners(): java.awt.event.ItemListener[]
      public addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
      public getActionListeners(): java.awt.event.ActionListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processItemEvent(arg0: java.awt.event.ItemEvent): void
      protected processActionEvent(arg0: java.awt.event.ActionEvent): void
      protected paramString(): java.lang.String
      public delItems(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
