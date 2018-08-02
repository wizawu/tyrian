declare namespace sun {
    namespace awt {
        namespace X11 {
class ColorData extends sun.awt.X11.XWrapperBase {
    public static getSize(): int
    public getDataSize(): int
    public getPData(): long
    public constructor(arg0: long)
    public constructor()
    public dispose(): void
    public get_awt_Colors(arg0: int): sun.awt.X11.ColorEntry
    public get_awt_Colors(): long
    public set_awt_Colors(arg0: long): void
    public get_awt_numICMcolors(): int
    public set_awt_numICMcolors(arg0: int): void
    public get_awt_icmLUT(arg0: int): int
    public get_awt_icmLUT(): long
    public set_awt_icmLUT(arg0: long): void
    public get_awt_icmLUT2Colors(arg0: int): byte
    public get_awt_icmLUT2Colors(): long
    public set_awt_icmLUT2Colors(arg0: long): void
    public get_img_grays(arg0: int): byte
    public get_img_grays(): long
    public set_img_grays(arg0: long): void
    public get_img_clr_tbl(arg0: int): byte
    public get_img_clr_tbl(): long
    public set_img_clr_tbl(arg0: long): void
    public get_img_oda_red(arg0: int): byte
    public get_img_oda_red(): long
    public set_img_oda_red(arg0: long): void
    public get_img_oda_green(arg0: int): byte
    public get_img_oda_green(): long
    public set_img_oda_green(arg0: long): void
    public get_img_oda_blue(arg0: int): byte
    public get_img_oda_blue(): long
    public set_img_oda_blue(arg0: long): void
    public get_pGrayInverseLutData(arg0: int): int
    public get_pGrayInverseLutData(): long
    public set_pGrayInverseLutData(arg0: long): void
    public get_screendata(): int
    public set_screendata(arg0: int): void
    public clone(): sun.awt.X11.XEvent
    public zero(): void
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}