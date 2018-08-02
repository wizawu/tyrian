declare namespace sun {
    namespace font {
interface FontManager {
    NO_FALLBACK: int
    PHYSICAL_FALLBACK: int
    LOGICAL_FALLBACK: int
    registerFont(arg0: java.awt.Font): boolean
    deRegisterBadFont(arg0: sun.font.Font2D): void
    findFont2D(arg0: java.lang.String | string, arg1: int, arg2: int): sun.font.Font2D
    createFont2D(arg0: java.io.File, arg1: int, arg2: boolean, arg3: sun.font.CreatedFontTracker): sun.font.Font2D
    usingPerAppContextComposites(): boolean
    getNewComposite(arg0: java.lang.String | string, arg1: int, arg2: sun.font.Font2DHandle): sun.font.Font2DHandle
    preferLocaleFonts(): void
    preferProportionalFonts(): void
}

    }
}