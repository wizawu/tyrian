declare namespace javax {
  namespace swing {

    class JTabbedPane extends javax.swing.JComponent implements java.io.Serializable, javax.accessibility.Accessible, javax.swing.SwingConstants {
      public static readonly WRAP_TAB_LAYOUT: int
      public static readonly SCROLL_TAB_LAYOUT: int
      protected tabPlacement: int
      protected model: javax.swing.SingleSelectionModel
      protected changeListener: javax.swing.event.ChangeListener
      protected changeEvent: javax.swing.event.ChangeEvent
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer)
      public getUI(): javax.swing.plaf.TabbedPaneUI
      public setUI(arg0: javax.swing.plaf.TabbedPaneUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected createChangeListener(): javax.swing.event.ChangeListener
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public getModel(): javax.swing.SingleSelectionModel
      public setModel(arg0: javax.swing.SingleSelectionModel): void
      public getTabPlacement(): number
      public setTabPlacement(arg0: number | java.lang.Integer): void
      public getTabLayoutPolicy(): number
      public setTabLayoutPolicy(arg0: number | java.lang.Integer): void
      public getSelectedIndex(): number
      public setSelectedIndex(arg0: number | java.lang.Integer): void
      public getSelectedComponent(): java.awt.Component
      public setSelectedComponent(arg0: java.awt.Component): void
      public insertTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component, arg3: java.lang.String | string, arg4: number | java.lang.Integer): void
      public addTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component, arg3: java.lang.String | string): void
      public addTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component): void
      public addTab(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public add(arg0: java.awt.Component): java.awt.Component
      public add(arg0: java.lang.String | string, arg1: java.awt.Component): java.awt.Component
      public add(arg0: java.awt.Component, arg1: number | java.lang.Integer): java.awt.Component
      public add(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public add(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public removeTabAt(arg0: number | java.lang.Integer): void
      public remove(arg0: java.awt.Component): void
      public remove(arg0: number | java.lang.Integer): void
      public removeAll(): void
      public getTabCount(): number
      public getTabRunCount(): number
      public getTitleAt(arg0: number | java.lang.Integer): java.lang.String
      public getIconAt(arg0: number | java.lang.Integer): javax.swing.Icon
      public getDisabledIconAt(arg0: number | java.lang.Integer): javax.swing.Icon
      public getToolTipTextAt(arg0: number | java.lang.Integer): java.lang.String
      public getBackgroundAt(arg0: number | java.lang.Integer): java.awt.Color
      public getForegroundAt(arg0: number | java.lang.Integer): java.awt.Color
      public isEnabledAt(arg0: number | java.lang.Integer): boolean
      public getComponentAt(arg0: number | java.lang.Integer): java.awt.Component
      public getMnemonicAt(arg0: number | java.lang.Integer): number
      public getDisplayedMnemonicIndexAt(arg0: number | java.lang.Integer): number
      public getBoundsAt(arg0: number | java.lang.Integer): java.awt.Rectangle
      public setTitleAt(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      public setIconAt(arg0: number | java.lang.Integer, arg1: javax.swing.Icon): void
      public setDisabledIconAt(arg0: number | java.lang.Integer, arg1: javax.swing.Icon): void
      public setToolTipTextAt(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      public setBackgroundAt(arg0: number | java.lang.Integer, arg1: java.awt.Color): void
      public setForegroundAt(arg0: number | java.lang.Integer, arg1: java.awt.Color): void
      public setEnabledAt(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      public setComponentAt(arg0: number | java.lang.Integer, arg1: java.awt.Component): void
      public setDisplayedMnemonicIndexAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public setMnemonicAt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public indexOfTab(arg0: java.lang.String | string): number
      public indexOfTab(arg0: javax.swing.Icon): number
      public indexOfComponent(arg0: java.awt.Component): number
      public indexAtLocation(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
      compWriteObjectNotify(): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public setTabComponentAt(arg0: number | java.lang.Integer, arg1: java.awt.Component): void
      public getTabComponentAt(arg0: number | java.lang.Integer): java.awt.Component
      public indexOfTabComponent(arg0: java.awt.Component): number
      public getUI(): javax.swing.plaf.ComponentUI
      static access$000(arg0: javax.swing.JTabbedPane): javax.accessibility.AccessibleContext
      static access$100(arg0: javax.swing.JTabbedPane, arg1: java.lang.String | string, arg2: java.lang.Object | any, arg3: java.lang.Object | any): void
    }

  }
}
