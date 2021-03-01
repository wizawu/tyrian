declare namespace java {
  namespace text {

    abstract class BreakIterator implements java.lang.Cloneable {

      public static readonly DONE: int
      protected constructor()
      public clone(): java.lang.Object
      public abstract first(): int
      public abstract last(): int
      public abstract next(arg0: int): int
      public abstract next(): int
      public abstract previous(): int
      public abstract following(arg0: int): int
      public preceding(arg0: int): int
      public isBoundary(arg0: int): boolean
      public abstract current(): int
      public abstract getText(): java.text.CharacterIterator
      public setText(arg0: java.lang.String): void
      public abstract setText(arg0: java.text.CharacterIterator): void
      public static getWordInstance(): java.text.BreakIterator
      public static getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
      public static getLineInstance(): java.text.BreakIterator
      public static getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
      public static getCharacterInstance(): java.text.BreakIterator
      public static getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
      public static getSentenceInstance(): java.text.BreakIterator
      public static getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
      public static getAvailableLocales(): java.util.Locale[]
    }

  }
}
