declare namespace javax {
    namespace swing {
        class JTabbedPane extends javax.swing.JComponent implements java.io.Serializable , javax.accessibility.Accessible , javax.swing.SwingConstants {
            public static readonly WRAP_TAB_LAYOUT: int
            public static readonly SCROLL_TAB_LAYOUT: int
            protected tabPlacement: int
            protected model: javax.swing.SingleSelectionModel
            protected changeListener: javax.swing.event.ChangeListener
            protected changeEvent: javax.swing.event.ChangeEvent
            public constructor()
            public constructor(arg0: int)
            public constructor(arg0: int, arg1: int)
            public getUI(): javax.swing.plaf.TabbedPaneUI
            public setUI(arg0: javax.swing.plaf.TabbedPaneUI): void
            public updateUI(): void
            public getUIClassID(): string
            protected createChangeListener(): javax.swing.event.ChangeListener
            public addChangeListener(arg0: javax.swing.event.ChangeListener): void
            public removeChangeListener(arg0: javax.swing.event.ChangeListener): void
            public getChangeListeners(): javax.swing.event.ChangeListener[]
            protected fireStateChanged(): void
            public getModel(): javax.swing.SingleSelectionModel
            public setModel(arg0: javax.swing.SingleSelectionModel): void
            public getTabPlacement(): int
            public setTabPlacement(arg0: int): void
            public getTabLayoutPolicy(): int
            public setTabLayoutPolicy(arg0: int): void
            public getSelectedIndex(): int
            public setSelectedIndex(arg0: int): void
            public getSelectedComponent(): java.awt.Component
            public setSelectedComponent(arg0: java.awt.Component): void
            public insertTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component, arg3: java.lang.String | string, arg4: int): void
            public addTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component, arg3: java.lang.String | string): void
            public addTab(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: java.awt.Component): void
            public addTab(arg0: java.lang.String | string, arg1: java.awt.Component): void
            public add(arg0: java.awt.Component): java.awt.Component
            public add(arg0: java.lang.String | string, arg1: java.awt.Component): java.awt.Component
            public add(arg0: java.awt.Component, arg1: int): java.awt.Component
            public add(arg0: java.awt.Component, arg1: java.lang.Object): void
            public add(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
            public removeTabAt(arg0: int): void
            public remove(arg0: java.awt.Component): void
            public remove(arg0: int): void
            public removeAll(): void
            public getTabCount(): int
            public getTabRunCount(): int
            public getTitleAt(arg0: int): string
            public getIconAt(arg0: int): javax.swing.Icon
            public getDisabledIconAt(arg0: int): javax.swing.Icon
            public getToolTipTextAt(arg0: int): string
            public getBackgroundAt(arg0: int): java.awt.Color
            public getForegroundAt(arg0: int): java.awt.Color
            public isEnabledAt(arg0: int): boolean
            public getComponentAt(arg0: int): java.awt.Component
            public getMnemonicAt(arg0: int): int
            public getDisplayedMnemonicIndexAt(arg0: int): int
            public getBoundsAt(arg0: int): java.awt.Rectangle
            public setTitleAt(arg0: int, arg1: java.lang.String | string): void
            public setIconAt(arg0: int, arg1: javax.swing.Icon): void
            public setDisabledIconAt(arg0: int, arg1: javax.swing.Icon): void
            public setToolTipTextAt(arg0: int, arg1: java.lang.String | string): void
            public setBackgroundAt(arg0: int, arg1: java.awt.Color): void
            public setForegroundAt(arg0: int, arg1: java.awt.Color): void
            public setEnabledAt(arg0: int, arg1: boolean): void
            public setComponentAt(arg0: int, arg1: java.awt.Component): void
            public setDisplayedMnemonicIndexAt(arg0: int, arg1: int): void
            public setMnemonicAt(arg0: int, arg1: int): void
            public indexOfTab(arg0: java.lang.String | string): int
            public indexOfTab(arg0: javax.swing.Icon): int
            public indexOfComponent(arg0: java.awt.Component): int
            public indexAtLocation(arg0: int, arg1: int): int
            public getToolTipText(arg0: java.awt.event.MouseEvent): string
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public setTabComponentAt(arg0: int, arg1: java.awt.Component): void
            public getTabComponentAt(arg0: int): java.awt.Component
            public indexOfTabComponent(arg0: java.awt.Component): int
            public static class: java.lang.Class<any>
        }
    }
}