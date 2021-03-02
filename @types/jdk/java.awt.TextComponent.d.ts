declare namespace java {
  namespace awt {

    class TextComponent extends java.awt.Component implements javax.accessibility.Accessible {
      text: java.lang.String
      editable: boolean
      selectionStart: int
      selectionEnd: int
      backgroundSetByClientCode: boolean
      protected textListener: java.awt.event.TextListener
      constructor(arg0: java.lang.String)
      public enableInputMethods(arg0: boolean): void
      areInputMethodsEnabled(): boolean
      public getInputMethodRequests(): java.awt.im.InputMethodRequests
      public addNotify(): void
      public removeNotify(): void
      public setText(arg0: java.lang.String): void
      public getText(): java.lang.String
      public getSelectedText(): java.lang.String
      public isEditable(): boolean
      public setEditable(arg0: boolean): void
      public getBackground(): java.awt.Color
      public setBackground(arg0: java.awt.Color): void
      public getSelectionStart(): int
      public setSelectionStart(arg0: int): void
      public getSelectionEnd(): int
      public setSelectionEnd(arg0: int): void
      public select(arg0: int, arg1: int): void
      public selectAll(): void
      public setCaretPosition(arg0: int): void
      public getCaretPosition(): int
      public addTextListener(arg0: java.awt.event.TextListener): void
      public removeTextListener(arg0: java.awt.event.TextListener): void
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
