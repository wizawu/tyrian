declare namespace java {
  namespace text {

    abstract class BreakIterator implements java.lang.Cloneable {
      public static readonly DONE: int
      protected constructor()
      public clone(): java.lang.Object
      public abstract first(): number
      public abstract last(): number
      public abstract next(arg0: number | java.lang.Integer): number
      public abstract next(): number
      public abstract previous(): number
      public abstract following(arg0: number | java.lang.Integer): number
      public preceding(arg0: number | java.lang.Integer): number
      public isBoundary(arg0: number | java.lang.Integer): boolean
      public abstract current(): number
      public abstract getText(): java.text.CharacterIterator
      public setText(arg0: java.lang.String | string): void
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
