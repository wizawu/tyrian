declare namespace javax {
    namespace swing {
        class JLabel extends javax.swing.JComponent implements javax.swing.SwingConstants , javax.accessibility.Accessible {
            protected labelFor: java.awt.Component
            public constructor(arg0: java.lang.String | string, arg1: javax.swing.Icon, arg2: int)
            public constructor(arg0: java.lang.String | string, arg1: int)
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: javax.swing.Icon, arg1: int)
            public constructor(arg0: javax.swing.Icon)
            public constructor()
            public getUI(): javax.swing.plaf.LabelUI
            public setUI(arg0: javax.swing.plaf.LabelUI): void
            public updateUI(): void
            public getUIClassID(): string
            public getText(): string
            public setText(arg0: java.lang.String | string): void
            public getIcon(): javax.swing.Icon
            public setIcon(arg0: javax.swing.Icon): void
            public getDisabledIcon(): javax.swing.Icon
            public setDisabledIcon(arg0: javax.swing.Icon): void
            public setDisplayedMnemonic(arg0: int): void
            public setDisplayedMnemonic(arg0: char): void
            public getDisplayedMnemonic(): int
            public setDisplayedMnemonicIndex(arg0: int): void
            public getDisplayedMnemonicIndex(): int
            protected checkHorizontalKey(arg0: int, arg1: java.lang.String | string): int
            protected checkVerticalKey(arg0: int, arg1: java.lang.String | string): int
            public getIconTextGap(): int
            public setIconTextGap(arg0: int): void
            public getVerticalAlignment(): int
            public setVerticalAlignment(arg0: int): void
            public getHorizontalAlignment(): int
            public setHorizontalAlignment(arg0: int): void
            public getVerticalTextPosition(): int
            public setVerticalTextPosition(arg0: int): void
            public getHorizontalTextPosition(): int
            public setHorizontalTextPosition(arg0: int): void
            public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
            protected paramString(): string
            public getLabelFor(): java.awt.Component
            public setLabelFor(arg0: java.awt.Component): void
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
        class JLabel$$Lambda extends javax.swing.JComponent implements javax.swing.SwingConstants , javax.accessibility.Accessible {
            protected labelFor: java.awt.Component
        }
    }
}