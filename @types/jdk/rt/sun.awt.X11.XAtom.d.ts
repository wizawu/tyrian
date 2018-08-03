declare namespace sun {
    namespace awt {
        namespace X11 {
            class XAtom {
                public static readonly XA_PRIMARY: long
                public static readonly XA_SECONDARY: long
                public static readonly XA_ARC: long
                public static readonly XA_ATOM: long
                public static readonly XA_BITMAP: long
                public static readonly XA_CARDINAL: long
                public static readonly XA_COLORMAP: long
                public static readonly XA_CURSOR: long
                public static readonly XA_CUT_BUFFER0: long
                public static readonly XA_CUT_BUFFER1: long
                public static readonly XA_CUT_BUFFER2: long
                public static readonly XA_CUT_BUFFER3: long
                public static readonly XA_CUT_BUFFER4: long
                public static readonly XA_CUT_BUFFER5: long
                public static readonly XA_CUT_BUFFER6: long
                public static readonly XA_CUT_BUFFER7: long
                public static readonly XA_DRAWABLE: long
                public static readonly XA_FONT: long
                public static readonly XA_INTEGER: long
                public static readonly XA_PIXMAP: long
                public static readonly XA_POINT: long
                public static readonly XA_RECTANGLE: long
                public static readonly XA_RESOURCE_MANAGER: long
                public static readonly XA_RGB_COLOR_MAP: long
                public static readonly XA_RGB_BEST_MAP: long
                public static readonly XA_RGB_BLUE_MAP: long
                public static readonly XA_RGB_DEFAULT_MAP: long
                public static readonly XA_RGB_GRAY_MAP: long
                public static readonly XA_RGB_GREEN_MAP: long
                public static readonly XA_RGB_RED_MAP: long
                public static readonly XA_STRING: long
                public static readonly XA_VISUALID: long
                public static readonly XA_WINDOW: long
                public static readonly XA_WM_COMMAND: long
                public static readonly XA_WM_HINTS: long
                public static readonly XA_WM_CLIENT_MACHINE: long
                public static readonly XA_WM_ICON_NAME: long
                public static readonly XA_WM_ICON_SIZE: long
                public static readonly XA_WM_NAME: long
                public static readonly XA_WM_NORMAL_HINTS: long
                public static readonly XA_WM_SIZE_HINTS: long
                public static readonly XA_WM_ZOOM_HINTS: long
                public static readonly XA_MIN_SPACE: long
                public static readonly XA_NORM_SPACE: long
                public static readonly XA_MAX_SPACE: long
                public static readonly XA_END_SPACE: long
                public static readonly XA_SUPERSCRIPT_X: long
                public static readonly XA_SUPERSCRIPT_Y: long
                public static readonly XA_SUBSCRIPT_X: long
                public static readonly XA_SUBSCRIPT_Y: long
                public static readonly XA_UNDERLINE_POSITION: long
                public static readonly XA_UNDERLINE_THICKNESS: long
                public static readonly XA_STRIKEOUT_ASCENT: long
                public static readonly XA_STRIKEOUT_DESCENT: long
                public static readonly XA_ITALIC_ANGLE: long
                public static readonly XA_X_HEIGHT: long
                public static readonly XA_QUAD_WIDTH: long
                public static readonly XA_WEIGHT: long
                public static readonly XA_POINT_SIZE: long
                public static readonly XA_RESOLUTION: long
                public static readonly XA_COPYRIGHT: long
                public static readonly XA_NOTICE: long
                public static readonly XA_FONT_NAME: long
                public static readonly XA_FAMILY_NAME: long
                public static readonly XA_FULL_NAME: long
                public static readonly XA_CAP_HEIGHT: long
                public static readonly XA_WM_CLASS: long
                public static readonly XA_WM_TRANSIENT_FOR: long
                public static readonly XA_LAST_PREDEFINED: long
                public static get(arg0: java.lang.String | string): sun.awt.X11.XAtom
                public getName(): string
                public toString(): string
                public constructor(arg0: java.lang.String | string, arg1: boolean)
                public constructor(arg0: long, arg1: long)
                public constructor()
                public setProperty(arg0: long, arg1: java.lang.String | string): void
                public setPropertyUTF8(arg0: long, arg1: java.lang.String | string): void
                public setProperty8(arg0: long, arg1: java.lang.String | string): void
                public getProperty(arg0: long): string
                public get32Property(arg0: long, arg1: long): long
                public getCard32Property(arg0: sun.awt.X11.XBaseWindow): long
                public setCard32Property(arg0: long, arg1: long): void
                public setCard32Property(arg0: sun.awt.X11.XBaseWindow, arg1: long): void
                public getAtomData(arg0: long, arg1: long, arg2: int): boolean
                public getAtomData(arg0: long, arg1: long, arg2: long, arg3: int): boolean
                public setAtomData(arg0: long, arg1: long, arg2: int): void
                public setAtomData(arg0: long, arg1: long, arg2: long, arg3: int): void
                public setAtomData8(arg0: long, arg1: long, arg2: long, arg3: int): void
                public DeleteProperty(arg0: long): void
                public DeleteProperty(arg0: sun.awt.X11.XBaseWindow): void
                public setAtomData(arg0: long, arg1: long, arg2: byte[]): void
                public getByteArrayProperty(arg0: long, arg1: long): byte[]
                public intern(arg0: boolean): void
                public isInterned(): boolean
                public setValues(arg0: long, arg1: java.lang.String | string, arg2: long): void
                public setAtomListProperty(arg0: sun.awt.X11.XBaseWindow, arg1: sun.awt.X11.XAtom[]): void
                public setAtomListProperty(arg0: sun.awt.X11.XBaseWindow, arg1: sun.awt.X11.XAtomList): void
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public setWindowProperty(arg0: long, arg1: long): void
                public setWindowProperty(arg0: sun.awt.X11.XBaseWindow, arg1: sun.awt.X11.XBaseWindow): void
                public getWindowProperty(arg0: long): long
                public static class: java.lang.Class<any>
            }
        }
    }
}