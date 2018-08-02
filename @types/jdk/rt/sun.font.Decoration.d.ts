declare namespace sun {
    namespace font {
        class Decoration {
            public static getPlainDecoration(): sun.font.Decoration
            public static getDecoration(arg0: sun.font.AttributeValues): sun.font.Decoration
            public static getDecoration(arg0: java.util.Map): sun.font.Decoration
            public drawTextAndDecorations(arg0: sun.font.Decoration$Label, arg1: java.awt.Graphics2D, arg2: float, arg3: float): void
            public getVisualBounds(arg0: sun.font.Decoration$Label): java.awt.geom.Rectangle2D
            public getCharVisualBounds(arg0: sun.font.Decoration$Label, arg1: int): java.awt.geom.Rectangle2D
            public static class: java.lang.Class<any>
        }
    }
}