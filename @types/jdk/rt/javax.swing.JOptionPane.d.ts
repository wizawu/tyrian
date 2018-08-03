declare namespace javax {
    namespace swing {
        class JOptionPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
            public static UNINITIALIZED_VALUE: java.lang.Object
            public static DEFAULT_OPTION: int
            public static YES_NO_OPTION: int
            public static YES_NO_CANCEL_OPTION: int
            public static OK_CANCEL_OPTION: int
            public static YES_OPTION: int
            public static NO_OPTION: int
            public static CANCEL_OPTION: int
            public static OK_OPTION: int
            public static CLOSED_OPTION: int
            public static ERROR_MESSAGE: int
            public static INFORMATION_MESSAGE: int
            public static WARNING_MESSAGE: int
            public static QUESTION_MESSAGE: int
            public static PLAIN_MESSAGE: int
            public static ICON_PROPERTY: string
            public static MESSAGE_PROPERTY: string
            public static VALUE_PROPERTY: string
            public static OPTIONS_PROPERTY: string
            public static INITIAL_VALUE_PROPERTY: string
            public static MESSAGE_TYPE_PROPERTY: string
            public static OPTION_TYPE_PROPERTY: string
            public static SELECTION_VALUES_PROPERTY: string
            public static INITIAL_SELECTION_VALUE_PROPERTY: string
            public static INPUT_VALUE_PROPERTY: string
            public static WANTS_INPUT_PROPERTY: string
            protected icon: javax.swing.Icon
            protected message: java.lang.Object
            protected options: java.lang.Object[]
            protected initialValue: java.lang.Object
            protected messageType: int
            protected optionType: int
            protected value: java.lang.Object
            protected selectionValues: java.lang.Object[]
            protected inputValue: java.lang.Object
            protected initialSelectionValue: java.lang.Object
            protected wantsInput: boolean
            public static showInputDialog(arg0: java.lang.Object): string
            public static showInputDialog(arg0: java.lang.Object, arg1: java.lang.Object): string
            public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object): string
            public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.Object): string
            public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): string
            public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: javax.swing.Icon, arg5: java.lang.Object[], arg6: java.lang.Object): java.lang.Object
            public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object): void
            public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): void
            public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: javax.swing.Icon): void
            public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object): int
            public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): int
            public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int): int
            public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: javax.swing.Icon): int
            public static showOptionDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: javax.swing.Icon, arg6: java.lang.Object[], arg7: java.lang.Object): int
            public createDialog(arg0: java.awt.Component, arg1: java.lang.String | string): javax.swing.JDialog
            public createDialog(arg0: java.lang.String | string): javax.swing.JDialog
            public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object): void
            public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): void
            public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: javax.swing.Icon): void
            public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object): int
            public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): int
            public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int): int
            public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: javax.swing.Icon): int
            public static showInternalOptionDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: javax.swing.Icon, arg6: java.lang.Object[], arg7: java.lang.Object): int
            public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object): string
            public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int): string
            public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String | string, arg3: int, arg4: javax.swing.Icon, arg5: java.lang.Object[], arg6: java.lang.Object): java.lang.Object
            public createInternalFrame(arg0: java.awt.Component, arg1: java.lang.String | string): javax.swing.JInternalFrame
            public static getFrameForComponent(arg0: java.awt.Component): java.awt.Frame
            public static getDesktopPaneForComponent(arg0: java.awt.Component): javax.swing.JDesktopPane
            public static setRootFrame(arg0: java.awt.Frame): void
            public static getRootFrame(): java.awt.Frame
            public constructor()
            public constructor(arg0: java.lang.Object)
            public constructor(arg0: java.lang.Object, arg1: int)
            public constructor(arg0: java.lang.Object, arg1: int, arg2: int)
            public constructor(arg0: java.lang.Object, arg1: int, arg2: int, arg3: javax.swing.Icon)
            public constructor(arg0: java.lang.Object, arg1: int, arg2: int, arg3: javax.swing.Icon, arg4: java.lang.Object[])
            public constructor(arg0: java.lang.Object, arg1: int, arg2: int, arg3: javax.swing.Icon, arg4: java.lang.Object[], arg5: java.lang.Object)
            public setUI(arg0: javax.swing.plaf.OptionPaneUI): void
            public getUI(): javax.swing.plaf.OptionPaneUI
            public updateUI(): void
            public getUIClassID(): string
            public setMessage(arg0: java.lang.Object): void
            public getMessage(): java.lang.Object
            public setIcon(arg0: javax.swing.Icon): void
            public getIcon(): javax.swing.Icon
            public setValue(arg0: java.lang.Object): void
            public getValue(): java.lang.Object
            public setOptions(arg0: java.lang.Object[]): void
            public getOptions(): java.lang.Object[]
            public setInitialValue(arg0: java.lang.Object): void
            public getInitialValue(): java.lang.Object
            public setMessageType(arg0: int): void
            public getMessageType(): int
            public setOptionType(arg0: int): void
            public getOptionType(): int
            public setSelectionValues(arg0: java.lang.Object[]): void
            public getSelectionValues(): java.lang.Object[]
            public setInitialSelectionValue(arg0: java.lang.Object): void
            public getInitialSelectionValue(): java.lang.Object
            public setInputValue(arg0: java.lang.Object): void
            public getInputValue(): java.lang.Object
            public getMaxCharactersPerLineCount(): int
            public setWantsInput(arg0: boolean): void
            public getWantsInput(): boolean
            public selectInitialValue(): void
            protected paramString(): string
            public getAccessibleContext(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}