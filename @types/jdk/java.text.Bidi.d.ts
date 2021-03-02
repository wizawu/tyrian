declare namespace java {
  namespace text {

    class Bidi {
      public static readonly DIRECTION_LEFT_TO_RIGHT: int
      public static readonly DIRECTION_RIGHT_TO_LEFT: int
      public static readonly DIRECTION_DEFAULT_LEFT_TO_RIGHT: int
      public static readonly DIRECTION_DEFAULT_RIGHT_TO_LEFT: int
      public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer)
      public constructor(arg0: java.text.AttributedCharacterIterator)
      public constructor(arg0: char[], arg1: number | java.lang.Integer, arg2: byte[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer)
      public createLineBidi(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.text.Bidi
      public isMixed(): boolean
      public isLeftToRight(): boolean
      public isRightToLeft(): boolean
      public getLength(): number
      public baseIsLeftToRight(): boolean
      public getBaseLevel(): number
      public getLevelAt(arg0: number | java.lang.Integer): number
      public getRunCount(): number
      public getRunLevel(arg0: number | java.lang.Integer): number
      public getRunStart(arg0: number | java.lang.Integer): number
      public getRunLimit(arg0: number | java.lang.Integer): number
      public static requiresBidi(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
      public static reorderVisually(arg0: byte[], arg1: number | java.lang.Integer, arg2: java.lang.Object[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
      public toString(): java.lang.String
    }

  }
}
