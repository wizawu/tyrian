declare namespace java {
  namespace awt {
    namespace font {
      interface OpenType {
        readonly TAG_CMAP: int
        readonly TAG_HEAD: int
        readonly TAG_NAME: int
        readonly TAG_GLYF: int
        readonly TAG_MAXP: int
        readonly TAG_PREP: int
        readonly TAG_HMTX: int
        readonly TAG_KERN: int
        readonly TAG_HDMX: int
        readonly TAG_LOCA: int
        readonly TAG_POST: int
        readonly TAG_OS2: int
        readonly TAG_CVT: int
        readonly TAG_GASP: int
        readonly TAG_VDMX: int
        readonly TAG_VMTX: int
        readonly TAG_VHEA: int
        readonly TAG_HHEA: int
        readonly TAG_TYP1: int
        readonly TAG_BSLN: int
        readonly TAG_GSUB: int
        readonly TAG_DSIG: int
        readonly TAG_FPGM: int
        readonly TAG_FVAR: int
        readonly TAG_GVAR: int
        readonly TAG_CFF: int
        readonly TAG_MMSD: int
        readonly TAG_MMFX: int
        readonly TAG_BASE: int
        readonly TAG_GDEF: int
        readonly TAG_GPOS: int
        readonly TAG_JSTF: int
        readonly TAG_EBDT: int
        readonly TAG_EBLC: int
        readonly TAG_EBSC: int
        readonly TAG_LTSH: int
        readonly TAG_PCLT: int
        readonly TAG_ACNT: int
        readonly TAG_AVAR: int
        readonly TAG_BDAT: int
        readonly TAG_BLOC: int
        readonly TAG_CVAR: int
        readonly TAG_FEAT: int
        readonly TAG_FDSC: int
        readonly TAG_FMTX: int
        readonly TAG_JUST: int
        readonly TAG_LCAR: int
        readonly TAG_MORT: int
        readonly TAG_OPBD: int
        readonly TAG_PROP: int
        readonly TAG_TRAK: int
        getVersion(): number
        getFontTable(arg0: number | java.lang.Integer): number[]
        getFontTable(arg0: java.lang.String | string): number[]
        getFontTable(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number[]
        getFontTable(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): number[]
        getFontTableSize(arg0: number | java.lang.Integer): number
        getFontTableSize(arg0: java.lang.String | string): number
      }
    }
  }
}
