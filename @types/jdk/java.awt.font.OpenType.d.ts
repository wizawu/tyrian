declare namespace java {
  namespace awt {
    namespace font {

      interface OpenType {
        public static readonly TAG_CMAP: int
        public static readonly TAG_HEAD: int
        public static readonly TAG_NAME: int
        public static readonly TAG_GLYF: int
        public static readonly TAG_MAXP: int
        public static readonly TAG_PREP: int
        public static readonly TAG_HMTX: int
        public static readonly TAG_KERN: int
        public static readonly TAG_HDMX: int
        public static readonly TAG_LOCA: int
        public static readonly TAG_POST: int
        public static readonly TAG_OS2: int
        public static readonly TAG_CVT: int
        public static readonly TAG_GASP: int
        public static readonly TAG_VDMX: int
        public static readonly TAG_VMTX: int
        public static readonly TAG_VHEA: int
        public static readonly TAG_HHEA: int
        public static readonly TAG_TYP1: int
        public static readonly TAG_BSLN: int
        public static readonly TAG_GSUB: int
        public static readonly TAG_DSIG: int
        public static readonly TAG_FPGM: int
        public static readonly TAG_FVAR: int
        public static readonly TAG_GVAR: int
        public static readonly TAG_CFF: int
        public static readonly TAG_MMSD: int
        public static readonly TAG_MMFX: int
        public static readonly TAG_BASE: int
        public static readonly TAG_GDEF: int
        public static readonly TAG_GPOS: int
        public static readonly TAG_JSTF: int
        public static readonly TAG_EBDT: int
        public static readonly TAG_EBLC: int
        public static readonly TAG_EBSC: int
        public static readonly TAG_LTSH: int
        public static readonly TAG_PCLT: int
        public static readonly TAG_ACNT: int
        public static readonly TAG_AVAR: int
        public static readonly TAG_BDAT: int
        public static readonly TAG_BLOC: int
        public static readonly TAG_CVAR: int
        public static readonly TAG_FEAT: int
        public static readonly TAG_FDSC: int
        public static readonly TAG_FMTX: int
        public static readonly TAG_JUST: int
        public static readonly TAG_LCAR: int
        public static readonly TAG_MORT: int
        public static readonly TAG_OPBD: int
        public static readonly TAG_PROP: int
        public static readonly TAG_TRAK: int
        getVersion(): int
        getFontTable(arg0: int): byte[]
        getFontTable(arg0: java.lang.String): byte[]
        getFontTable(arg0: int, arg1: int, arg2: int): byte[]
        getFontTable(arg0: java.lang.String, arg1: int, arg2: int): byte[]
        getFontTableSize(arg0: int): int
        getFontTableSize(arg0: java.lang.String): int
      }

    }
  }
}
