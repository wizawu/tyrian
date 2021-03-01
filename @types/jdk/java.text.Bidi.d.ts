declare namespace java {
  namespace text {

    class Bidi {

      public static readonly DIRECTION_LEFT_TO_RIGHT: int
      public static readonly DIRECTION_RIGHT_TO_LEFT: int
      public static readonly DIRECTION_DEFAULT_LEFT_TO_RIGHT: int
      public static readonly DIRECTION_DEFAULT_RIGHT_TO_LEFT: int
      public constructor(arg0: java.lang.String, arg1: int)
      public constructor(arg0: java.text.AttributedCharacterIterator)
      public constructor(arg0: char[], arg1: int, arg2: byte[], arg3: int, arg4: int, arg5: int)
      public createLineBidi(arg0: int, arg1: int): java.text.Bidi
      public isMixed(): boolean
      public isLeftToRight(): boolean
      public isRightToLeft(): boolean
      public getLength(): int
      public baseIsLeftToRight(): boolean
      public getBaseLevel(): int
      public getLevelAt(arg0: int): int
      public getRunCount(): int
      public getRunLevel(arg0: int): int
      public getRunStart(arg0: int): int
      public getRunLimit(arg0: int): int
      public static requiresBidi(arg0: char[], arg1: int, arg2: int): boolean
      public static reorderVisually(arg0: byte[], arg1: int, arg2: java.lang.Object[], arg3: int, arg4: int): void
      public toString(): java.lang.String
    }

  }
}
