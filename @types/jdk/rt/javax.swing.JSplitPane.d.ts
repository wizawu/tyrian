declare namespace javax {
    namespace swing {
        class JSplitPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static VERTICAL_SPLIT: int
            public static HORIZONTAL_SPLIT: int
            public static LEFT: string
            public static RIGHT: string
            public static TOP: string
            public static BOTTOM: string
            public static DIVIDER: string
            public static ORIENTATION_PROPERTY: string
            public static CONTINUOUS_LAYOUT_PROPERTY: string
            public static DIVIDER_SIZE_PROPERTY: string
            public static ONE_TOUCH_EXPANDABLE_PROPERTY: string
            public static LAST_DIVIDER_LOCATION_PROPERTY: string
            public static DIVIDER_LOCATION_PROPERTY: string
            public static RESIZE_WEIGHT_PROPERTY: string
            protected orientation: int
            protected continuousLayout: boolean
            protected leftComponent: java.awt.Component
            protected rightComponent: java.awt.Component
            protected dividerSize: int
            protected oneTouchExpandable: boolean
            protected lastDividerLocation: int
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: int, arg1: boolean)
            public constructor(arg0: int, arg1: java.awt.Component, arg2: java.awt.Component)
            public constructor(arg0: int, arg1: boolean, arg2: java.awt.Component, arg3: java.awt.Component)
            public setUI(arg0: javax.swing.plaf.SplitPaneUI): void
            public getUI(): javax.swing.plaf.SplitPaneUI
            public updateUI(): void
            public getUIClassID(): string
            public setDividerSize(arg0: int): void
            public getDividerSize(): int
            public setLeftComponent(arg0: java.awt.Component): void
            public getLeftComponent(): java.awt.Component
            public setTopComponent(arg0: java.awt.Component): void
            public getTopComponent(): java.awt.Component
            public setRightComponent(arg0: java.awt.Component): void
            public getRightComponent(): java.awt.Component
            public setBottomComponent(arg0: java.awt.Component): void
            public getBottomComponent(): java.awt.Component
            public setOneTouchExpandable(arg0: boolean): void
            public isOneTouchExpandable(): boolean
            public setLastDividerLocation(arg0: int): void
            public getLastDividerLocation(): int
            public setOrientation(arg0: int): void
            public getOrientation(): int
            public setContinuousLayout(arg0: boolean): void
            public isContinuousLayout(): boolean
            public setResizeWeight(arg0: double): void
            public getResizeWeight(): double
            public resetToPreferredSizes(): void
            public setDividerLocation(arg0: double): void
            public setDividerLocation(arg0: int): void
            public getDividerLocation(): int
            public getMinimumDividerLocation(): int
            public getMaximumDividerLocation(): int
            public remove(arg0: java.awt.Component): void
            public remove(arg0: int): void
            public removeAll(): void
            public isValidateRoot(): boolean
            protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            protected paintChildren(arg0: java.awt.Graphics): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class JSplitPane$$Lambda extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static VERTICAL_SPLIT: int
        }
    }
}