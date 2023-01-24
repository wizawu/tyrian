declare namespace java {
  namespace awt {
    class Label extends java.awt.Component implements javax.accessibility.Accessible {
      public static readonly LEFT: int
      public static readonly CENTER: int
      public static readonly RIGHT: int
      text: java.lang.String
      alignment: int
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      constructComponentName(): java.lang.String
      public addNotify(): void
      public getAlignment(): number
      public setAlignment(arg0: number | java.lang.Integer): void
      public getText(): java.lang.String
      public setText(arg0: java.lang.String | string): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
