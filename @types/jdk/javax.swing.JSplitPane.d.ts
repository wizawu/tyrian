declare namespace javax {
  namespace swing {
    class JSplitPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
      public static readonly VERTICAL_SPLIT: int
      public static readonly HORIZONTAL_SPLIT: int
      public static readonly LEFT: java.lang.String
      public static readonly RIGHT: java.lang.String
      public static readonly TOP: java.lang.String
      public static readonly BOTTOM: java.lang.String
      public static readonly DIVIDER: java.lang.String
      public static readonly ORIENTATION_PROPERTY: java.lang.String
      public static readonly CONTINUOUS_LAYOUT_PROPERTY: java.lang.String
      public static readonly DIVIDER_SIZE_PROPERTY: java.lang.String
      public static readonly ONE_TOUCH_EXPANDABLE_PROPERTY: java.lang.String
      public static readonly LAST_DIVIDER_LOCATION_PROPERTY: java.lang.String
      public static readonly DIVIDER_LOCATION_PROPERTY: java.lang.String
      public static readonly RESIZE_WEIGHT_PROPERTY: java.lang.String
      protected orientation: int
      protected continuousLayout: boolean
      protected leftComponent: java.awt.Component
      protected rightComponent: java.awt.Component
      protected dividerSize: int
      protected oneTouchExpandable: boolean
      protected lastDividerLocation: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean)
      public constructor(arg0: number | java.lang.Integer, arg1: java.awt.Component, arg2: java.awt.Component)
      public constructor(
        arg0: number | java.lang.Integer,
        arg1: boolean | java.lang.Boolean,
        arg2: java.awt.Component,
        arg3: java.awt.Component
      )
      public setUI(arg0: javax.swing.plaf.SplitPaneUI): void
      public getUI(): javax.swing.plaf.SplitPaneUI
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setDividerSize(arg0: number | java.lang.Integer): void
      public getDividerSize(): number
      public setLeftComponent(arg0: java.awt.Component): void
      public getLeftComponent(): java.awt.Component
      public setTopComponent(arg0: java.awt.Component): void
      public getTopComponent(): java.awt.Component
      public setRightComponent(arg0: java.awt.Component): void
      public getRightComponent(): java.awt.Component
      public setBottomComponent(arg0: java.awt.Component): void
      public getBottomComponent(): java.awt.Component
      public setOneTouchExpandable(arg0: boolean | java.lang.Boolean): void
      public isOneTouchExpandable(): boolean
      public setLastDividerLocation(arg0: number | java.lang.Integer): void
      public getLastDividerLocation(): number
      public setOrientation(arg0: number | java.lang.Integer): void
      public getOrientation(): number
      public setContinuousLayout(arg0: boolean | java.lang.Boolean): void
      public isContinuousLayout(): boolean
      public setResizeWeight(arg0: number | java.lang.Double): void
      public getResizeWeight(): number
      public resetToPreferredSizes(): void
      public setDividerLocation(arg0: number | java.lang.Double): void
      public setDividerLocation(arg0: number | java.lang.Integer): void
      public getDividerLocation(): number
      public getMinimumDividerLocation(): number
      public getMaximumDividerLocation(): number
      public remove(arg0: java.awt.Component): void
      public remove(arg0: number | java.lang.Integer): void
      public removeAll(): void
      public isValidateRoot(): boolean
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      protected paintChildren(arg0: java.awt.Graphics): void
      setUIProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
