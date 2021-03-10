declare namespace javax {
  namespace swing {

    class JOptionPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
      public static readonly UNINITIALIZED_VALUE: java.lang.Object
      public static readonly DEFAULT_OPTION: int
      public static readonly YES_NO_OPTION: int
      public static readonly YES_NO_CANCEL_OPTION: int
      public static readonly OK_CANCEL_OPTION: int
      public static readonly YES_OPTION: int
      public static readonly NO_OPTION: int
      public static readonly CANCEL_OPTION: int
      public static readonly OK_OPTION: int
      public static readonly CLOSED_OPTION: int
      public static readonly ERROR_MESSAGE: int
      public static readonly INFORMATION_MESSAGE: int
      public static readonly WARNING_MESSAGE: int
      public static readonly QUESTION_MESSAGE: int
      public static readonly PLAIN_MESSAGE: int
      public static readonly ICON_PROPERTY: java.lang.String
      public static readonly MESSAGE_PROPERTY: java.lang.String
      public static readonly VALUE_PROPERTY: java.lang.String
      public static readonly OPTIONS_PROPERTY: java.lang.String
      public static readonly INITIAL_VALUE_PROPERTY: java.lang.String
      public static readonly MESSAGE_TYPE_PROPERTY: java.lang.String
      public static readonly OPTION_TYPE_PROPERTY: java.lang.String
      public static readonly SELECTION_VALUES_PROPERTY: java.lang.String
      public static readonly INITIAL_SELECTION_VALUE_PROPERTY: java.lang.String
      public static readonly INPUT_VALUE_PROPERTY: java.lang.String
      public static readonly WANTS_INPUT_PROPERTY: java.lang.String
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
      public static showInputDialog(arg0: java.lang.Object | any): java.lang.String
      public static showInputDialog(arg0: java.lang.Object | any, arg1: java.lang.Object | any): java.lang.String
      public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): java.lang.String
      public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.Object | any): java.lang.String
      public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): java.lang.String
      public static showInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: javax.swing.Icon, arg5: java.lang.Object[] | any[], arg6: java.lang.Object | any): java.lang.Object
      public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): void
      public static showMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: javax.swing.Icon): void
      public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): number
      public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): number
      public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
      public static showConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: javax.swing.Icon): number
      public static showOptionDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: javax.swing.Icon, arg6: java.lang.Object[] | any[], arg7: java.lang.Object | any): number
      public createDialog(arg0: java.awt.Component, arg1: java.lang.String | string): javax.swing.JDialog
      public createDialog(arg0: java.lang.String | string): javax.swing.JDialog
      public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): void
      public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): void
      public static showInternalMessageDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: javax.swing.Icon): void
      public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): number
      public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): number
      public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): number
      public static showInternalConfirmDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: javax.swing.Icon): number
      public static showInternalOptionDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: javax.swing.Icon, arg6: java.lang.Object[] | any[], arg7: java.lang.Object | any): number
      public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any): java.lang.String
      public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer): java.lang.String
      public static showInternalInputDialog(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: javax.swing.Icon, arg5: java.lang.Object[] | any[], arg6: java.lang.Object | any): java.lang.Object
      public createInternalFrame(arg0: java.awt.Component, arg1: java.lang.String | string): javax.swing.JInternalFrame
      public static getFrameForComponent(arg0: java.awt.Component): java.awt.Frame
      static getWindowForComponent(arg0: java.awt.Component): java.awt.Window
      public static getDesktopPaneForComponent(arg0: java.awt.Component): javax.swing.JDesktopPane
      public static setRootFrame(arg0: java.awt.Frame): void
      public static getRootFrame(): java.awt.Frame
      public constructor()
      public constructor(arg0: java.lang.Object | any)
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer)
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: javax.swing.Icon)
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: javax.swing.Icon, arg4: java.lang.Object[] | any[])
      public constructor(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: javax.swing.Icon, arg4: java.lang.Object[] | any[], arg5: java.lang.Object | any)
      public setUI(arg0: javax.swing.plaf.OptionPaneUI): void
      public getUI(): javax.swing.plaf.OptionPaneUI
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setMessage(arg0: java.lang.Object | any): void
      public getMessage(): java.lang.Object
      public setIcon(arg0: javax.swing.Icon): void
      public getIcon(): javax.swing.Icon
      public setValue(arg0: java.lang.Object | any): void
      public getValue(): java.lang.Object
      public setOptions(arg0: java.lang.Object[] | any[]): void
      public getOptions(): java.lang.Object[]
      public setInitialValue(arg0: java.lang.Object | any): void
      public getInitialValue(): java.lang.Object
      public setMessageType(arg0: number | java.lang.Integer): void
      public getMessageType(): number
      public setOptionType(arg0: number | java.lang.Integer): void
      public getOptionType(): number
      public setSelectionValues(arg0: java.lang.Object[] | any[]): void
      public getSelectionValues(): java.lang.Object[]
      public setInitialSelectionValue(arg0: java.lang.Object | any): void
      public getInitialSelectionValue(): java.lang.Object
      public setInputValue(arg0: java.lang.Object | any): void
      public getInputValue(): java.lang.Object
      public getMaxCharactersPerLineCount(): number
      public setWantsInput(arg0: boolean | java.lang.Boolean): void
      public getWantsInput(): boolean
      public selectInitialValue(): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
