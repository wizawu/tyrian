declare namespace java {
  namespace awt {

    class Label extends java.awt.Component implements javax.accessibility.Accessible {
      public static readonly LEFT: int
      public static readonly CENTER: int
      public static readonly RIGHT: int
      text: java.lang.String
      alignment: int
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: int)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getAlignment(): int
      public setAlignment(arg0: int): void
      public getText(): java.lang.String
      public setText(arg0: java.lang.String): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
