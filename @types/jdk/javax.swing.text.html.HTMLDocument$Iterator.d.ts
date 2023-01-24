declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        abstract class HTMLDocument$Iterator {
          public constructor()
          public abstract getAttributes(): javax.swing.text.AttributeSet
          public abstract getStartOffset(): number
          public abstract getEndOffset(): number
          public abstract next(): void
          public abstract isValid(): boolean
          public abstract getTag(): javax.swing.text.html.HTML$Tag
        }
      }
    }
  }
}
