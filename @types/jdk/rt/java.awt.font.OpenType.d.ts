declare namespace java {
    namespace awt {
        namespace font {
            interface OpenType {
                TAG_CMAP: int
                TAG_HEAD: int
                TAG_NAME: int
                TAG_GLYF: int
                TAG_MAXP: int
                TAG_PREP: int
                TAG_HMTX: int
                TAG_KERN: int
                TAG_HDMX: int
                TAG_LOCA: int
                TAG_POST: int
                TAG_OS2: int
                TAG_CVT: int
                TAG_GASP: int
                TAG_VDMX: int
                TAG_VMTX: int
                TAG_VHEA: int
                TAG_HHEA: int
                TAG_TYP1: int
                TAG_BSLN: int
                TAG_GSUB: int
                TAG_DSIG: int
                TAG_FPGM: int
                TAG_FVAR: int
                TAG_GVAR: int
                TAG_CFF: int
                TAG_MMSD: int
                TAG_MMFX: int
                TAG_BASE: int
                TAG_GDEF: int
                TAG_GPOS: int
                TAG_JSTF: int
                TAG_EBDT: int
                TAG_EBLC: int
                TAG_EBSC: int
                TAG_LTSH: int
                TAG_PCLT: int
                TAG_ACNT: int
                TAG_AVAR: int
                TAG_BDAT: int
                TAG_BLOC: int
                TAG_CVAR: int
                TAG_FEAT: int
                TAG_FDSC: int
                TAG_FMTX: int
                TAG_JUST: int
                TAG_LCAR: int
                TAG_MORT: int
                TAG_OPBD: int
                TAG_PROP: int
                TAG_TRAK: int
                getVersion(): int
                getFontTable(arg0: int): byte[]
                getFontTable(arg0: java.lang.String | string): byte[]
                getFontTable(arg0: int, arg1: int, arg2: int): byte[]
                getFontTable(arg0: java.lang.String | string, arg1: int, arg2: int): byte[]
                getFontTableSize(arg0: int): int
                getFontTableSize(arg0: java.lang.String | string): int
            }
        }
    }
}