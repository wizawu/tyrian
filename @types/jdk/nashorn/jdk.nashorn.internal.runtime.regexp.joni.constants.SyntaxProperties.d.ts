declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace constants {
                            interface SyntaxProperties {
                                OP_VARIABLE_META_CHARACTERS: int
                                OP_DOT_ANYCHAR: int
                                OP_ASTERISK_ZERO_INF: int
                                OP_ESC_ASTERISK_ZERO_INF: int
                                OP_PLUS_ONE_INF: int
                                OP_ESC_PLUS_ONE_INF: int
                                OP_QMARK_ZERO_ONE: int
                                OP_ESC_QMARK_ZERO_ONE: int
                                OP_BRACE_INTERVAL: int
                                OP_ESC_BRACE_INTERVAL: int
                                OP_VBAR_ALT: int
                                OP_ESC_VBAR_ALT: int
                                OP_LPAREN_SUBEXP: int
                                OP_ESC_LPAREN_SUBEXP: int
                                OP_ESC_AZ_BUF_ANCHOR: int
                                OP_ESC_CAPITAL_G_BEGIN_ANCHOR: int
                                OP_DECIMAL_BACKREF: int
                                OP_BRACKET_CC: int
                                OP_ESC_W_WORD: int
                                OP_ESC_LTGT_WORD_BEGIN_END: int
                                OP_ESC_B_WORD_BOUND: int
                                OP_ESC_S_WHITE_SPACE: int
                                OP_ESC_D_DIGIT: int
                                OP_LINE_ANCHOR: int
                                OP_POSIX_BRACKET: int
                                OP_QMARK_NON_GREEDY: int
                                OP_ESC_CONTROL_CHARS: int
                                OP_ESC_C_CONTROL: int
                                OP_ESC_OCTAL3: int
                                OP_ESC_X_HEX2: int
                                OP_ESC_X_BRACE_HEX8: int
                                OP2_ESC_CAPITAL_Q_QUOTE: int
                                OP2_QMARK_GROUP_EFFECT: int
                                OP2_OPTION_PERL: int
                                OP2_OPTION_RUBY: int
                                OP2_PLUS_POSSESSIVE_REPEAT: int
                                OP2_PLUS_POSSESSIVE_INTERVAL: int
                                OP2_CCLASS_SET_OP: int
                                OP2_QMARK_LT_NAMED_GROUP: int
                                OP2_ESC_K_NAMED_BACKREF: int
                                OP2_ESC_G_SUBEXP_CALL: int
                                OP2_ATMARK_CAPTURE_HISTORY: int
                                OP2_ESC_CAPITAL_C_BAR_CONTROL: int
                                OP2_ESC_CAPITAL_M_BAR_META: int
                                OP2_ESC_V_VTAB: int
                                OP2_ESC_U_HEX4: int
                                OP2_ESC_GNU_BUF_ANCHOR: int
                                OP2_ESC_P_BRACE_CHAR_PROPERTY: int
                                OP2_ESC_P_BRACE_CIRCUMFLEX_NOT: int
                                OP2_ESC_H_XDIGIT: int
                                OP2_INEFFECTIVE_ESCAPE: int
                                CONTEXT_INDEP_ANCHORS: int
                                CONTEXT_INDEP_REPEAT_OPS: int
                                CONTEXT_INVALID_REPEAT_OPS: int
                                ALLOW_UNMATCHED_CLOSE_SUBEXP: int
                                ALLOW_INVALID_INTERVAL: int
                                ALLOW_INTERVAL_LOW_ABBREV: int
                                STRICT_CHECK_BACKREF: int
                                DIFFERENT_LEN_ALT_LOOK_BEHIND: int
                                CAPTURE_ONLY_NAMED_GROUP: int
                                ALLOW_MULTIPLEX_DEFINITION_NAME: int
                                FIXED_INTERVAL_IS_GREEDY_ONLY: int
                                NOT_NEWLINE_IN_NEGATIVE_CC: int
                                BACKSLASH_ESCAPE_IN_CC: int
                                ALLOW_EMPTY_RANGE_IN_CC: int
                                ALLOW_DOUBLE_RANGE_OP_IN_CC: int
                                WARN_CC_OP_NOT_ESCAPED: int
                                WARN_REDUNDANT_NESTED_REPEAT: int
                                POSIX_COMMON_OP: int
                                GNU_REGEX_OP: int
                                GNU_REGEX_BV: int
                            }
                        }
                    }
                }
            }
        }
    }
}