declare namespace java {
  namespace awt {
    class TextComponent extends java.awt.Component implements javax.accessibility.Accessible {
      text: java.lang.String
      editable: boolean
      selectionStart: int
      selectionEnd: int
      backgroundSetByClientCode: boolean
      protected textListener: java.awt.event.TextListener
      constructor(arg0: java.lang.String | string)
      public enableInputMethods(arg0: boolean | java.lang.Boolean): void
      areInputMethodsEnabled(): boolean
      public getInputMethodRequests(): java.awt.im.InputMethodRequests
      public addNotify(): void
      public removeNotify(): void
      public setText(arg0: java.lang.String | string): void
      public getText(): java.lang.String
      public getSelectedText(): java.lang.String
      public isEditable(): boolean
      public setEditable(arg0: boolean | java.lang.Boolean): void
      public getBackground(): java.awt.Color
      public setBackground(arg0: java.awt.Color): void
      public getSelectionStart(): number
      public setSelectionStart(arg0: number | java.lang.Integer): void
      public getSelectionEnd(): number
      public setSelectionEnd(arg0: number | java.lang.Integer): void
      public select(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public selectAll(): void
      public setCaretPosition(arg0: number | java.lang.Integer): void
      public getCaretPosition(): number
      public addTextListener(arg0: java.awt.event.TextListener | java.awt.event.TextListener$$lambda): void
      public removeTextListener(arg0: java.awt.event.TextListener | java.awt.event.TextListener$$lambda): void
      public getTextListeners(): java.awt.event.TextListener[]
      public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      eventEnabled(arg0: java.awt.AWTEvent): boolean
      protected processEvent(arg0: java.awt.AWTEvent): void
      protected processTextEvent(arg0: java.awt.event.TextEvent): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
